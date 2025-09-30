import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
export const RESUME_DATA = {
  name: "Lawrence Njobo",
  tagline: "Passionate Computer Science Student | Aspiring Cybersecurity Expert | Web Development Enthusiast | Problem Solver",
  statement: "I build secure, efficient, and innovative digital solutions. From automating enterprise systems to developing user-focused web applications.",
  contact: {
    email: "lawrencenjobo9@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lawrence-njobo/",
        icon: Linkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/lawrencenjobo",
        icon: Github,
      },
    ],
  },
  about: {
    photoUrl: "https://avatars.githubusercontent.com/u/101262339?v=4",
    paragraphs: [
      "I'm a Computer Science student at the National University of Science and Technology (NUST), driven by a fascination with DevOps and AI Engineering. Currently, I’m working as an ICT Intern at ICAZ, gaining hands-on experience in a real-world IT environment.",
      "My journey has taught me determination. Raised by my mother, a teacher, I learned the value of hard work early. This drive led me to leadership roles like 2nd Vice Captain/Headboy at St Faith’s and achieving 15 points at A-Level.",
      "I bring that same focus to my technical work. Whether architecting a new server environment or debugging a complex application, I aim for solutions that are both effective and elegant. I’m not just looking for a job—I’m looking to contribute, learn, and tackle the next big challenge.",
    ],
  },
  skills: [
    {
      category: "Languages & Tools",
      items: ["Python", "JavaScript", "Java", "HTML/CSS", "SQL", "Git"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Django", "React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS"],
    },
    {
      category: "Security & DevOps",
      items: ["Sophos Security", "Azure", "Vulnerability Assessment", "Threat Intelligence", "Netlify"],
    },
    {
      category: "Cloud & Systems",
      items: ["Microsoft Power Platform (Power Apps, Power Automate)", "Proxmox VE", "Active Directory", "Dell PowerEdge Servers"],
    },
  ],
  projects: [
    {
      title: "ICAZ Procurement System",
      description: "Engineered an end-to-end procurement system on the Microsoft Power Platform. Digitised a manual process, integrated AI Builder for intelligent document processing, and set up dynamic approval routing.",
      tech: ["Power Apps", "Power Automate", "AI Builder", "SharePoint"],
      links: [
        { name: "Demo", url: "#" },
        { name: "Code/Docs", url: "#" },
      ],
    },
    {
      title: "SkillSync",
      description: "A full-stack web application connecting graduates with job opportunities. Bridges the gap between education and industry.",
      tech: ["Django", "Python", "Streamlit", "NLP"],
      links: [
        { name: "Demo", url: "#" },
        { name: "GitHub", url: "https://github.com/lawrencenjobo/SkillSync" },
      ],
    },
    {
      title: "Full-Stack Blog App",
      description: "Personal project demonstrating full-stack skills. Built with Next.js, MongoDB, Prisma, featuring full CRUD.",
      tech: ["Next.js", "MongoDB", "Prisma"],
      links: [
        { name: "Demo", url: "#" },
        { name: "GitHub", url: "https://github.com/lawrencenjobo/blog-app" },
      ],
    },
  ],
  experience: [
    {
      role: "ICT Intern",
      company: "ICAZ",
      location: "Harare, Zimbabwe",
      period: "Sep 2024 – Present",
    },
    {
      role: "AI Risk Research Extern",
      company: "AI Risk Landscape Program",
      location: "Remote",
      period: "Jun 2024 – Aug 2024",
    },
    {
      role: "Cyber Security Analyst",
      company: "Center for Cyber Security Studies & Research",
      location: "Remote",
      period: "Apr 2024 – May 2024",
    },
    {
      role: "Web Development Intern",
      company: "InternCareer",
      location: "Remote",
      period: "Mar 2024",
    },
  ],
  navLinks: [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ],
} as const;