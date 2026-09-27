const skillCategories = [
  { name: "Front-End & UI", icon: "🎨", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "Material UI", "Responsive Web Design"] },
  { name: "Tools & Development", icon: "🛠️", skills: ["Git", "GitHub", "Figma", "Canva", "Reusable Components", "Dashboard Development", "UI Implementation"] },
  { name: "Creative & Professional", icon: "📷", skills: ["Photography", "Photoshoots", "Basic Video Editing", "Teamwork", "Communication"] },
  { name: "Languages", icon: "💬", skills: ["English (Fluent)", "Urdu (Fluent)", "Punjabi (Conversational)"] },
];

export const portfolioData = {
  name: "Muhammad Shaheer",
  role: "Front-End Developer | React.js Developer",
  phone: "+92-313-4840151",
  email: "muhammadshaheer2002@gmail.com",
  locationNote: "Lahore, Pakistan",
  githubUrl: "https://github.com/MShaheer021",
  resumeUrl: "/Muhammad_Shaheer_CV.pdf",
  summary: "Computer Science student and Front-End Developer building responsive, interactive web interfaces with React.js, JavaScript, Bootstrap, Tailwind CSS, and Material UI. I turn Figma designs into functional interfaces, develop dashboards, and optimize layouts for desktop and mobile. Currently, I contribute to Jaiza, a hyperlocal business discovery and verified-review platform, as its Front-End Developer.",
  skillCategories,
  skills: skillCategories.slice(0, 3).flatMap((category) => category.skills),
  experience: [{
    title: "Front-End Developer — Jaiza",
    company: "Final Year Project · Four-member team",
    year: "2026 - Present",
    live: "https://www.jaiza.site/",
    points: [
      "Contributing as the Front-End Developer to Jaiza, a hyperlocal business discovery and verified-review platform, within a four-member Final Year Project team.",
      "Developing responsive and interactive interfaces for User, Business Owner, and Administrator dashboards.",
      "Implementing front-end interactions for business discovery and map-based user experiences.",
      "Integrating role-based platform functionality while maintaining consistent interfaces and usable layouts across desktop and mobile devices.",
      "Contributing documentation visuals and refining responsiveness, usability, and map interactions.",
    ],
  }, {
    title: "Front-End Web Developer Intern",
    company: "Cognixia Tech",
    year: "2025",
    points: [
      "Designed and developed responsive front-end interfaces for a company dashboard and service showcase website.",
      "Converted Figma concepts into interactive, user-friendly web interfaces and reusable components.",
      "Collaborated with team members to improve UI consistency, responsiveness, usability, and mobile optimization.",
    ],
  }],
  education: [
    { institute: "University of Management and Technology", degree: "Bachelor of Science in Computer Science", years: "2022 - Present", details: "Lahore, Pakistan. Final Year Project: Jaiza — Hyperlocal Business Discovery & Verified Review Platform." },
    { institute: "Crescent College", degree: "Intermediate in Computer Science (ICS)", years: "2020 - 2022" },
    { institute: "Crescent Model Higher Secondary School", degree: "Matriculation — Computer Science", years: "2018 - 2020" },
  ],
  training: [{ institute: "Web Devrs", degree: "MERN Stack Development", years: "2023 - 2024" }],
  projects: [
    {
      title: "Jaiza",
      desc: "Hyperlocal business discovery and verified-review platform. As the Front-End Developer in a four-member final-year project team, I develop responsive User, Business Owner, and Administrator dashboards, business-discovery interfaces, and map-based interactions. My work includes interface consistency, usability, documentation visuals, and integration of role-based functionality.",
      period: "2026 - Present · Final Year Project",
      tech: ["Responsive Interfaces", "Role-Based Dashboards", "Map Interactions"],
      category: "Dashboards",
      live: "https://www.jaiza.site/",
    },
    {
      title: "Cognixia Company Dashboard",
      desc: "Responsive company dashboard interfaces built during my internship at Cognixia Tech, translating Figma concepts into reusable components with consistent layouts and mobile-friendly interactions.",
      period: "2025 · Cognixia Tech Internship",
      tech: ["Figma", "Reusable Components", "Responsive Design"],
      category: "Dashboards",
    },
    {
      title: "Service Showcase Website",
      desc: "A service showcase website developed during my Cognixia Tech internship, with interactive front-end interfaces and a focus on usability, UI consistency, and desktop and mobile optimization.",
      period: "2025 · Cognixia Tech Internship",
      tech: ["UI Implementation", "Responsive Design", "Mobile Optimization"],
      category: "Websites",
    },
  ],
  creativeExperience: [
    { title: "Photography & Photoshoots", description: "Practical experience in composition, framing, subject positioning, and preparing photographs for digital and social-media use." },
    { title: "Basic Video Editing", description: "Beginner-level experience with cutting, trimming, transitions, audio synchronization, and simple visual adjustments." },
  ],
};
