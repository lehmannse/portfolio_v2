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
    {
      label: 'CV',
      href: '/cv',
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
      'Sou engenheiro de software com mais de 4 anos de experiência atuando principalmente nos setores florestal e imobiliário, apaixonado por desenvolver aplicações web escaláveis e responsivas com React, Next.js e TypeScript. Moro em Curitiba, Paraná, e gosto de trabalhar com colaboradores curiosos e de mente aberta em projetos relevantes.',
    education: {
      text: 'Especializado em React, Next.js, TypeScript e desenvolvimento de UI moderno, com forte domínio de arquitetura baseada em componentes, princípios de UI/UX, gerenciamento de estado (Zustand, Redux) e testes end-to-end (Cypress, Jest). Ajudei projetos a se integrarem à rotina dos clientes e a gerar economias de milhares de reais por mês por meio de plataformas SaaS escaláveis, design systems e UIs orientadas a dados em ambientes ágeis, multifuncionais e remotos.',
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
      text: 'Fluente em inglês e português, com alemão em nível profissional. Sou motivado pela oportunidade de construir soluções tecnicamente sólidas e genuinamente úteis, e tenho interesse em continuar criando e aprimorando soluções em novos projetos relevantes.',
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
      workplace: 'Virtustant',
      workplaceBtn: 'Virtustant',
      position: 'Engenheiro de Software Sênior',
      duration: ['Janeiro 2026 - Presente'],
      description: [
        'Construiu o sistema de controle de acesso baseado em papéis e estrutura hierárquica de empresas (papéis de usuário, claims, regras de visibilidade entre pares, equipes e seletores de contas com escopo), hoje governando mais de 90 usuários em mais de 20 organizações B2B.',
        'Projetou e construiu o sistema original de Alertas (definições configuráveis com builder administrativo, modelo de dados, migrações e caixa de entrada orientada por ciclo de vida), transformando acompanhamento manual em fluxos automatizados e rastreáveis.',
        'Introduziu RPCs PostgreSQL/Supabase para consultas com visibilidade escopada e atualizações parciais, reduzindo requisições redundantes e melhorando tempos de resposta em uma plataforma com mais de 400.000 requisições API por semana.',
        'Arquitetou e construiu o app nativo iOS/Android da empresa (Expo / React Native / TypeScript) do zero como único engenheiro mobile, entregando experiência offline-first para técnicos de campo.',
        'Espelhou o conjunto completo de funcionalidades web no mobile (calendário, inspeções com assinaturas, alertas, push, geofencing, relatórios PDF) e construiu as integrações de backend compartilhadas.',
      ],
      url: 'https://www.virtustant.com/',
    },
    {
      workplace: 'Lehmann Dev',
      workplaceBtn: 'Lehmann Dev',
      position: 'Engenheiro de Software Sênior',
      duration: ['Setembro 2025 - Janeiro 2026'],
      description: [
        'Construiu uma plataforma moderna e type-safe de pedidos para restaurantes de ponta a ponta, da descoberta ao checkout e acompanhamento, com sistema de UI reutilizável, auth resiliente, contratos OpenAPI e infra containerizada em VPS.',
        'Entregou UX completa com catálogo de restaurantes, detalhes de itens, carrinho, checkout e pedidos com Next.js App Router, estados vazios/erro robustos, moeda/data pt-BR e dark mode responsivo.',
        'Implementou autenticação e segurança com Google OAuth, refresh de token, acesso baseado em papéis, CORS e rate limiting.',
        'Construiu kit de UI reutilizável e áreas de back-office/admin com Radix UI, Tailwind v4, Zustand, React Hook Form, Zod e DnD Kit.',
      ],
      url: 'https://filipelehmann.vercel.app/',
    },
    {
      workplace: 'Pixlog',
      workplaceBtn: 'Pixlog',
      position: 'Engenheiro de Software',
      duration: ['Junho 2024 - Junho 2025'],
      description: [
        'Liderou o desenvolvimento frontend de uma plataforma B2B SaaS escalável que transformou a empresa de fornecedora de ferramentas operacionais em solução completa de gestão para clientes dos setores florestal e industrial pesado.',
        'Integrou dados de medições em RA com dashboard dinâmico usando Google Maps, Recharts e TanStack Table, acelerando a adoção da plataforma na rotina diária dos clientes.',
        'Acelerou a entrega de funcionalidades com componentes reutilizáveis e gerenciamento de estado com Zustand, aplicando Atomic Design e Clean Code.',
        'Refatorou o sistema de geração de PDF, gerando economia de milhares de reais por mês e aumentando a confiabilidade da infraestrutura.',
        'Internacionalizou a plataforma em 3 idiomas e usou Hotjar para decisões de UI/UX baseadas em dados.',
      ],
      url: 'https://pixlog.com.br/',
    },
    {
      workplace: 'Volunteers for Ukraine',
      workplaceBtn: 'VFU',
      position: 'Engenheiro de Software',
      duration: ['Março 2024 - Julho 2024'],
      description: [
        'Participou do desenvolvimento front-end de uma aplicação React para gestão de crises no apoio humanitário à Ucrânia.',
        'Trabalhou no design responsivo de UI/UX e codificação de layouts para as seções de Projetos, Organizações e Voluntários.',
        'Utilizou Atomic Design para criar componentes reutilizáveis e de fácil manutenção.',
        'Aplicou Node.js para contribuir com o back-end do projeto.',
      ],
      url: 'https://volunteersforukraine.org/',
    },
    {
      workplace: 'Freelance',
      workplaceBtn: 'Freelance',
      position: 'Engenheiro de Software Freelancer',
      duration: ['Setembro 2023 - Julho 2024'],
      description: [
        'Melhorou a plataforma do cliente para transmitir mais autoridade, converter vendas e gerenciar informações de clientes, aumentando produtividade, experiência e lucro.',
        'Projetou e implementou layouts para que o cliente pudesse criar e entregar cursos dentro da própria plataforma.',
        'Auxiliou na visão de evolução da plataforma, criando roadmaps para implementar mudanças desejadas em etapas sensatas.',
        'Ajudou o cliente a reduzir custos mensais relevantes revisando assinaturas de ferramentas.',
      ],
      url: 'https://filipelehmann.vercel.app/',
    },
    {
      workplace: 'Hype Empreendimentos',
      workplaceBtn: 'CapLink',
      position: 'Engenheiro de Software',
      duration: ['Abril 2022 - Outubro 2023'],
      description: [
        'Pioneirou uma plataforma SaaS para spinoff de tecnologia financeira (CapLink), projetando e implantando a primeira versão que simplificou crédito imobiliário multimilionário para grandes projetos de construção com React e Next.js.',
        'Acelerou um pipeline complexo de aprovação de crédito digitalizando um processo antes lento e burocrático, usando D3.js para representar visualmente as etapas.',
        'Construiu a base de um produto escalável com arquitetura modular baseada em componentes e TypeScript.',
        'Implementou integração GraphQL com serviços de backend e contribuiu com CI/CD usando Cypress e Jest.',
      ],
      url: 'https://hypeempreendimentos.com.br/',
    },
    {
      workplace: 'Guarani Sistemas',
      workplaceBtn: 'Guarani',
      position: 'Estagiário em Engenharia de Software',
      duration: ['Maio 2021 - Novembro 2021'],
      description: [
        'Contribuiu para o desenvolvimento front-end de aplicação web empresarial com Vue.js, HTML, CSS e JavaScript, melhorando consistência e responsividade da UI.',
        'Resolveu bugs e solicitações de baixa a média prioridade, melhorando experiência do usuário e estabilidade do sistema.',
        'Criou histórias de usuário detalhadas para funcionalidades além do MVP, apoiando refinamento de backlog e planejamento de sprints.',
        'Projetou mockups mobile-first e fluxos de UI em colaboração com times de produto e design.',
      ],
      url: 'https://www.guaranisistemas.com.br/',
    },
    {
      workplace: 'IFMG - Campus Bambuí',
      workplaceBtn: 'IFMG',
      position: 'Monitor',
      duration: ['Março 2018 - Dezembro 2018'],
      description: [
        'Auxiliou estudantes na resolução de exercícios e esclarecimento de dúvidas em Geometria Analítica e Álgebra Linear.',
        'Preparou atividades teóricas compatíveis com o nível de conhecimento e experiência dos alunos.',
        'Desenvolveu material didático complementar sob supervisão e aprovação do professor-orientador.',
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
  cv: {
    pageTitle: 'Filipe Lehmann - Currículo',
    title: 'Filipe Pereira',
    subtitle: 'Engenheiro Frontend Sênior',
    tagline:
      'Especialista em React e TypeScript construindo plataformas SaaS escaláveis com forte foco em UI/UX.',
    print: 'Imprimir / Salvar PDF',
    download: 'Baixar PDF',
    portfolio: 'Portfólio',
    sections: {
      summary: 'Resumo',
      experience: 'Experiência',
      education: 'Formação',
      skills: 'Principais Habilidades',
      languages: 'Idiomas',
      contact: 'Contato',
    },
    summary:
      'Engenheiro de software com mais de 4 anos de experiência atuando principalmente nos setores florestal e imobiliário, apaixonado por desenvolver aplicações web escaláveis e responsivas com React, Next.js e TypeScript. Experiência em plataformas SaaS, design systems e UIs orientadas a dados em ambientes ágeis, multifuncionais e remotos.',
    education: [
      {
        school: 'IFMG - Campus Bambuí',
        degree: 'Bacharelado em Engenharia, Engenharia da Computação',
        period: '2017 - 2022',
      },
      {
        school: 'PUC Minas',
        degree: 'Bacharelado em Engenharia, Engenharia de Controle e Automação',
        period: 'Janeiro 2013 - Junho 2016',
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
      'Inglês (Nativo ou Bilíngue)',
      'Português (Nativo ou Bilíngue)',
      'Alemão (Profissional)',
    ],
    contact: {
      location: 'Curitiba, Paraná, Brasil',
      phone: '(33) 99159-0880',
      email: 'filipelehmannp@gmail.com',
      linkedin: 'linkedin.com/in/filipe-lehmann-pereira',
      portfolio: 'filipelehmann.vercel.app',
      github: 'github.com/lehmannse',
    },
  },
};
