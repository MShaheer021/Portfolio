# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Portfolio

## Contact form delivery

The contact form uses EmailJS with the existing public service, template, and key.
Optional overrides are documented in `.env.example`; copy it to `.env.local` and
restart the development server (or rebuild for deployment) after changing them.

In the EmailJS dashboard:

1. Confirm that service `service_hxrxtwr` is connected to your email provider.
2. Open template `template_z6v1lte`. Set **To Email** to
   `muhammadshaheer2002@gmail.com` as a fixed recipient.
3. Set **Reply To** to `{{reply_to}}`, **From Name** to `{{from_name}}`, and
   include `{{from_email}}` and `{{message}}` in the body. Keep the sender email
   set to your connected service's email address.
4. If origin restrictions are enabled, allow your local and deployed site origins.
5. Submit a real message and confirm receipt in your inbox or spam folder before
   considering end-to-end delivery verified.

Suggested plain-text template:

```
New portfolio enquiry from {{from_name}}
Email: {{from_email}}

{{message}}
```

The form validates input, prevents concurrent submissions, preserves text on
failure, and times requests out after 20 seconds. A timeout is reported as
unconfirmed delivery, since the provider may still have accepted the message.
Email and WhatsApp links remain available when the provider cannot be reached.
Client-side cooldowns are a usability safeguard, not server-side spam protection.

Reference: https://www.emailjs.com/docs/rest-api/send/
