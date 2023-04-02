import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  pokemon,
  liberet,
  foodapp,
  shortenurl,
  interactivemap,
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Liberet - Menú Local - Full Time",
    icon: liberet,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Collaborate with the team to develop new features, fix bugs, and optimize performance.",
      "Integrate APIs and improve data management for a seamless user experience.",
      "Develop and maintain automated testing suites for stability and reliability.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Liberet - Bricksell - Part Time",
    icon: liberet,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Collaborate with designers and stakeholders to define requirements and develop a user-friendly marketplace website.",
      "Write clean, maintainable, and scalable code using Next.js and TypeScript",
      "Develop and integrate with RESTful APIs and microservices.",
      "Perform code reviews, testing, and debugging.",
      "Continuously improve and optimize website performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food App Demo",
    description:
      "Web application that enables users to order food from their favorite restaurants and have it delivered to their door.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodapp,
    website_link: "https://chistoperez.github.io/Liberet-app/",
    source_code_link: "https://github.com/chistoperez/Liberet-app",
  },
  {
    name: "URL Shortener",
    description:
      "Web application that allows users to shorten long URLs and share them with others. Applying session management, and user authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shortenurl,
    website_link: "https://react-cpp.firebaseapp.com/",
    source_code_link: "https://github.com/chistoperez/React-firebase",
  },
  {
    name: "Interactive Map",
    description:
      "This website uses an interactive map to display animals from the International Union for Conservation of Nature (IUCN) Red List.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: interactivemap,
    website_link: "https://chistoperez.github.io/InteractiveMap/",
    source_code_link: "https://github.com/chistoperez/InteractiveMap",
  },
  {
    name: "Pokemon API",
    description:
      "Web application that allows users to search for pokemon and see their information.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: pokemon,
    website_link: "https://chistoperez.github.io/pokedex/",
    source_code_link: "https://github.com/chistoperez/pokedex",
  },
];

export { services, technologies, experiences, testimonials, projects };
