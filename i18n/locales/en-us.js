export default {
  navbar: [
    {
      label: 'About',
      section: 'About',
    },
    {
      label: 'Experience',
      section: 'Experience',
    },
    {
      label: 'Projects',
      section: 'Projects',
    },
    {
      label: 'Contact',
      section: 'Contact',
    },
  ],
  landing: {
    intro: "Hello, I'm Filipe Lehmann, a",
    job: 'Software Engineer',
    more: 'Learn More',
  },
  about: {
    header: 'About Me',
    headline: 'I want to be a bridge between people and technology.',
    intro:
      'I am a software engineer with over 4 years of experience working mainly in forestry and real estate, passionate about developing scalable and responsive web applications with React, Next.js, and TypeScript. Based in Curitiba, Brazil, I enjoy partnering with curious, open-minded collaborators on worthwhile projects.',
    education: {
      text: 'I specialize in React, Next.js, TypeScript, and modern UI development, with a strong grasp of component-based architecture, UI/UX principles, state management (Zustand, Redux), and end-to-end testing (Cypress, Jest). I have helped projects become integrated into client routines and enabled savings of thousands of Brazilian reais monthly through scalable SaaS platforms, design systems, and data-driven UIs in Agile, cross-functional, and remote-first international environments.',
      highlights: [
        {
          text: 'React',
          style: 'strong',
          url: 'https://react.dev/',
        },
        {
          text: 'Next.js',
          style: 'strong',
          url: 'https://nextjs.org/',
        },
        {
          text: 'TypeScript',
          style: 'strong',
          url: 'https://www.typescriptlang.org/',
        },
        {
          text: 'Zustand',
          style: 'normal',
          url: 'https://zustand-demo.pmnd.rs/',
        },
        {
          text: 'Cypress',
          style: 'normal',
          url: 'https://www.cypress.io/',
        },
        {
          text: 'Jest',
          style: 'normal',
          url: 'https://jestjs.io/',
        },
      ],
    },
    skills: {
      text: 'Fluent in English and Portuguese, with conversational German. I am driven by the opportunity to build solutions that are both technically solid and genuinely useful, and I am interested in continuing to create and enhance solutions in new, relevant projects.',
      highlights: [
        {
          text: 'technically solid',
          style: 'normal',
        },
        {
          text: 'genuinely useful',
          style: 'normal',
        },
      ],
    },
    cta: 'Invite me to a project!',
  },
  jobs: [
    {
      workplace: 'Virtustant',
      workplaceBtn: 'Virtustant',
      position: 'Senior Software Engineer',
      duration: ['January 2026 - Present'],
      description: [
        "Built the platform's role-based access-management and hierarchical company-structure system (user roles, claims, peer-visibility rules, teams, and scoped account pickers), now governing 90+ users across 20+ B2B client organizations.",
        'Designed and built the original Alerts system (configurable alert definitions with an admin builder, the underlying data model and migrations, and a lifecycle-driven alert inbox), turning manual follow-up into automated, trackable workflows.',
        'Introduced PostgreSQL/Supabase RPCs for scoped-visibility queries and partial updates, reducing redundant requests and improving API response times on a platform serving 400,000+ API requests per week.',
        'Architected and built the company native iOS/Android app (Expo / React Native / TypeScript) from scratch as sole mobile engineer, delivering an offline-first experience for field technicians.',
        'Mirrored the full web feature set on mobile (calendar, inspection capture with signatures, alerts, push notifications, geofencing, PDF reporting) and built the shared backend seams it depends on.',
      ],
      url: 'https://www.virtustant.com/',
    },
    {
      workplace: 'Lehmann Dev',
      workplaceBtn: 'Lehmann Dev',
      position: 'Senior Software Engineer',
      duration: ['September 2025 - January 2026'],
      description: [
        'Built a modern, type-safe restaurant ordering platform end-to-end, from discovery to checkout and order tracking, with a reusable UI system, resilient auth, OpenAPI contracts, and containerized infra on a VPS.',
        'Delivered end-to-end UX with restaurants catalog, menu/item details, cart, checkout, and orders using Next.js App Router, plus polished empty/error states, pt-BR currency/date, and responsive dark-mode styling.',
        'Implemented auth and security with Google OAuth, token refresh, role-based access, CORS, and rate limiting.',
        'Built a reusable UI kit and back-office/admin areas with Radix UI, Tailwind v4, Zustand, React Hook Form, Zod, and DnD Kit.',
      ],
      url: 'https://filipelehmann.vercel.app/',
    },
    {
      workplace: 'Pixlog',
      workplaceBtn: 'Pixlog',
      position: 'Software Engineer',
      duration: ['June 2024 - June 2025'],
      description: [
        'Spearheaded frontend development for a scalable B2B SaaS platform that transformed a company from an operational tool provider to a complete management solution for clients in forestry and heavy industrial sectors.',
        'Integrated data from AR measurements by building a dynamic dashboard with Google Maps, Recharts, and TanStack Table, which helped clients quickly adopt the platform into their daily workflow.',
        'Accelerated feature delivery by architecting reusable components and robust state management with Zustand, applying Atomic Design and Clean Code principles.',
        'Refactored the platform PDF generation system, enabling cost savings of thousands of Brazilian Reais per month and increasing infrastructure reliability.',
        'Internationalized the platform in 3 languages and used Hotjar to analyze user behavior for data-driven UI/UX improvements.',
      ],
      url: 'https://pixlog.com.br/',
    },
    {
      workplace: 'Volunteers for Ukraine',
      workplaceBtn: 'VFU',
      position: 'Software Engineer',
      duration: ['March 2024 - July 2024'],
      description: [
        'Took part in the front-end development of a React web application for a crisis management project supporting the Ukraine humanitarian crisis.',
        'Worked on responsive UI/UX design and coding of layouts for Projects, Organizations, and Volunteers sections.',
        'Used Atomic Design to create reusable, easy-to-maintain project components.',
        "Applied Node.js to contribute to the project's back-end.",
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Freelance',
      workplaceBtn: 'Freelance',
      position: 'Freelance Software Engineer',
      duration: ['September 2023 - July 2024'],
      description: [
        "Improved my client's platform to better convey authority, convert sales, and manage customer information, improving productivity, experience, and profit.",
        'Designed and implemented layouts so the client could create and deliver their own courses within their platform.',
        "Assisted with the client's vision for platform evolution, creating roadmaps to present and implement desired changes in sensible steps.",
        'Provided insight and helped the customer cut relevant monthly costs by reviewing tool subscriptions.',
      ],
      url: 'https://filipelehmann.vercel.app/',
    },
    {
      workplace: 'Hype Empreendimentos',
      workplaceBtn: 'CapLink',
      position: 'Software Engineer',
      duration: ['April 2022 - October 2023'],
      description: [
        'Pioneered a SaaS platform for a financial technology spinoff (CapLink) by designing and deploying the first version of a platform that streamlined multi-million Brazilian Real real estate credit for large-scale construction projects using React and Next.js.',
        'Accelerated a complex credit approval pipeline by developing the frontend for a financial platform that digitized a previously slow and bureaucratic process, using D3.js to visually represent pipeline steps.',
        "Built the foundation for a scalable product by architecting the platform's user interface with modular, component-based design and TypeScript.",
        'Implemented GraphQL integration with backend services and contributed to CI/CD workflows with Cypress and Jest.',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani',
      position: 'Software Engineering Intern',
      duration: ['May 2021 - November 2021'],
      description: [
        'Contributed to the front-end development of a business web application using Vue.js, HTML, CSS, and JavaScript, improving UI consistency and responsiveness.',
        'Resolved low- to medium-priority bugs and feature requests, enhancing user experience and overall system stability.',
        'Created detailed user stories for features beyond the MVP, supporting backlog grooming and sprint planning.',
        'Designed mobile-first mockups and UI flows in collaboration with product and design teams.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Teaching Assistant',
      duration: ['March 2018 - December 2018'],
      description: [
        'Assisted students by solving exercises and clarifying doubts in Analytical Geometry and Linear Algebra.',
        'Prepared theoretical activities compatible with students level of knowledge and experience.',
        'Developed complementary teaching material under the supervision and approval of the teacher-advisor.',
      ],
      url: 'https://www.bambui.ifmg.edu.br/portal/',
    },
  ],
  projects: [
    {
      name: 'Now Row LP',
      description:
        'This project is a landing page for a client that offers a solution for brazilian shopping centers. It is a project that I developed professionally as the first deployment of my company, LD, that I founded with a partner.',
      pic: '/noRow.png',
      tech: ['React', 'Typescript', 'Next.js', 'Shadcn/UI'],
      links: [
        {
          label: 'Website',
          icon: 'link',
          url: 'https://norow.com.br/',
        },
      ],
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
      // subtitle: '(Under development!)',
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
      description: `This is a project for use in a Newspaper API with access, manipulation, and aggregation of data. The goal was to implement CRUD (CREATE, READ, UPDATE and DELETE) operations using a mock newspaper repository object.`,
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
  extraProjects: [
    {
      name: 'IP Adress Tracker',
      description:
        'Web app in which the user can obtain locations through IP addresses, with map display. When loading the page, the app returns the physical and IP address associated with the user.',
      pic: '/ip_tracker_done.jpg',
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
      type: 'Projeto',
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
      name: 'Projetos Front-end',
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
      type: 'Curso',
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
      name: 'Programação Competitiva',
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
  contact:
    "Whether it's a job opportunity, an invite to coffee, or feedback on my portfolio, my inbox is open!",
  footer: 'Scroll to the top!',
  extraProjectsBtn: {
    show: 'Show',
    more: 'more',
    less: 'less',
  },
  cv: {
    pageTitle: 'Filipe Lehmann - CV',
    title: 'Filipe Pereira',
    subtitle: 'Senior Frontend Engineer',
    tagline:
      'React & TypeScript specialist building scalable SaaS platforms with a strong UI/UX focus.',
    print: 'Print / Save PDF',
    download: 'Download PDF',
    portfolio: 'Portfolio',
    sections: {
      summary: 'Summary',
      experience: 'Experience',
      education: 'Education',
      skills: 'Top Skills',
      languages: 'Languages',
      contact: 'Contact',
    },
    summary:
      'Software engineer with over 4 years of experience working mainly in forestry and real estate, passionate about developing scalable and responsive web applications with React, Next.js, and TypeScript. Experienced in SaaS platforms, design systems, and data-driven UIs in Agile, cross-functional, and remote-first international environments.',
    education: [
      {
        school: 'IFMG - Campus Bambuí',
        degree: 'Bachelor of Engineering, Computer Engineering',
        period: '2017 - 2022',
      },
      {
        school: 'PUC Minas',
        degree: 'Bachelor of Engineering, Control and Automation Engineering',
        period: 'January 2013 - June 2016',
      },
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Cypress',
      'Jest',
    ],
    languages: [
      'English (Native or Bilingual)',
      'Portuguese (Native or Bilingual)',
      'German (Professional Working)',
    ],
    contact: {
      location: 'Curitiba, Paraná, Brazil',
      phone: '(33) 99159-0880',
      email: 'filipelehmannp@gmail.com',
      linkedin: 'linkedin.com/in/filipe-lehmann-pereira',
      portfolio: 'filipelehmann.vercel.app',
      github: 'github.com/lehmannse',
    },
  },
};
