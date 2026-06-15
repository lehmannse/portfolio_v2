import { PortfolioContent } from './types';

const en: PortfolioContent = {
  navbar: [
    { label: 'About', section: 'about' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' },
  ],
  landing: {
    intro: "Hello, I'm",
    name: 'Filipe Lehmann',
    job: 'Software Engineer',
    more: 'Learn More',
  },
  about: {
    header: 'About Me',
    headline: 'I want to be a bridge between people and technology.',
    intro:
      "I'm a software engineer with 3+ years of experience, a lifelong learner, and a language enthusiast currently based in Curitiba, Brazil. I'm looking to partner with people and organizations to carry out worthwhile projects, create good relationships and fight entropy.",
    education: {
      text: 'Specializing in React, Next.js, TypeScript, and modern UI development, I’ve contributed to full product lifecycles - from building B2B SaaS platforms from scratch to internationalizing their interfaces and improving system reliability through Atomic Design, Clean Architecture and automated testing with Selenium and Cypress.',
      highlights: [
        { text: 'React', style: 'strong', url: 'https://react.dev/' },
        { text: 'Next.js', style: 'strong', url: 'https://nextjs.org/' },
        {
          text: 'TypeScript',
          style: 'strong',
          url: 'https://www.typescriptlang.org/',
        },
        {
          text: 'Atomic Design',
          style: 'normal',
          url: 'https://atomicdesign.bradfrost.com/chapter-2/',
        },
        {
          text: 'Clean Architecture',
          style: 'normal',
          url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
        },
        { text: 'Selenium', style: 'normal', url: 'https://www.selenium.dev/' },
        { text: 'Cypress', style: 'normal', url: 'https://www.cypress.io/' },
      ],
    },
    skills: {
      text: 'I’m driven by the opportunity to build things that are both technically solid and genuinely useful - solutions that people rely on and enjoy using. I’m at my best when I’m deeply focused on creation with peers that are also engaged in the mission of refining our craft and ourselves.',
      highlights: [
        { text: 'technically solid', style: 'normal' },
        { text: 'genuinely useful', style: 'normal' },
      ],
    },
    cta: 'Invite me to a project!',
  },
  experienceHeader: 'Experience',
  jobs: [
    {
      workplace: 'Pixlog',
      workplaceBtn: 'Pixlog',
      position: 'Software Engineer',
      duration: ['June 2024 - June 2025'],
      description: [
        'Spearheaded frontend development for a B2B SaaS web platform integrating data from AR measurements, using React, Next.js, TypeScript, and Tailwind, which resulted in clients quickly integrating the platform to their daily office routine and workflow.',
        'Built an elegant dashboard with Google Maps, dynamic lists with TanStack Table, state management structures with Zustand and several reusable components, facilitating rapid prototyping of new features and maintenance with automated testing.',
        "Refactored the platform's PDF generation system, enabling cost savings of thousands of reais per month and increasing the reliability of the company's infrastructure.",
      ],
      url: 'https://pixlog.com.br/',
    },
    {
      workplace: 'Volunteers for Ukraine',
      workplaceBtn: 'VFU',
      position: 'Software Engineer',
      duration: ['March 2024 - July 2024'],
      description: [
        'Took part on the front-end development of a React web application for a project on crisis management to support Ukraine humanitarian crisis.',
        'Worked on the UI/UX responsive design and coding of layouts for Projects, Organizations and Volunteers sections.',
        "Learned Node.js to contribute to the project's back-end.",
        'Used Atomic design pattern to create project components and reusable, easy to maintain, code.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Freelance',
      workplaceBtn: 'Freelance',
      position: 'Software Engineer',
      duration: ['September 2023 - July 2024'],
      description: [
        'Improved my client’s platform to better convey authority, convert sales, and manage customer information, improving their productivity, experience and profit.',
        'Designed and implemented layouts so the client could create and deliver their own courses within their platform.',
        'Assisted with the client’s vision for the evolution of their platform, creating roadmaps to present and implement desired changes in sensible steps.',
        'Provided insight and helped the customer cut relevant costs monthly by reviewing their tool subscriptions.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Spin-off from Hype Empreendimentos',
      workplaceBtn: 'CapLink',
      position: 'Front-end Software Engineer',
      duration: ['April 2022 - October 2023'],
      description: [
        'Lead the development of a SaaS platform for a financial technology spinoff (CapLink) by designing and deploying the first version of a platform that streamlined multi-million Brazilian Real real estate credit for large-scale construction projects using React and Next.js.',
        'Accelerated a complex credit approval pipeline by developing the frontend for a financial platform that digitized a previously slow and bureaucratic process, achieved by using D3.js to visually represent the pipeline steps, which significantly improved the user experience and contributed to faster client adoption.',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani Sistemas',
      position: 'Software Engineering Intern',
      duration: ['May 2021 - November 2021'],
      description: [
        'Training in Vue.js, HTML, CSS and JavaScript.',
        'Contributions to an ERP project for managing commercial representation offices.',
        'Resolution of low and medium priority issues - Jira.',
        'Software version control using GitLab.',
        'Used libs: Chakra UI, Vuex, Vuelidate and Axios.',
        'Attending to daily meetings - Daily Scrum.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Teaching Assistant',
      duration: ['March 2018 - December 2018'],
      description: [
        'Subject: Analytical Geometry and Linear Algebra.',
        'Assistance to students in solving problems and clarifying doubts.',
        'Preparation of theoretical activities compatible with students´ level of knowledge and experience.',
        'Preparation of complementary teaching material, under the supervision and approval of the teacher-advisor.',
      ],
      url: 'https://www.bambui.ifmg.edu.br/portal/',
    },
  ],
  projectsHeader: 'Featured Projects',
  projects: [
    {
      name: 'Now Row LP',
      description:
        'This project is a landing page for a client that offers a solution for brazilian shopping centers. It is a project that I developed professionally as the first deployment of my company, LD, that I founded with a partner.',
      pic: '/noRow.png',
      tech: ['React', 'Typescript', 'Next.js', 'Shadcn/UI'],
      links: [{ label: 'Website', icon: 'link', url: 'https://norow.com.br/' }],
    },
    {
      name: 'Lingo',
      description:
        'Lingo is a project of a language learning SaaS, similar to Duolingo. Users will be able to choose a language course, and have guided lessons with beautiful design, characters, audio & visual effects.',
      subtitle: '(Under development)',
      pic: '/lingo.png',
      picDark: '/lingo-dark.png',
      tech: ['React', 'Typescript', 'Next.js', 'Shadcn/UI'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://duolingo-clone-lehmannpi.vercel.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/duolingo_clone',
        },
      ],
    },
    {
      name: 'Code Challenges',
      description:
        'Web applications made as a front-end web challenges for companies across the globe. Contains a fullstack Mini Notes App with Effect on back-end, a React + TypeScript SPA for viewing top 50 Chess Rankings on Lichess, and a simple web app to showcase products of a fictional company.',
      pic: '/challenges-light.png',
      picDark: '/challenges-dark.png',
      tech: ['React.js', 'Fullstack', 'Front-end', 'Effect'],
      subProjects: [
        {
          projectName: 'Mini Notes App.',
          links: [
            {
              label: 'Website',
              icon: 'link',
              url: 'https://mini-notes-challenge-web-app.onrender.com/',
            },
            {
              label: 'Github',
              icon: 'github',
              url: 'https://github.com/lehmannse/mini-notes-challenge',
            },
          ],
        },
        {
          projectName: 'Lichess Rating Explorer.',
          links: [
            {
              label: 'Website',
              icon: 'link',
              url: 'https://commure-tech-challenge-by-filipe.vercel.app/',
            },
            {
              label: 'Github',
              icon: 'github',
              url: 'https://github.com/lehmannse/commure-tech-challenge',
            },
          ],
        },
        {
          projectName: 'Desafio ACME Inc.',
          links: [
            {
              label: 'Website',
              icon: 'link',
              url: 'https://desafio-acme-hype.filipelehmannp.workers.dev/',
            },
            {
              label: 'Github',
              icon: 'github',
              url: 'https://github.com/lehmannse/desafio-acme-inc',
            },
          ],
        },
      ],
    },
    {
      name: 'Expert Speech Recognition',
      description:
        'Expert Speech Recognition is an application for creating notes with text and transcribed audio. The project was developed during NLW Expert (ReactJS track), an event presented by Rocketseat. The speech recognition API is set for Portuguese audios and only works in some browsers.',
      pic: '/expert_speech.png',
      tech: ['React', 'Typescript', 'Speech-to-Text'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://speech-recognition.filipelehmannp.workers.dev/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/nlw-expert-speechrecognition',
        },
      ],
    },
    {
      name: 'Mock Newspaper API',
      subtitle: '- Read more at the Github repository -',
      description:
        'This is a project for use in a Newspaper API with access, manipulation, and aggregation of data. The goal was to implement CRUD (CREATE, READ, UPDATE and DELETE) operations using a mock newspaper repository object.',
      pic: '/mongodb.png',
      tech: ['MongoDB', 'Node.js'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/pluralsight_mongodb_nodejs',
        },
      ],
    },
    {
      name: 'Mock Car Rental',
      description:
        'Car rental management application, allowing registration of vehicles, customers, rentals and payments. Queries with multiple conditionals and generation of 3 types of reports.',
      pic: '/pascal.png',
      tech: ['Pascal', 'SQLite3', 'PostgreSQL'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/mock-car-rental-project',
        },
      ],
    },
  ],
  moreProjectsHeader: 'More Projects',
  extraProjects: [
    {
      name: 'IP Address Tracker',
      description:
        'Web app in which the user can obtain locations through IP addresses, with map display. When loading the page, the app returns the physical and IP address associated with the user.',
      pic: '/ip_tracker_done.jpg',
      type: 'Personal',
      tech: ['Vue.js', 'Leaflet', 'AbstractAPI'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://ipadresstracker-project.netlify.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/ip-adress-tracker/tree/develop',
        },
      ],
    },
    {
      name: 'Playlister',
      type: 'Project',
      description:
        'Playlister is a playlist creator that makes entries available and shared among users. It has authentication, authorization, database and hosting via Firebase. The project is a proof of concept and does not allow storage of audio formats.',
      tech: ['Vue.js', 'Firebase', 'Node.js'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://playlist-vue-project-a4e60.web.app/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/playlist-creator-vue',
        },
      ],
    },
    {
      name: 'Front-end Projects',
      type: 'Work',
      description:
        'Projects for learning the fundamentals of HTML, CSS and JavaScript. Latest project, called Infusion, hosted via Netlify.',
      tech: ['HTML', 'CSS', 'JS'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://projeto-infusion-curso-filipe.netlify.app/#',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/projetos-treinamento-front',
        },
      ],
    },
    {
      name: 'Machine Learning Practices',
      type: 'Course',
      description:
        'Records and ongoing Machine Learning implementations carried out by IBM.',
      tech: ['Python', 'Jupyter Notebook', 'Scikit-learn'],
      links: [
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/ml-practices',
        },
      ],
    },
    {
      name: 'Competitive Programming',
      type: 'Personal',
      description:
        '88 competitive programming exercises solved in Python on the Beecrowd platform, formerly URI Online Judge.',
      tech: ['Python'],
      links: [
        {
          label: 'Beecrowd',
          icon: 'link',
          url: 'https://www.beecrowd.com.br/',
        },
        {
          label: 'Github',
          icon: 'github',
          url: 'https://github.com/lehmannse/URIOnlineJudge',
        },
      ],
    },
  ],
  contactHeader: 'Contact Me',
  contact:
    "Whether it's a job opportunity, an invite to coffee, or feedback on my portfolio, my inbox is open!",
  footer: 'Scroll to the top!',
  extraProjectsBtn: { show: 'Show', more: 'more', less: 'less' },
  moreProjectsTable: {
    name: 'Name',
    type: 'Type',
    description: 'Description',
    technologies: 'Technologies',
    links: 'Links',
  },
  cvLabel: 'CV',
};

export default en;
