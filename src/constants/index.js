/**
 * set base in vite config /repo name/
 * import base here and update dynamic path for images and icons
 */

const base = import.meta.env.BASE_URL;

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Circula App, Sydney",
    // icon: "/icons/circula.png",
    icon: `${base}icons/circula.png`,
    icon_bg: "#076964",
    date: "Aug 2024 - Nov 2024",
    description:
      "Developed an interactive university-focused app that helps students discover events using an intuitive map-based interface like Airbnb and Google Map.",
    points: [
      "Built and optimized event detail pages by using React.js with TypeScript, allowing users to book and explore activities seamlessly, aligned with UI/UX designs from Figma.",
      "Structured dynamic routing using Next.js core features to enhance app scalability and navigability.",
      "Refactored and modularized components, improving code readability and maintainability for future iterations.",
      "Led sprint planning and user story updates, driving successful outcomes in an Agile/Scrum environment",
    ],
  },
  {
    title: "Gaming Backend Developer",
    company_name: "Splandor AI Planning, Melbourne",
    // icon: "icons/splendor.png",
    icon: `${base}icons/splendor.png`,
    icon_bg: "#fdf245",
    date: "Mar 2024 - Jun 2024",
    description:
      "Implemented heuristic search algorithm to the Splender game, enabling making the best decision to win, given current conext.",
    points: [
      "Constructed and developed a Monte Carlo Tree Search (MCTs) algorithm from scratch, achieving optimal game strategies by iterating.",
      "Achieved top 3 position among over 90 teams by leveraging the UCT algorithm for highest reward calculations, each with distinct policy and reward computation based on well-designed game strategies.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "University Internship, Melbourne",
    // icon: "icons/unimelb.png",
    icon: `${base}icons/unimelb.png`,
    icon_bg: "#6fa5d9",
    date: "Nov 2023- Mar 2024",
    description:
      "Built a membership and event management system for an education startup",
    points: [
      "Designed and developed a RESTful API to manage user and event data efficiently.",
      "Implemented secure authentication and authorization protocols with Node.js, JWT, and cookies, ensuring data protection as an industry-grade security practice.",
      "Created dynamic schemas and configured MongoDB Cloud database platform for agile data manipulation based on business needs.",
      "Deployed a React.js frontend on Firebase and a backend on Heroku, achieving global scalability.",
      "Invented a Netflix-like custom carousel for course display using vanilla JavaScript and React.js, without relying on any library.",
    ],
  },
];

const projectItems = [
  {
    id: 1,
    icon: "🤖",
    label: "AI Prompt Search",
    title: "AI Prompt Search",
    // img: "/images/prompt-search.png",
    img: `${base}images/prompt-search.png`,
    description:
      "This is a web-based platform empowers users to explore, design, and exchange creative AI prompts with ease. Built using cutting-edge technologies like Next.js 14, Next Auth and MongoDB. Once logged in via Google account, users can browse, create, and manage prompts. A powerful search bar enables quick discovery by keyword, hashtag, or username, ensuring you find the right prompts.",
    tech: ["Next.JS 14", "React", "Tailwind.CSS", "MongoDB"],
  },
  {
    id: 2,
    icon: "📅",
    label: "Circula App",
    title: "Circula App",
    // img: "/images/circula.png",
    img: `${base}images/circula.png`,
    description:
      "Circula is a responsive web-based platform designed to enrich university life by aggregating and showcasing events and opportunities for students. With its intuitive, Airbnb-style map-based interface, Circula makes it easy for users to discover and engage in academic, social, and cultural events happening across campus.",
    tech: ["Next.JS 14", "React", "Tailwind.CSS", "FastAPI", "mySQL"],
  },
  {
    id: 3,
    icon: "🏃🏽‍♀️‍➡️",
    label: "How to Find Ur Grandma",
    title: "How to Find Ur Grandma",
    // img: "images/grandma.png",
    img: `${base}images/grandma.png`,
    description:
      "This Android app is designed to help seniors track their exercise routines and ensure safety during walks. Family members can monitor real-time routes, check-ins, and shared activity data, fostering better communication and safety. Key features include real-time route tracking, calorie counters, photo capture along paths, and secure user authentication.",
    tech: ["Android Mobile", "Kotlin", "Firebase Auth", "Firestore"],
  },
];

const socialMedia = [
  {
    name: "github",
    // icon: "/icons/github.svg",
    icon: `${base}icons/github.svg`,
    url: "https://github.com/ivany-tan",
  },
  {
    name: "linkedin",
    // icon: "/icons/linkedin.svg",
    icon: `${base}icons/linkedin.svg`,
    url: "https://www.linkedin.com/in/yujie-tan/",
  },
];

export { experiences, projectItems, socialMedia };
