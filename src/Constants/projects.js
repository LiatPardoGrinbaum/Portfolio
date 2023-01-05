import wecome from "../assets/projects/wecome.png";
import tipper from "../assets/projects/tipper.png";
import spotShare from "../assets/projects/spot-share.png";
import portfolio from "../assets/projects/portfolio.png";
import landing from "../assets/projects/landing.png";
import dicegame from "../assets/projects/dicegame.png";
// import bucketlist from "../assets/projects/bucketlist.png";
import amazon from "../assets/projects/amazon.png";
export const projects = [
  {
    id: 1,
    name: "Wecome Events",
    description: `\nThis project was developed as part of my internship at outboxLtd.\nIt's an events management web application, both client and server side, for managing events and invites.`,
    technologies: "\nReactJs (react-table, react-paginate), CSS (SASS), Node.js, Express, MySQL.",
    image: wecome,
    github: "",
    demo: "https://wecome-events.herokuapp.com",
    video: "https://streamable.com/ttj39y",
  },
  {
    id: 2,
    name: "Tipper",
    description:
      "\nEntertainment site for sharing tips in 6 different categories. Each user can sign up and write hisher tips, see other users' tips and rate them.",
    technologies: "\nReactJs, CSS (SASS), Node.js, MongoDB, Express, Mongoose, Amazon S3 storgae services, JWT. ",
    image: tipper,
    github: "https://github.com/LiatPardoGrinbaum/Tipper",
    demo: "https://final-project-liat.herokuapp.com/",
    video: "",
  },
  {
    id: 3,
    name: "Spot and Share",
    description:
      "A website using google map platform for people from my city for sharing information about public placed with free plants\fruit trees, so everyone can find and enjoy the free nature treats.",
    technologies: "\nReactJS, Google map API, Google Login, mocked API's.",
    image: spotShare,
    github: "https://github.com/LiatPardoGrinbaum/Spot-Share",
    demo: "https://spot-and-share-liat.netlify.app/",
    video: "",
  },
  {
    id: 4,
    name: "Portfolio",
    description:
      "\nA personal website design with love. Here you can learn more about me and my professinal experience. I tried to give it my personal touch and used my favorite color - purple.",
    technologies: "\nReactJS (react-reveal, react-scroll, emailJS), CSS (SASS).",
    image: portfolio,
    github: "https://github.com/LiatPardoGrinbaum/Portfolio",
    demo: "https://liat-portfolio.netlify.app/",
    video: "",
  },
  {
    id: 5,
    name: "Landing Page Generator",
    description:
      "\nIn this project you can sign up and login to create your own landing pages. There are 3 different categories: Events, Products and Job offer.",
    technologies: "\nReactJS, CSS (SASS), NodeJS, Strapi (headless CMS), Amazon s3 storage services.",
    image: landing,
    github: "https://github.com/LiatPardoGrinbaum/landing-pages-generator-front",
    demo: "https://landing-page-generator.netlify.app/",
    video: "",
  },

  {
    id: 6,
    name: "Dice Game",
    description: "\nA fun small interactive game for 2 players.",
    technologies: "\nReactJs, CSS, HTML, JavaScript.",
    image: dicegame,

    github: "https://github.com/LiatPardoGrinbaum/Dice-Game-refactor",
    demo: "https://dice-game-liat.netlify.app/",
    video: "",
  },
  // {
  //   id: 7,
  //   name: "Bucketlist",
  //   description:
  //     "\nWe built this website during the bootcamp's Hackathon. The website displays various attractions and famous sites around the world and enables users to learn about these places. My part in this project was in the client side - quiz + attractions pages - both design and functionality.\nPlease wait for loading (It takes a little bit of time).",
  //   technologies: "\nReactJs, MonggoDB, Mongoose, Express, Puppeteer, Microsoft translator Text Api.",
  //   image: bucketlist,
  //   github: "https://github.com/bnGil/appleseeds-hackathon",
  //   demo: "https://tripexplorer.herokuapp.com/",
  //   video: "",
  // },
  {
    id: 8,
    name: "Amazon product's page",
    description:
      "\nA copy of an amazon product page. My first project that was taken as part of my participance in Appleseeds bootcamp. Pure html + css, I liked the result and was so proud of myself at the time :)",
    technologies: "\nHTML, CSS.",
    image: amazon,
    github: "https://github.com/LiatPardoGrinbaum/Amazon-website",
    demo: "https://nimble-kitten-589708.netlify.app/",
    video: "",
  },
];
