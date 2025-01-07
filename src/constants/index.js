const base = import.meta.env.BASE_URL;

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Circula Ltd.",
    // icon: "/icons/circula.png",
    icon: `${base}icons/circula.png`,
    icon_bg: "#076964",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Restructured folder architecture and optimized dynamic routing using Next.js features, achieving a clean, efficient app structure that enhanced navigability and scalability.",
      "Elevated code quality and readability by refactoring and modularizing components, facilitating maintainability and adaptability to evolving project needs. Configured Tailwind CSS to streamline component styling, improving clarity and debugging efficiency.",
      "Strengthened project outcomes through effective sprint planning, user story updates, and critical decision-making on tech directions, driving successful Agile collaboration with a 5-member diverse team to consistently meet sprint objectives and deliver high-quality results.",
    ],
  },
  {
    title: "Gaming Backend Algorithm Developer",
    company_name: "University AI Planning for Splandor",
    icon: `${base}icons/splendor.png`,
    icon_bg: "#fdf245",
    date: "Apr 2024 - May 2024",
    points: [
      "Constructed and developed a Monte Carlo Tree Search (MCTs) algorithm from scratch, achieving optimal game strategies by iterating through selection, expansion, simulation, and backpropagation phases. This resulted in securing a top 3 position among over 90 teams, including 5 teaching staff teams, by leveraging the UCT algorithm for highest reward calculations, each with distinct policy and reward computation based on well-designed game strategies.",
      "Adopted an Agile approach to ensure timely and high-quality deliverables, by bi-weekly standup meeting and utilizing Gantt charts for project tracking, which significantly improved team coordination and project management, resulting in the completion of the project within 3.5 weeks and achieving a top 3 ranking for the final product.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "University Internship",
    icon: `${base}icons/unimelb.png`,
    icon_bg: "#6fa5d9",
    date: "Nov 2023- Mar 2024",
    points: [
      "Enhanced Client-Server communication and boosted system efficiency by 30% through implementing a RESTful API with stateless architecture, leveraging rigorous design principles.",
      "Fortified data security by 30% and reduced unauthorized access, mitigating potential security Express.js, incorporating best practices in security and data protection.",
      "Improved query performance by 40% and supported evolving business models, by migrating to a MongoDB-based data infrastructure for agile data manipulation, utilizing MongoDB’s dynamic schema and adapting database design to business needs.",
      "Achieved a 99.9% uptime and expanded global service availability, by deploying a scalable front-end React application on Firebase and a Node.js/Express.js backend on Heroku, leveraging cloud-native technologies and continuous deployment strategies for optimal performance and scalability.",
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
