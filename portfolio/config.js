/**
 * ============================================================
 *  PORTFOLIO CONFIG — ANUP SAHU
 *  Edit ONLY this file to update any content on the portfolio.
 *  After editing, just save & commit — changes reflect live.
 * ============================================================
 */

const PORTFOLIO = {

  /* ─────────────────────────────────────────
     META — SEO & browser tab
  ───────────────────────────────────────── */
  meta: {
    title:       "Anup Sahu | Cybersecurity Analyst (VAPT) & Full-Stack Developer",
    description: "Cybersecurity Analyst at Cartel Software · VAPT specialist · Full-Stack MERN Developer · Based in Bengaluru, India.",
    keywords:    "Cybersecurity, VAPT, Penetration Testing, Full-Stack, MERN, React, Node.js, Burp Suite, OWASP",
    author:      "Anup Sahu",
    ogImage:     "assets/images/",   // replace with your actual photo path
    favicon:     "assets/images/favicon.png", // optional favicon
  },

  /* ─────────────────────────────────────────
     HERO
  ───────────────────────────────────────── */
  hero: {
    name:     "ANUP SAHU",
    tagline:  "Cybersecurity Analyst (VAPT) & Full-Stack Developer",
    location: "Bengaluru, Karnataka, India",
    // Typewriter cycling roles
    roles: [
      "Cybersecurity Analyst (VAPT)",
      "Penetration Tester",
      "Full-Stack Developer",
      "MERN Stack Engineer",
      // "Bug Hunter 🐛",
      "Open to Opportunities 🚀",
    ],
    description:
      "Cybersecurity Analyst at Cartel Software · VAPT specialist hunting XSS, SQLi & misconfigs · Full-Stack MERN developer shipping production apps. Based in Bengaluru, India.",
    ctaPrimary:   { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Get In Touch",  href: "mailto:anupsahu7@zohomail.in" },
  },

  /* ─────────────────────────────────────────
     ABOUT
  ───────────────────────────────────────── */
  about: {
    photo: "assets/images/Anup_Sahu.jpeg",
    paragraphs: [
      `I'm a <strong>Cybersecurity Analyst (VAPT)</strong> currently working at Cartel Software Pvt. Ltd. in Bengaluru, with a background in full-stack web development. My stack spans React.js, Node.js, Express.js, MongoDB — and on the security side, Burp Suite, Metasploit, Nmap, and Wireshark.`,
      `I conduct <strong>vulnerability assessments and penetration testing</strong> on web applications, identify OWASP Top 10 vulnerabilities, and deliver actionable remediation reports. I'm certified in a comprehensive cybersecurity program covering Network Pentesting, Active Directory attacks, SOC operations, and Web App security.`,
      `I've trained AI models at Outlier.ai, completed an enterprise SAP/ERP apprenticeship at NTPC, and shipped real-world projects like a full travel booking platform and MERN e-commerce system — bridging dev and security in everything I do.`,
    ],
    stats: [
      { number: 74,  label: "LeetCode Solved", color: "var(--neon-green)"  },
      { number: 19,  label: "Security Labs",   color: "var(--neon-blue)"   },
      { number: 3,   label: "Live Projects",   color: "var(--neon-purple)" },
    ],
  },

  /* ─────────────────────────────────────────
     SKILLS  (add/remove/reorder freely)
  ───────────────────────────────────────── */
  skills: [
    {
      category: "// LANGUAGES",
      color: "var(--neon-green)",
      tags: ["JavaScript", "SQL", "Python", "Bash", "HTML5", "CSS3"],
    },
    {
      category: "// FRONTEND",
      color: "var(--neon-blue)",
      tags: ["React.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "// BACKEND",
      color: "var(--neon-purple)",
      tags: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      category: "// DATABASES",
      color: "var(--neon-orange)",
      tags: ["MongoDB", "MySQL", "SQL"],
    },
    {
      category: "// VAPT & PENTESTING",
      color: "var(--neon-green)",
      tags: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "Sqlmap", "Nikto", "OWASP-ZAP", "Gobuster", "wpscan", "aircrack-ng"],
    },
    {
      category: "// WEB SECURITY",
      color: "var(--neon-purple)",
      tags: ["OWASP Top 10", "XSS", "SQL Injection", "CSRF", "IDOR", "Auth Bypass", "Session Hijacking", "File Upload Attacks", "WAF Bypass", "Bug Bounty"],
    },
    {
      category: "// NETWORK SECURITY",
      color: "var(--neon-blue)",
      tags: ["TCP/IP", "OSI Model", "Firewall Config", "IDS/IPS", "VPN", "DNSSEC", "Subnetting", "Packet Analysis", "NAT/PAT"],
    },
    {
      category: "// ACTIVE DIRECTORY & SOC",
      color: "var(--neon-green)",
      tags: ["Active Directory", "Kerberos", "AD Pentesting", "SIEM", "IBM QRadar", "Splunk", "SOAR", "Threat Hunting", "IOC/IOA"],
    },
    {
      category: "// VULNERABILITY MGMT",
      color: "var(--neon-orange)",
      tags: ["CVSS Scoring", "VA Scanning", "Risk Assessment", "MITRE ATT&CK", "Cyber Kill Chain", "Patch Management", "Pentest Reporting"],
    },
    {
      category: "// CRYPTOGRAPHY & COMPLIANCE",
      color: "var(--neon-green)",
      tags: ["SSL/TLS", "Hashing", "PKI", "Disk Encryption", "Steganography", "OWASP/PTES", "GDPR/HIPAA", "ISO 27001", "NIST CSF"],
    },
    {
      category: "// OS & TOOLS",
      color: "var(--neon-purple)",
      tags: ["Kali Linux", "Parrot OS", "Ubuntu", "Windows", "Git", "GitHub", "Power BI", "SAP ERP", "EDR/XDR", "DLP"],
    },
  ],

  /* ─────────────────────────────────────────
     PROJECTS
  ───────────────────────────────────────── */
  projects: [
    {
      number: "01",
      name: "WanderLust",
      description: "Full-stack travel listing platform with secure auth, map-based listings via Mapbox, cloud image uploads (Cloudinary/Multer), RESTful APIs, and a fully responsive UI.",
      fullDescription: "A comprehensive travel booking platform enabling users to discover and list accommodations worldwide. Features include real-time map visualization, secure authentication, image management via Cloudinary, and responsive design across all devices.",
      type: "hosted",
      tech: ["Node.js", "Express.js", "MongoDB", "Mapbox", "Cloudinary", "REST APIs"],
      icon: "✈️",
      color: "var(--neon-green)",
      links: [
        { label: "Live Demo", href: "https://wanderlust-i5gd.onrender.com/listings" },
        { label: "GitHub", href: "https://github.com/SuperANUP07" },
      ],
    },
    {
      number: "02",
      name: "Cryptrion Cyber",
      description: "Cybersecurity-focused platform delivering threat intelligence and security insights with modern dark UI emphasizing trust and precision.",
      fullDescription: "A specialized cybersecurity information hub providing real-time threat feeds, vulnerability assessments, and security best practices. Designed with accessibility and user-centric security principles.",
      type: "hosted",
      tech: ["React.js", "Vercel", "Cybersecurity", "Threat Intelligence"],
      icon: "🛡️",
      color: "var(--neon-blue)",
      links: [
        { label: "Live Demo",    href: "https://cryptrion-cyber.vercel.app/"   },
        { label: "Threats Feed", href: "https://cryptrion-threats.vercel.app/" },
      ],
    },
    {
      number: "03",
      name: "E-Commerce Platform",
      description: "Secure MERN stack application with user authentication, product catalog, shopping cart, and payment integration. Enterprise-grade architecture.",
      fullDescription: "A full-featured e-commerce solution built on the MERN stack with secure user authentication, product management, shopping cart functionality, and seamless payment processing.",
      type: "github",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Authentication"],
      icon: "🛒",
      color: "var(--neon-purple)",
      links: [
        { label: "GitHub", href: "https://github.com/SuperANUP07" },
        { label: "View Code", href: "https://github.com/SuperANUP07" },
      ],
    },
    {
      number: "04",
      name: "Simon Says Game",
      description: "Interactive web-based memory game with sequence generation, progressive difficulty, and dynamic visual feedback.",
      fullDescription: "A browser-based implementation of the classic Simon Says game featuring random color sequence generation, increasing difficulty levels, and engaging visual and audio feedback.",
      type: "github",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      icon: "🎮",
      color: "var(--neon-orange)",
      links: [
        { label: "GitHub", href: "https://github.com/SuperANUP07" },
        { label: "View Repo", href: "https://github.com/SuperANUP07" },
      ],
    },
  ],

  /* ─────────────────────────────────────────
     SECURITY STATS
  ───────────────────────────────────────── */
  security: {
    portswigger: {
      level:       "NEWBIE",
      apprentice:  { done: 19, total: 61  },
      practitioner:{ done: 5,  total: 174 },
      expert:      { done: 0,  total: 39  },
      vulnCoverage: 8, // percentage
    },
    leetcode: {
      profileUrl: "https://leetcode.com/u/anup_07/",
      rank:       "1,906,305",
      total:      74,
      easy:       { done: 44, total: 943  },
      medium:     { done: 26, total: 2054 },
      hard:       { done: 4,  total: 933  },
      activeDays: 26,
      maxStreak:  7,
      primaryLang:"JavaScript",
    },
  },

  /* ─────────────────────────────────────────
     EXPERIENCE  (most recent first)
  ───────────────────────────────────────── */
  experience: [
    {
      current:  true,
      period:   "DEC 2025 – PRESENT",
      role:     "Cybersecurity Analyst (VAPT)",
      company:  "Cartel Software Private Limited",
      location: "Bengaluru, Karnataka · On-site",
      color:    "var(--neon-green)",
      bullets: [
        "Conducted vulnerability assessments on web applications using Nmap and manual testing techniques.",
        "Identified and analyzed vulnerabilities such as XSS, SQL Injection, and security misconfigurations in alignment with OWASP Top 10.",
        "Performed penetration testing on lab and real-world environments, documenting detailed findings with remediation recommendations.",
        "Utilized tools including Burp Suite, Wireshark, and Metasploit for web security testing and network traffic analysis.",
        "Collaborated in validating security fixes and improving overall application security posture.",
        "Actively engaged in hands-on labs and CTF challenges to enhance practical cybersecurity skills.",
      ],
      skills: ["Ethical Hacking", "VAPT", "Burp Suite", "OWASP Top 10", "Metasploit", "Wireshark"],
    },
    {
      current:  false,
      period:   "JUL 2024 – OCT 2025 · 1 YR 4 MOS",
      role:     "AI Trainer",
      company:  "Outlier AI",
      location: "Freelance · Remote, India",
      color:    "var(--neon-blue)",
      bullets: [
        "Collaborated with Outlier.ai to test and evaluate AI-generated responses for Mathematics and Hindi subjects (Grade 6 curriculum).",
        "Designed, reviewed, and optimized bilingual educational prompts to assess quality, accuracy, and contextual relevance of model outputs.",
        "Identified content gaps and recommended improvements to align with NCERT learning outcomes.",
        "Applied prompt engineering techniques to refine model responses and enhance AI's ability to support student learning.",
        "Reported detailed feedback to product and research teams to aid model fine-tuning.",
      ],
      skills: [],
    },
    {
      current:  false,
      period:   "MAY 2022 – AUG 2022 · 4 MOS",
      role:     "ERP / SAP & Data Analytics Trainee",
      company:  "National Thermal Power Corporation Ltd. (NTPC)",
      location: "Apprenticeship · Korba, Chhattisgarh · On-site",
      color:    "var(--neon-purple)",
      bullets: [
        "Gained hands-on exposure to enterprise ERP (SAP) systems and cross-functional business process integration.",
        "Developed SQL queries for structured data extraction and assisted in creating automated reporting templates.",
        "Acquired foundational knowledge of data handling and migration using XML.",
      ],
      skills: [],
    },
    {
      current:  false,
      period:   "AUG 2021 – APR 2022 · 9 MOS",
      role:     "Web Developer",
      company:  "The Sparks Foundation",
      location: "Internship · Remote",
      color:    "var(--neon-orange)",
      bullets: [
        "Developed responsive user interfaces using HTML, CSS, and Bootstrap as part of an intensive training program.",
        "Gained introductory experience in backend integration using SQL and PHP.",
      ],
      skills: [],
    },
  ],

  /* ─────────────────────────────────────────
     EDUCATION
  ───────────────────────────────────────── */
  education: [
    {
      degree:  "B.Tech – Computer Science & Engineering",
      school:  "Chhattisgarh Swami Vivekanand Technical University",
      location:"Bhilai, Chhattisgarh",
      cgpa:    "7.89 / 10",
      year:    "2019 – 2023",
    },
    {
      degree:  "XII (Senior Secondary) – PCM",
      school:  "Carmel Convent School",
      location:"Bishrampur, Chhattisgarh",
      cgpa:    "",
      year:    "",
    },
  ],

  /* ─────────────────────────────────────────
     CERTIFICATIONS
  ───────────────────────────────────────── */
  certifications: [
    {
      icon:   "🛡️",
      title:  "Cybersecurity Analyst – Full Program",
      issuer: "VAPT · Network Security · AD · SOC · Web Pentesting · Compliance",
    },
    {
      icon:   "🏅",
      title:  "SQL and Relational Databases 101",
      issuer: "IBM · Cognitive Class.ai",
    },
    {
      icon:   "🌐",
      title:  "Web Development Certification",
      issuer: "The Sparks Foundation · HTML, CSS, Bootstrap, SQL",
    },
    {
      icon:   "🔐",
      title:  "Burp Suite Practitioner (In Progress)",
      issuer: "PortSwigger Web Security Academy",
    },
  ],

  /* ─────────────────────────────────────────
     SOCIAL / CONTACT LINKS
  ───────────────────────────────────────── */
  contact: {
    email:     "anupsahu7@zohomail.in",
    emailAlt:  "anupsahu0703@gmail.com",
    phone:     "+91-9399592497",
    links: [
      { icon: "📧", label: "anupsahu7@zohomail.in",  href: "mailto:anupsahu7@zohomail.in"                              },
      { icon: "📬", label: "Gmail",                  href: "mailto:anupsahu0703@gmail.com"                             },
      { icon: "💼", label: "LinkedIn",               href: "https://linkedin.com/in/anup-sahu-6742aa1b8"               },
      { icon: "💻", label: "GitHub",                 href: "https://github.com/SuperANUP07"                            },
      { icon: "🧩", label: "LeetCode",               href: "https://leetcode.com/u/anup_07/"                           },
      { icon: "🔐", label: "PortSwigger",            href: "https://portswigger.net/web-security/dashboard"            },
      { icon: "🐦", label: "Twitter / X",            href: "https://x.com/AnupSah28229626"                             },
      { icon: "📸", label: "Instagram",              href: "https://www.instagram.com/royal_sahu07/"                   },
    ],
  },

  /* ─────────────────────────────────────────
     FOOTER
  ───────────────────────────────────────── */
  footer: {
    name:      "Anup Sahu",
    tagline:   "Cybersecurity Analyst (VAPT) & Full-Stack Developer",
    year:      new Date().getFullYear(),
    copyright: "© 2024-2026 Anup Sahu. All rights reserved. | Privacy Policy · Terms of Service",
  },

};
