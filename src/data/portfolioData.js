export const portfolioData = {
  name: "Muhammad Shaheer",
  role: "Front-End Developer",
  phone: "+92-313-4840151",
  email: "muhammadshaheer2002@gmail.com",
  locationNote: "Pakistan",
  resumeUrl: "https://drive.google.com/uc?id=1wZzsS9D-zKIp3Wl4jXO87uBZ3GWlMhB0&export=download", // ✅ resume download link

  summary:
    "Creative Front-End Web Developer skilled in HTML, CSS, JavaScript and React JS with expertise in building responsive, user-friendly interfaces. Strong in performance optimization, cross-browser compatibility, and collaborating with designers and backend teams.",

  skills: [
    "React JS","JavaScript","HTML5","CSS3","Bootstrap","Tailwind CSS","Material UI",
    "Teamwork","Project Management","Performance Optimization","Cross-Browser Compatibility",
    "Figma (Basic)","Canva (Basic)","Data Entry","Effective Communication",
  ],

  experience: [
    {
      title: "Front-End Web Developer Intern",
      company: "Cognixia Tech",
      year: "2025",
      points: [
        "Designed and developed a responsive company dashboard and a service showcase website.",
        "Collaborated on UI/UX using Figma, translating designs into interactive and user-friendly interfaces.",
        "Improved user experience and brand presence through optimized front-end development.",
      ],
    },
  ],

  education: [
    {
      institute: "University of Management And Technology",
      degree: "BS Computer Science",
      years: "2022 - Present",
    },
    {
      institute: "WebDevrs Academy",
      degree: "Front-End Developer Course",
      years: "2022 - 2023",
    },
    {
      institute: "Lahore Graphics School",
      degree: "Graphic Designer Course",
      years: "2023",
    },
    {
      institute: "Crescent College",
      degree: "Intermediate (ICS)",
      years: "2020 - 2022",
    },
    {
      institute: "Crescent Model High Secondary School",
      degree: "Matric (Computer)",
      years: "2018 - 2020",
    },
  ],

  // ✅ Add categories for filtering: "React", "UI", "Dashboards"
  projects: [
    {
      title: "Cognixia Dashboard",
      desc: "Responsive ticket management system dashboard UI with reusable components and clean layout.",
      tech: ["React", "Figma", "Tailwind","Bootstrap", "Framer Motion"],
      category: "Dashboards",
      live: "https://example.com",
    //   code: "https://github.com/",
    },
    {
      title: "Showcase Website",
      desc: "Modern landing page and responsiveness.",
      tech: ["React", "Bootstrap", "Framer Motion"],
      category: "UI",
      // live: "https://example.com",
      code: "https://github.com/MShaheer021/Sub-Menu",
    },
    {
      title: "React Portfolio",
      desc: "Portfolio site with animations, filters, blog and resume download.",
      tech: ["React", "Tailwind", "EmailJS"],
      category: "React",
      live: "https://example.com",
    //   code: "https://github.com/",
    },
  ],

  // ✅ Blog (JSON-based)
  blogPosts: [
    {
      id: "react-performance",
      title: "React Performance Tips I Actually Use",
      date: "2026-01-15",
      tags: ["React", "Performance"],
      excerpt: "How I reduce re-renders, split components, and keep UI snappy on real projects.",
      content: [
        "I start with profiling (React DevTools) to find the actual bottleneck.",
        "Then I split heavy components and memoize stable parts using React.memo/useMemo.",
        "For large lists, virtualization and pagination helps a lot.",
      ],
    },
    {
      id: "tailwind-layouts",
      title: "Building Clean Layouts with Tailwind",
      date: "2026-01-10",
      tags: ["Tailwind", "UI"],
      excerpt: "My go-to layout patterns for responsive sections and reusable components.",
      content: [
        "Use max-w containers, consistent paddings, and grid for structure.",
        "Prefer small utility groups and extract repeated blocks into components.",
        "Always test mobile first, then scale up with md/lg.",
      ],
    },
  ],
};
