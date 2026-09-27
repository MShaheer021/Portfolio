import React, { useState } from "react";
import { FiArrowUpRight, FiArrowDown, FiGithub, FiDownload, FiMenu, FiX, FiMapPin, FiCode, FiLayers, FiCamera, FiTerminal } from "react-icons/fi";
import { portfolioData as data } from "./data/portfolioData";
import Contact from "./Sections/Contact";

const links = [["Work", "projects"], ["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Contact", "contact"]];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(data.projects.map((p) => p.category))];
  const projects = data.projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="wordmark" href="#home" aria-label="Shaheer home"><span className="logo-bracket">&lt;</span>shaheer<span className="logo-bracket"> /&gt;</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          <a className="button button-small nav-resume" href={data.resumeUrl} download>Resume <FiDownload /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<FiArrowUpRight /></a>)}</nav>}
      </header>
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> REACT.JS DEVELOPER / LAHORE, PK</p>
            <p className="hero-command"><span>~/portfolio</span> $ hello, world_</p><h1>I turn ideas into<br /><span>digital reality.</span></h1>
            <p className="hero-description">I’m Muhammad Shaheer — a front-end developer building responsive interfaces, interactive dashboards, and experiences that feel right.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <FiArrowUpRight /></a><a className="text-link" href={data.githubUrl} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a></div>
            <div className="hero-note"><span className="small-avatar"><FiCode /></span><div>Currently building <a href="https://www.jaiza.site/" target="_blank" rel="noreferrer">Jaiza <FiArrowUpRight /></a><small>Business discovery, with a local perspective.</small></div></div>
          </div>
          <div className="developer-visual">
            <div className="editor-orbit" aria-hidden="true" />
            <div className="code-editor">
              <div className="editor-titlebar"><div className="window-dots"><i /><i /><i /></div><span>shaheer / workspace</span><FiCode /></div>
              <div className="editor-tab"><span>JS</span> developer.js <FiX /><span className="editor-tab-line" /></div>
              <div className="editor-code" aria-label="JavaScript profile of Muhammad Shaheer">
                <div><span className="line-number">01</span><code><span className="syntax-comment">{'// Building for the web.'}</span></code></div>
                <div><span className="line-number">02</span><code><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</code></div>
                <div><span className="line-number">03</span><code>{'  '}name: <span className="syntax-string">&quot;Muhammad Shaheer&quot;</span>,</code></div>
                <div><span className="line-number">04</span><code>{'  '}role: <span className="syntax-string">&quot;Front-End Developer&quot;</span>,</code></div>
                <div><span className="line-number">05</span><code>{'  '}stack: [<span className="syntax-string">&quot;React&quot;</span>, <span className="syntax-string">&quot;JavaScript&quot;</span>],</code></div>
                <div><span className="line-number">06</span><code>{'  '}building: <span className="syntax-string">&quot;Jaiza&quot;</span>,</code></div>
                <div><span className="line-number">07</span><code>{'  '}focus: <span className="syntax-string">&quot;Great user experiences&quot;</span></code></div>
                <div><span className="line-number">08</span><code>{'}'};</code></div>
                <div><span className="line-number">09</span><code> </code></div>
                <div><span className="line-number">10</span><code><span className="syntax-blue">build</span>(developer.<span className="syntax-blue">ideas</span>);<span className="code-cursor" /></code></div>
              </div>
              <div className="editor-terminal"><span><FiTerminal /> TERMINAL</span><p><span>➜</span> React + JavaScript + a creative mindset</p><p className="terminal-note">From the first component to the final detail.</p></div>
              <div className="editor-status"><span>⑂ main</span><span>JavaScript · UTF-8</span></div>
            </div>
            <div className="floating-tech"><FiCode /><span>COMPONENT BY COMPONENT<b>Turning logic into experience.</b></span></div>
          </div>
          <div className="hero-bottom"><span>&lt; BUILD. ITERATE. IMPROVE. /&gt;</span><a href="#projects">Scroll to explore <FiArrowDown /></a></div>
        </section>
        <div className="stack-strip"><div className="container"><span>{'// TECH STACK'}</span>{["React.js", "JavaScript", "Tailwind CSS", "Material UI", "Figma", "Git"].map((s) => <b key={s}>{s}</b>)}</div></div>

        <section id="projects" className="section container">
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED_PROJECTS</p><h2>Code with a purpose<span>.</span></h2></div><p>A selection of interfaces built with care,<br />from discovery platforms to dashboards.</p></div>
          <div className="filters" aria-label="Filter projects">{categories.map((c) => <button key={c} aria-pressed={filter === c} className={filter === c ? "active" : ""} onClick={() => setFilter(c)}>{c}{c === "All" && <span>{data.projects.length.toString().padStart(2, "0")}</span>}</button>)}</div>
          <div className="project-grid">{projects.map((p) => <article className={`project-card ${p.title === "Jaiza" ? "featured" : ""}`} key={p.title}>
            <div className={`project-art ${p.title === "Jaiza" ? "jaiza-art" : p.category === "Dashboards" ? "dashboard-art" : "website-art"}`} aria-hidden="true">
              <span className="art-label">{p.title === "Jaiza" ? "FEATURED PROJECT" : p.category.toUpperCase()}</span>
              {p.title === "Jaiza" ? <div className="jaiza-brand"><span>jaiza<span className="brand-dot">.</span></span><p>Your city. A little closer.</p><div className="map-lines" /><FiMapPin className="map-pin" /></div> : p.category === "Dashboards" ? <div className="dashboard-preview"><div className="preview-nav" /><div className="preview-main"><span>Overview</span><div className="preview-stats"><i /><i /><i /></div><div className="chart">{[35, 55, 42, 72, 60, 88, 76, 95].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div></div></div> : <div className="website-preview"><span>COGNIXIA TECH</span><strong>Digital ideas.<br />Real possibilities.</strong><div /><i /></div>}
              <span className="art-number">0{data.projects.indexOf(p) + 1}</span>
            </div>
            <div className="project-content"><div className="project-title"><h3>{p.title}</h3>{p.live && <a href={p.live} target="_blank" rel="noreferrer" className="circle-link" aria-label={`Visit ${p.title}`}><FiArrowUpRight /></a>}</div><p className="project-period">{p.period}</p><p>{p.desc}</p><div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div></div>
          </article>)}</div>
          <p className="project-footnote">More experiments and code on <a href={data.githubUrl} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a></p>
        </section>

        <section id="about" className="section about-section"><div className="container about-layout"><div><p className="eyebrow">02 / ABOUT_THE_DEVELOPER</p><h2>A developer’s mindset.<br /><span>A creative eye.</span></h2><div className="location"><FiMapPin /> {data.locationNote}</div></div><div><p className="about-lead">I enjoy the space where thoughtful design meets functional code.</p><p>{data.summary}</p><div className="about-facts"><div><span>EDUCATION</span><strong>BS Computer Science</strong><small>University of Management and Technology</small></div><div><span>MY APPROACH</span><strong>Clarity in every component</strong><small>Responsive layouts. Consistent interfaces.</small></div></div><a className="text-link" href={data.resumeUrl} download>Get the full picture <FiDownload /></a></div></div></section>

        <section id="experience" className="section container"><div className="section-heading"><div><p className="eyebrow">03 / EXPERIENCE_LOG</p><h2>Experience that shapes<br />the way I build<span>.</span></h2></div><p>Hands-on learning through real interfaces,<br />teamwork, and a little curiosity.</p></div><div className="experience-list">{data.experience.map((job, i) => <article className="experience-row" key={job.title}><div className="experience-date"><span className={i === 0 ? "current-badge" : "past-badge"}>{i === 0 ? "CURRENT PROJECT" : "INTERNSHIP"}</span><p>{job.year}</p></div><div className="experience-detail"><h3>{job.title}</h3><p className="company">{job.company}</p><ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>{job.live && <a className="text-link" href={job.live} target="_blank" rel="noreferrer">Explore Jaiza <FiArrowUpRight /></a>}</div></article>)}</div></section>

        <section id="skills" className="section skills-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">04 / MY_TOOLKIT</p><h2>My development stack<span>.</span></h2></div><p>A practical foundation for building<br />on the web and collaborating well.</p></div><div className="skills-grid">{data.skillCategories.map((c, i) => <article className="skill-card" key={c.name}><span className="card-index">0{i + 1} /</span><h3>{c.name}</h3><div className="tags">{c.skills.map((s) => <span key={s}>{s}</span>)}</div></article>)}</div></div></section>

        <section id="education" className="section container education-layout"><div><p className="eyebrow">05 / LEARNING_PATH</p><h2>Always learning<span>.</span></h2><p className="section-intro">Academic foundations and focused training<br />that inform my work.</p></div><div>{[...data.education, ...data.training].map((e) => <article className="education-row" key={e.institute}><span>{e.years}</span><h3>{e.degree}</h3><p>{e.institute}</p>{e.details && <small>{e.details}</small>}</article>)}</div></section>

        <section id="creative" className="section container creative-section"><div className="section-heading"><div><p className="eyebrow">06 / BEYOND_THE_CODE</p><h2>A different lens<span>.</span></h2></div><p>Exploring composition, storytelling,<br />and the details that make a difference.</p></div><div className="creative-grid">{data.creativeExperience.map((c, i) => <article key={c.title}><div className="creative-icon">{i === 0 ? <FiCamera /> : <FiLayers />}</div><div><h3>{c.title}</h3><p>{c.description}</p></div><FiArrowUpRight className="creative-arrow" /></article>)}</div></section>
        <Contact />
      </main>
      <footer className="container footer"><a className="wordmark" href="#home">&lt;shaheer /&gt;</a><p>© {new Date().getFullYear()} Muhammad Shaheer</p><a className="text-link" href="#home">Back to top <FiArrowUpRight /></a></footer>
    </>
  );
}
