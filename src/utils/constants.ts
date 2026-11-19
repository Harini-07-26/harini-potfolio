export const PERSONAL_DETAILS = {
  name: 'Harini Thangavel',
  shortName: 'Harini',
  role: 'Full Stack Developer',
  age: 29,
  location: 'Chennai, India',
  email: 'harithangavel26@gmail.com',
  phone: '+91 9655732956',
  linkedin: 'https://www.linkedin.com/in/harini-thangavel-04992913a/',
  github: 'https://github.com/Harini-07-26/',
  resume: '/Harini_Thangavel.pdf'
};

export const NAV_LINKS = [
  { label: 'Home', id: 'home', href: '/#home' },
  { label: 'About', id: 'about', href: '/#about' },
  { label: 'Projects', id: 'projects', href: '/#projects' },
  { label: 'Skills', id: 'skills', href: '/#skills' },
  { label: 'Contact', id: 'contact', href: '/#contact' }
];

export const SKILLS = {
  Frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 82 },
    { name: 'JavaScript', level: 90 },
    { name: 'Tailwind CSS', level: 88 }
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'NestJS', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'REST APIs', level: 90 }
  ],
  Database: [
    { name: 'MySQL', level: 82 },
    { name: 'Prisma ORM', level: 78 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 70 }
  ],
  Architecture: [
    { name: 'RabbitMQ', level: 72 },
    { name: 'Event-Driven Architecture', level: 70 },
    { name: 'API Integration', level: 85 }
  ],
  '3D & AI': [
    { name: 'Three.js', level: 75 },
    { name: 'React Three Fiber', level: 72 },
    { name: 'AI-Assisted Development', level: 78 },
    { name: 'GPT Integrations', level: 74 }
  ],
  Tools: [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Postman', level: 85 },
    { name: 'Bitbucket', level: 80 },
    { name: 'CI/CD', level: 72 }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: '3D Elevator Configurator',
    subtitle: 'Interactive 3D Product Experience',
    description:
      'An immersive web application allowing users to configure elevator options in real-time and visualize every change on a photorealistic 3D model — from cabin finishes and door styles to dimensions and lighting.',
    longDescription:
      'Built for Nibav Lifts, this tool enables sales and customers to configure elevator models interactively. Users select cabin size, finish material, door type, and interior lighting. Every selection instantly updates the 3D model rendered with Three.js and React Three Fiber, providing a true-to-life preview before purchase.',
    technologies: ['React.js', 'Three.js', 'React Three Fiber', 'Drei'],
    color: 'from-indigo-500 to-purple-600',
    icon: '🏗️',
    highlights: [
      'Real-time 3D visualization',
      'Multiple configuration options',
      'Photorealistic rendering',
      'Mobile responsive'
    ]
  },
  {
    id: 2,
    title: 'Enterprise Management Platform',
    subtitle: 'Full-Scale Business Operations Suite',
    description:
      'A robust enterprise platform handling complex business workflows, optimized database operations, asynchronous job processing, and rich data exports — serving thousands of daily transactions.',
    longDescription:
      'Built with Next.js and NestJS microservices, this platform powers end-to-end business management: lead tracking, inventory, invoicing, and reporting. Features include optimized MySQL queries via Prisma ORM, RabbitMQ queues for async processing, PDF/Excel exports, and a fully typed REST API layer.',
    technologies: ['Next.js', 'NestJS', 'Prisma ORM', 'MySQL', 'RabbitMQ'],
    color: 'from-emerald-500 to-teal-600',
    icon: '🏢',
    highlights: ['Async job queues', 'Database optimization', 'PDF/Excel exports', 'REST API design']
  },
  {
    id: 3,
    title: 'Internal GPT Assistant',
    subtitle: 'AI-Powered Internal Knowledge Tool',
    description:
      'A custom GPT-powered assistant built for internal teams to query company knowledge, automate repetitive research tasks, and surface contextual insights — dramatically reducing manual lookup time.',
    longDescription:
      'Identified a bottleneck where internal teams spent hours searching documentation and historical data. Built a Node.js backend integrating OpenAI APIs with a company knowledge base. The assistant understands natural language queries, retrieves relevant internal data, and returns structured responses, cutting research time by over 60%.',
    technologies: ['Node.js', 'OpenAI API', 'REST APIs', 'JavaScript'],
    color: 'from-orange-500 to-rose-600',
    icon: '🤖',
    highlights: [
      'Natural language queries',
      'Knowledge base integration',
      '60% faster research',
      'Team productivity boost'
    ]
  }
];

export const EXPERIENCES = [
  {
    company: 'Nibav Lifts',
    role: 'Full Stack Developer',
    period: '2022 – Present',
    description:
      'Led frontend and backend development for customer-facing platforms, 3D configurator tools, and enterprise management systems.',
    points: [
      'Developed and maintained frontend and backend of customer-facing websites for Nibav Lifts and Elite Elevators',
      'Designed MySQL databases, built REST APIs with Node.js for robust CRUD operations',
      'Built an interactive 3D Elevator Configurator using Three.js and React Three Fiber',
      'Developed an internal GPT assistant that reduced team research time by 60%',
      'Led a full enterprise management platform (NestJS, Prisma, RabbitMQ, MySQL)',
      'Optimized SEO and site performance for better search visibility',
      'Collaborated with design and product teams to deliver responsive UI/UX'
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'NestJS', 'Three.js', 'MySQL', 'RabbitMQ']
  },
  {
    company: 'Tekonika Technologies',
    role: 'Software Engineer',
    period: '2021 – 2022',
    description:
      'Built REST APIs, MySQL database schemas, and contributed to full project lifecycles across 3+ client projects.',
    points: [
      'Designed and developed MySQL databases and schema architectures',
      'Built custom REST APIs using Node.js for efficient CRUD operations',
      'Collaborated with technical leads ensuring 100% on-time sprint delivery',
      'Contributed to the full development lifecycle of 3+ projects from inception to deployment'
    ],
    tech: ['Node.js', 'MySQL', 'REST APIs', 'JavaScript']
  }
];
