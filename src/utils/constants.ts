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
  { label: 'Experience', id: 'experience', href: '/#experience' },
  { label: 'Projects', id: 'projects', href: '/#projects' },
  { label: 'Skills', id: 'skills', href: '/#skills' },
  { label: 'Contact', id: 'contact', href: '/#contact' }
];

export const SKILLS = {
  Frontend: [
    { name: 'React.js', level: 92 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'React Native', level: 80 }
  ],
  Backend: [
    { name: 'Node.js', level: 88 },
    { name: 'NestJS', level: 85 },
    { name: 'Express.js', level: 88 },
    { name: 'RESTful APIs', level: 92 },
    { name: 'Microservices', level: 80 }
  ],
  Database: [
    { name: 'MySQL / SQL', level: 88 },
    { name: 'Prisma ORM', level: 85 },
    { name: 'MongoDB / Mongoose', level: 80 },
    { name: 'Sequelize', level: 78 }
  ],
  Architecture: [
    { name: 'RabbitMQ', level: 82 },
    { name: 'Event-Driven Architecture', level: 80 },
    { name: 'API Integration', level: 88 },
    { name: 'RBAC Authorization', level: 85 }
  ],
  '3D & AI': [
    { name: 'Three.js 3D Web', level: 85 },
    { name: 'React Three Fiber & Drei', level: 82 },
    { name: 'Generative AI Integration', level: 82 },
    { name: 'Internal GPT Development', level: 84 }
  ],
  'Cloud & Tools': [
    { name: 'AWS S3 & DigitalOcean Spaces', level: 82 },
    { name: 'CI/CD & Deployments', level: 80 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'Google Maps / Places API', level: 96 }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: '3D Elevator Configurator',
    subtitle: 'Interactive 3D Product Experience',
    category: '3D Web & Interactive',
    description:
      'An immersive web application allowing users to configure elevator options in real-time and visualize every change on a photorealistic 3D model — from cabin finishes and door styles to dimensions and lighting.',
    longDescription:
      'Engineered for Nibav Lifts and Elite Elevators, this interactive 3D configurator lets customers and sales representatives explore elevator models in real-time. Users customize finishes, glass panels, lighting, and accessories with instant photorealistic model rendering powered by Three.js and React Three Fiber, accelerating the sales conversion cycle.',
    technologies: ['React.js', 'Three.js', 'React Three Fiber', 'Drei', 'Tailwind CSS'],
    color: 'from-emerald-500 to-teal-600',
    icon: '🏗️',
    highlights: [
      'Real-time 3D model rendering',
      'Dynamic material & cabin customization',
      'High-performance frame rate',
      'Cross-platform responsive design'
    ]
  },
  {
    id: 2,
    title: 'Enterprise Management Platform & EMI Financing',
    subtitle: 'Full-Scale Business Operations Suite',
    category: 'Enterprise & Full-Stack',
    description:
      'A robust enterprise platform handling complex business workflows, financing & EMI applications, optimized database operations, and asynchronous processing serving thousands of daily transactions.',
    longDescription:
      'Architected end-to-end full stack architecture for customer portals and enterprise business operations. Features dynamic multi-step EMI financing workflows with document verification, RabbitMQ event-driven queues for heavy background tasks, Prisma ORM query tuning on MySQL, and granular role-based access control (RBAC).',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'Prisma ORM', 'MySQL', 'RabbitMQ'],
    color: 'from-emerald-500 to-teal-600',
    icon: '🏢',
    highlights: [
      'RabbitMQ event-driven architecture',
      'Multi-step EMI & financing workflows',
      'Optimized MySQL queries with Prisma',
      'Role-based access control (RBAC)'
    ]
  },
  {
    id: 3,
    title: 'Internal GPT Platform',
    subtitle: 'AI-Powered Enterprise Knowledge Tool',
    category: 'AI & Machine Learning',
    description:
      'A custom Generative AI platform giving employees conversational access to organization-specific knowledge and automating repetitive internal workflows.',
    longDescription:
      'Integrated Generative AI into internal business applications at Nibav Lifts. Built secure backend APIs in Node.js connecting AI models with internal company documentation and operational datasets. The platform enables staff to execute natural language queries and retrieve structured business answers in seconds, saving 60%+ research time.',
    technologies: ['Node.js', 'Generative AI', 'RESTful APIs', 'Vector Search', 'TypeScript'],
    color: 'from-purple-500 to-pink-600',
    icon: '🤖',
    highlights: [
      'Conversational company knowledge access',
      'Automated internal workflows',
      'Secure scoped API endpoints',
      '60%+ reduction in research time'
    ]
  },
  {
    id: 4,
    title: 'Customer Document Management System',
    subtitle: 'Secure Cloud Storage & Ingestion',
    category: 'Cloud & Infrastructure',
    description:
      'Centralized cloud storage and verification system built with AWS S3 and DigitalOcean Spaces for managing high-volume customer documents and media.',
    longDescription:
      'Engineered a centralized system to securely store, validate, and retrieve high-volume customer identification and financing documents. Integrates AWS S3 and DigitalOcean Spaces for scalable media delivery, coupled with NestJS microservices and MySQL for sub-second document verification and download pipelines.',
    technologies: ['NestJS', 'AWS S3', 'DigitalOcean Spaces', 'Prisma ORM', 'MySQL'],
    color: 'from-blue-500 to-cyan-600',
    icon: '☁️',
    highlights: [
      'AWS S3 & DigitalOcean Spaces integration',
      'High-throughput media upload pipelines',
      'Encrypted document access & RBAC',
      'Zero-downtime microservice architecture'
    ]
  }
];

export const EXPERIENCES = [
  {
    company: 'Nibav Lifts',
    location: 'Chennai, India',
    role: 'Full Stack Developer',
    period: 'Feb 2024 – Nov 2026',
    badge: 'Home elevator manufacturer',
    type: 'Full-Time',
    description:
      'Architecting and delivering end-to-end web applications, interactive 3D configurators, asynchronous event-driven microservices, and Generative AI platforms powering customer portals and global operations.',
    points: [
      'Architected end-to-end full stack web applications using React.js, Next.js, TypeScript, Node.js, NestJS, Prisma ORM, and MySQL powering customer portals and internal operations.',
      'Engineered interactive 3D product visualization experiences using Three.js & React Three Fiber, enabling real-time 3D model rendering and dynamic customization.',
      'Implemented RabbitMQ event-driven architecture for asynchronous background processing and reliable inter-service messaging under heavy load.',
      'Contributed to an internal GPT platform integrating Generative AI, enabling conversational search across organizational knowledge and automating internal workflows.',
      'Engineered scalable RESTful APIs connecting frontend interfaces to backend microservices, reducing integration latency and improving reliability.',
      'Integrated AWS S3 and DigitalOcean Spaces for secure, high-availability media management and streamlined storage workflows.',
      'Owned application deployment and release management using CI/CD practices, sustaining zero-downtime releases and rapid incident resolution in production.'
    ],
    tech: [
      'React.js',
      'Next.js',
      'Node.js',
      'NestJS',
      'Three.js',
      'TypeScript',
      'Prisma ORM',
      'MySQL',
      'RabbitMQ',
      'AWS S3',
      'Gen AI',
      'CI/CD'
    ]
  },
  {
    company: 'Tekonika Technologies',
    location: 'Bengaluru, India',
    role: 'Software Engineer',
    period: 'Jan 2023 – Aug 2023',
    badge: 'Software Engineering',
    type: 'Full-Time',
    description:
      'Engineered robust backend RESTful APIs, optimized MySQL database architectures, and spearheaded full-lifecycle web application delivery across client projects.',
    points: [
      'Established efficient MySQL database structures to improve data accessibility, maintain schema consistency, and support growing data throughput.',
      'Streamlined frontend-backend integration by implementing high-performance RESTful APIs with Node.js and Express.js for reliable data processing workflows.',
      'Contributed to the full SDLC of 3+ client projects from inception to production deployment, achieving 100% on-time sprint delivery.',
      'Partnered with technical leads to establish clean coding standards and conduct code reviews using Git and GitHub, upholding software quality across deliverables.'
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'RESTful APIs', 'JavaScript', 'Git', 'Agile/Scrum']
  },
  {
    company: "BYJU'S",
    location: 'Bengaluru, India',
    role: 'Associate Software Engineer',
    period: 'Jun 2021 – Nov 2022',
    badge: 'Edtech',
    type: 'Full-Time',
    description:
      'Developed and maintained high-traffic internal sales web applications with React.js, built cross-platform mobile tools with React Native, and established scalable backend data pipelines.',
    points: [
      'Advanced and maintained 7+ internal web applications for sales and operations teams using React.js, React Hooks, JavaScript, HTML5, and CSS3, elevating workflow efficiency.',
      'Built a cross-platform mobile application for sales representatives using React Native, providing on-the-go access to key sales tools and customer tracking.',
      'Engineered server-side applications using Node.js, MongoDB, and Mongoose, establishing reliable data pipelines and APIs for multiple internal systems.',
      'Resolved complex bugs, performed peer code reviews, and created comprehensive technical documentation, accelerating developer onboarding.'
    ],
    tech: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'Mongoose', 'JavaScript', 'HTML5/CSS3']
  }
];
