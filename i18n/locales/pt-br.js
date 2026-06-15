export default {
  navbar: [
    {
      label: 'Sobre',
      section: 'About',
    },
    {
      label: 'Experiência',
      section: 'Experience',
    },
    {
      label: 'Projetos',
      section: 'Projects',
    },
    {
      label: 'Contato',
      section: 'Contact',
    },
  ],
  landing: {
    intro: 'Olá, eu sou Filipe Lehmann, um',
    job: 'Engenheiro de Software',
    more: 'Saiba Mais',
  },
  about: {
    header: 'Sobre Mim',
    headline: 'Quero ser uma ponte entre as pessoas e a tecnologia.',
    intro:
      'Sou um engenheiro de software com mais de 3 anos de experiência, um eterno aprendiz e entusiasta de idiomas vivendo em Curitiba, Paraná, Brasil. Busco me associar a pessoas e organizações para realizar projetos relevantes, criar bons relacionamentos e combater a entropia.',
    education: {
      text: 'Especializado em React, Next.js, TypeScript e desenvolvimento de UI moderno, contribuí para ciclos completos de produto - desde a construção de plataformas B2B SaaS do zero até a internacionalização de suas interfaces e melhoria da confiabilidade do sistema através de Atomic Design, Clean Architecture e testes automatizados com Selenium e Cypress.',
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
          text: 'Atomic Design',
          style: 'normal',
          url: 'https://atomicdesign.bradfrost.com/chapter-2/',
        },
        {
          text: 'Clean Architecture',
          style: 'normal',
          url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
        },
        {
          text: 'Selenium',
          style: 'normal',
          url: 'https://www.selenium.dev/',
        },
        {
          text: 'Cypress',
          style: 'normal',
          url: 'https://www.cypress.io/',
        },
      ],
    },
    skills: {
      text: 'Sou motivado pela oportunidade de construir coisas que são tanto tecnicamente sólidas quanto genuinamente úteis - soluções nas quais as pessoas confiam e gostam de usar. Sou melhor quando estou imerso na resolução de problemas ou criação de código com colegas que também estão engajados na missão de refinar nosso ofício e a nós mesmos.',
      highlights: [
        {
          text: 'tecnicamente sólidas',
          style: 'normal',
        },
        {
          text: 'genuinamente úteis',
          style: 'normal',
        },
      ],
    },
    cta: 'Me convide para um projeto!',
  },
  jobs: [
    {
      workplace: 'Pixlog',
      workplaceBtn: 'Pixlog',
      position: 'Engenheiro de Software',
      duration: ['Junho 2024 - Junho 2025'],
      description: [
        'Liderou o desenvolvimento frontend de uma plataforma web B2B SaaS integrando dados de medições em RA, usando React, Next.js, TypeScript e Tailwind, o que resultou na rápida integração da plataforma à rotina diária de escritório dos clientes.',
        'Construiu um dashboard elegante com Google Maps, listas dinâmicas com TanStack Table, estruturas de gerenciamento de estado com Zustand e diversos componentes reutilizáveis, facilitando a prototipagem rápida de novos recursos e manutenção com testes automatizados.',
        'Refatorou o sistema de geração de PDF da plataforma, possibilitando economia de milhares de reais por mês e aumentando a confiabilidade da infraestrutura da empresa.',
      ],
      url: 'https://pixlog.com.br/',
    },
    {
      workplace: 'Volunteers for Ukraine',
      workplaceBtn: 'VFU',
      position: 'Engenheiro de Software',
      duration: ['Março 2024 - Julho 2024'],
      description: [
        'Participou do desenvolvimento front-end de uma aplicação web React para um projeto de gestão de crises para apoiar a crise humanitária na Ucrânia.',
        'Trabalhou no design responsivo de UI/UX e codificação de layouts para as seções de Projetos, Organizações e Voluntários.',
        'Aprendeu Node.js para contribuir com o back-end do projeto.',
        'Utilizou o padrão Atomic design para criar componentes do projeto e código reutilizável e de fácil manutenção.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Freelance',
      workplaceBtn: 'Freelance',
      position: 'Engenheiro de Software',
      duration: ['Setembro 2024 - Julho 2024'],
      description: [
        'Melhorou a plataforma do cliente para transmitir melhor autoridade, converter vendas e gerenciar informações dos clientes, melhorando sua produtividade, experiência e lucro.',
        'Projetou e implementou layouts para que o cliente pudesse criar e entregar seus próprios cursos dentro de sua plataforma.',
        'Auxiliou na visão do cliente para a evolução de sua plataforma, criando roadmaps para apresentar e implementar as mudanças desejadas em etapas sensatas.',
        'Forneceu insights e ajudou o cliente a reduzir custos mensais relevantes através da revisão de suas assinaturas de ferramentas.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Spin-off da Hype Empreendimentos',
      workplaceBtn: 'CapLink',
      position: 'Engenheiro de Software Front-end',
      duration: ['April 2022 - October 2023'],
      description: [
        'Liderei o desenvolvimento de uma plataforma SaaS para uma spinoff de tecnologia financeira (CapLink) projetando e implementando a primeira versão de uma plataforma que simplificou o crédito imobiliário multimilionário em reais brasileiros para projetos de construção de grande escala usando React e Next.js.',
        'Acelerou um complexo processo de aprovação de crédito desenvolvendo o frontend para uma plataforma financeira que digitalizou um processo antes lento e burocrático, alcançado através do uso do D3.js para representar visualmente as etapas do processo, o que melhorou significativamente a experiência do usuário e contribuiu para uma adoção mais rápida por parte do cliente',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani Sistemas',
      position: 'Estagiário em Engenharia de Software',
      duration: ['Maio 2021 - Novembro 2021'],
      description: [
        'Treinamento em Vue.js, HTML, CSS e JavaScript.',
        'Contribuições em projeto de ERP para gestão de escritórios de representação comercial.',
        'Resolução de issues de baixa e média prioridade - Jira.',
        'Controle de versão de software usando GitLab.',
        'Bibliotecas utilizadas: Chakra UI, Vuex, Vuelidate e Axios.',
        'Participação em reuniões diárias - Daily Scrum.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Monitor',
      duration: ['Março 2018 - Dezembro 2018'],
      description: [
        'Disciplina: Geometria Analítica e Álgebra Linear.',
        'Assistência aos estudantes na resolução de exercícios e esclarecimento de dúvidas.',
        'Preparação de atividades teóricas compatíveis com o nível de conhecimento e experiência dos alunos.',
        'Elaboração de material didático complementar, sob supervisão e aprovação do professor-orientador.',
      ],
      url: 'https://www.bambui.ifmg.edu.br/portal/',
    },
  ],
  projects: [
    {
      name: 'Now Row LP',
      description:
        'Este projeto é uma landing page para um cliente que oferece uma solução para shopping centers. É um projeto que desenvolvi profissionalmente como o primeiro deployment da minha empresa, LD, que iniciei com um parceiro.',
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
        'Lingo é um projeto de SaaS para aprendizado de idiomas, semelhante ao Duolingo. Os usuários poderão escolher um curso de idioma e ter aulas guiadas com design bonito, personagens e efeitos sonoros e visuais.',
      subtitle: '(Em desenvolvimento)',
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
        'Aplicações web feitas como desafios de front-end para empresas ao redor do mundo. Contém um Mini Notes App fullstack com Effect no back-end, uma SPA em React + TypeScript para visualizar o Top 50 do ranking de xadrez no Lichess, e um app simples para exibir produtos de uma empresa fictícia.',
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
        'Expert Speech Recognition é um aplicativo para criação de notas com texto e áudio transcrito. O projeto foi desenvolvido durante o NLW Expert (trilha ReactJS), evento apresentado pela Rocketseat. A API de reconhecimento de fala está configurada para áudios em português e só funciona em alguns navegadores.',
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
      subtitle: '- Leia mais no repositório do Github -',
      description:
        'Este é um projeto para utilização em uma API de Jornal com acesso, manipulação e agregação de dados. O objetivo era implementar operações CRUD (CREATE, READ, UPDATE e DELETE) usando um objeto de repositório de jornal simulado.',
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
        'Aplicativo de gerenciamento de aluguel de carros, permitindo registro de veículos, clientes, aluguéis e pagamentos. Consultas com multiplas condicionais e geração de 3 tipos de relatório.',
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
      name: 'Playlister',
      type: 'Projeto',
      description:
        'Playlister é um criador de playlists, que disponibiliza e compartilha as entradas entre os usuários. Possui autenticação, autorização, banco de dados e hospedagem via Firebase. O projeto é uma prova de conceito e não permite armazenamento de formatos em áudio.',
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
      name: 'IP Adress Tracker',
      description:
        'Web app no qual o usuário pode obter localizações por meio de endereços de IP, com exibição em mapa. Ao carregar a página, o app retorna o endereço físico e de IP associado ao próprio usuário.',
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
      name: 'Projetos Front-end',
      type: 'Work',
      description:
        'Projetos para aprendizagem e desenvolvimento dos fundamentos de HTML, CSS e JavaScript. Último projeto, chamado Infusion, hospedado via Netlify.',
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
      name: 'Práticas de Machine Learning',
      type: 'Curso',
      description:
        'Registros e implementações de Machine Learning feitas em curso pela IBM.',
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
        '88 exercícios de programação competitiva solucionados em Python na plataforma Beecrowd, antiga URI Online Judge',
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
    'Seja uma oportunidade de trabalho, sugestões ou feedback, seu contato será bem vindo!',
  footer: 'Voltar ao topo!',
  extraProjectsBtn: {
    show: 'Mostrar',
    more: 'mais',
    less: 'menos',
  },
};
