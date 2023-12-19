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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    light,
    brown,
    dark,
  } from "../assets";
  
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
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "GCP Developer",
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
      name: "React JS",
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
      name: "Three JS",
      icon: threejs,
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

  const educations = [
    {
      title: "Bachelor's Of Computer Engineering",
      company_name: "University Of Mumbai",
      icon: light,
      iconBg: "#383E56",
      date: "July 2019 - May 2023",
      points: [
        "Dilkap Research Institue Of Engineering & Management Studies",
        "CGPA: 8.6",
        
      ],
    },
    {
      title: "HSC - XII",
      company_name: "Central Board Of Secondary Education",
      icon: brown,
      iconBg: "#E6DEDD",
      date: "June 2017 - May 2019",
      points: [
        "Cntral Railway School & Jr. College.",
        "CGPA: 7.0",
      ],
    },
    {
      title: "SSC - X",
      company_name: "Central Board Of Secondary Education",
      icon: dark,
      iconBg: "#383E56",
      date: "April 2016 - June 2017",
      points: [
        "All Saints High School.",
        "CGPA: 8.6",
      ],
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "JP. Morgan Chase & Co.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "February 2023 - March 2023",
      points: [
        "Interface with a stock price data feed.",
        "Use JPMorgan Chase & Co. frameworks and tools..",
        "Display data visually for traders.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern ",
      company_name: "LetsGrowMore",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2022 - Dec 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Created Multiple forms..",
        "Build a responsive e-commerce website..",
        "Worked on UI/UX Projects.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Internshala",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2022 - May 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Application Developer Intern",
      company_name: "The Sparks Foundation Pvt. Ltd.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2021 - November 2021",
      points: [
        "Created a dummy tracking application using real time data.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Experience in writing Unit/Integration tests.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "E-Learning Web App",
      description:
        "A web based platform is an integrated set of interactive online services that provide trainers, learners,  resources to support and enhance education management.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ani6107/PRANIVIN-EDTech/",
    },
    {
      name: "Disease Prediction Web",
      description:
        "A robust machine-learning model that can efficiently predict the disease of a human, based on the symptoms that he/she possesses.  ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Google Collab",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Ani6107?tab=repositories",
    },
    {
      name: "Twitter + Blockchain",
      description:
        "This react project contains Smart Contract on ETH blockchain and then build a Twitter clone web app that allows us to tweet and view all the tweets",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "hardhat",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Ani6107/twitter-clone",
    },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects };