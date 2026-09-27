import test from 'node:test';
import assert from 'node:assert/strict';
import { sendContact, validateContact, contactConfig } from '../src/lib/contact.js';

const valid = { name: ' Jane Smith ', email: ' jane@example.com ', message: ' I would like to discuss a website. ' };

test('rejects blank names, invalid emails, and short messages', () => {
  assert.deepEqual(Object.keys(validateContact({ name: '  ', email: 'bad@', message: '  hi  ' })), ['name', 'email', 'message']);
  assert.deepEqual(validateContact(valid), {});
});

test('invalid data never reaches the email provider', async () => {
  await assert.rejects(sendContact({ ...valid, message: ' ' }, {
    fetchImpl: () => assert.fail('Unexpected network request'),
  }), /Please check/);
});

test('sends trimmed values and reply-to to the configured service', async () => {
  let captured;
  await sendContact(valid, { fetchImpl: async (url, options) => {
    assert.equal(url, 'https://api.emailjs.com/api/v1.0/email/send');
    assert.equal(options.method, 'POST');
    captured = JSON.parse(options.body);
    return { ok: true, status: 200 };
  } });
  assert.equal(captured.service_id, contactConfig.serviceId);
  assert.equal(captured.template_id, contactConfig.templateId);
  assert.deepEqual(captured.template_params, {
    from_name: 'Jane Smith', from_email: 'jane@example.com',
    reply_to: 'jane@example.com', message: 'I would like to discuss a website.',
  });
  assert.equal(valid.message, ' I would like to discuss a website. ');
});

test('provider failure is never reported as success', async () => {
  for (const status of [400, 401, 403, 500]) {
    await assert.rejects(sendContact(valid, { fetchImpl: async () => ({ ok: false, status }) }), /couldn’t send/);
  }
});

test('rate limits explain how to retry', async () => {
  await assert.rejects(sendContact(valid, { fetchImpl: async () => ({ ok: false, status: 429 }) }), /wait a moment/);
});

test('network failures retain an actionable error', async () => {
  await assert.rejects(sendContact(valid, { fetchImpl: async () => { throw new TypeError('Failed to fetch'); } }), /Check your connection/);
});

test('timeouts abort the request and report uncertain delivery', async () => {
  await assert.rejects(sendContact(valid, { timeoutMs: 5, fetchImpl: async (_, { signal }) =>
    new Promise((_, reject) => signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }))
  }), /may have gone through/);
});
