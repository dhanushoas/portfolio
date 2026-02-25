import {
  Angular,
  Bootstrap,
  Docker,
  ExpressJs,
  Firebase,
  GitHub,
  GitLab,
  Java,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJs,
  PostgreSQL,
  ReactJs,
  Render,
  Spring,
  TailwindCSS,
  TypeScript,
  Vercel,
} from '@/components/icons';

export const data = {
  name: 'Dhanush Kumar T',
  title: 'Software Engineer',
  email: 'dhanushkrock@gmail.com',
  mobile: '7708522584',
  location: 'Trichy, Tamil Nadu',
  resumeUrl: '/Dhanush Kumar T.docx',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhanush-kumar-t-7b8268281',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dhanushoas',
    },
  ],
  summary:
    'Dedicated Full Stack Developer with hands-on experience in React, Angular, Node.js, Java, and Spring Boot for delivering robust, scalable, and secure applications. Proficient in database management (PostgreSQL, MySQL, MongoDB) and API integration and testing using Postman. Experienced in building user interfaces and end-to-end software development following Agile methodologies.',
  workExperience: [
    {
      company: 'Oasys Cybernetics Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'July 2022 – Present',
      location: 'Chennai',
      tasks: [
        'Developed responsive user interfaces using React and Angular frameworks.',
        'Built reusable components and maintained frontend libraries.',
        'Integrated frontend with Spring Boot/Node.js backend APIs.',
        'Optimized application performance using lazy loading techniques.',
        'Managed PostgreSQL and MySQL databases, optimizing queries.',
        'Conducted API testing using Postman.',
      ],
    },
    {
      company: 'Oasys Cybernetics Pvt Ltd',
      role: 'HelpDesk Executive',
      period: 'February 2021 – December 2022',
      location: 'Trichy',
      tasks: [
        'Resolved client technical issues through systematic troubleshooting.',
        'Created documentation for common technical problems and solutions.',
      ],
    },
    {
      company: 'Foxconn India Pvt Ltd',
      role: 'Supply Chain Management',
      period: 'January 2022 – June 2022',
      location: 'Kanchipuram',
      tasks: [
        'Managed logistics data flow from procurement to delivery.',
        'Improved reporting processes for supply chain visibility.',
      ],
    },
  ],
  projects: [
    {
      name: 'COOPTEX ERP System',
      description:
        'Developed and implemented modules for inventory, sales, and finance, ensuring smooth and efficient data flow across departments. Leveraged Angular for dynamic, responsive front-end development. Used PostgreSQL for secure, scalable database management. Collaborated with cross-functional teams to optimize performance and deliver a seamless user experience.',
      tech: ['Angular', 'Java Spring Boot', 'PostgreSQL'],
      image: 'cooptex-erp-image',
    },
    {
      name: 'OASYS Employee Portal',
      description:
        'Designed and developed a smart, all-in-one platform for managing employee information, attendance, leave, approvals, and tasks. Implemented easy-to-use workflows, one-time approval systems, and real-time updates to simplify daily HR activities. Built with a clean, intuitive user interface for enhanced usability and productivity. Ensured high efficiency, security, and transparency to keep teams connected and processes streamlined. Integrated React for an interactive front end, Spring Boot for robust backend services, and MySQL for reliable data management.',
      tech: ['React', 'Spring Boot', 'MySQL'],
      image: 'employee-portal-image',
    },
    {
      name: 'SMCC - Cricket Championship',
      description:
        'Developed a live cricket scoring and tournament management platform. Features real-time score updates, match schedules, points tables, and detailed player statistics. Built with a focus on performance and real-time data sync to provide a seamless spectator experience.',
      tech: ['React', 'Node.js', 'Socket.io', 'MySQL'],
      liveDemo: 'https://smcc-web.vercel.app/',
      image: 'smcc-project-image',
    },
    {
      name: 'Tamil Nadu Tourism',
      description:
        'A comprehensive travel and tourism platform for Tamil Nadu. Features include travel mood selection, exploration of heritage sites, spiritual destinations, and customized holiday packages. Built with a focus on vibrant aesthetics and user engagement.',
      tech: ['React', 'Tailwind CSS', 'Vercel'],
      liveDemo: 'https://tt-frontend.vercel.app/',
      image: 'tn-tourism-image',
    },
  ],
  personalProjects: [
    {
      name: 'TODO App',
      description:
        'A full-stack TODO application using the MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication with Google Sign-In, allowing users to manage their tasks securely.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vercel'],
      liveDemo: 'https://todoapplatest.vercel.app',
      image: 'todo-app-image',
    },
    {
      name: 'Calculator Application',
      description:
        'Built a responsive calculator using Angular and Bootstrap with real-time calculation and error handling. Applied modular architecture and clean UI design principles for better maintainability. Deployed using Vercel for continuous integration and quick access.',
      tech: ['Angular', 'Bootstrap', 'Vercel'],
      liveDemo: 'https://calculator-nu-gilt.vercel.app/',
      image: 'calculator-app-image',
    },
    {
      name: 'Portfolio Application',
      description:
        'Designed and developed a personal portfolio showcasing professional skills, experience, and projects. Implemented multi-language support, responsive layout, and smooth navigation using Angular routing. Hosted on Vercel for fast performance and global access.',
      tech: ['React', 'Vercel'],
      liveDemo: 'https://portfolio-react-blush-eight.vercel.app/',
      image: 'portfolio-app-image',
    },
  ],
  skills: [
    {
      category: 'Programming Languages',
      technologies: [
        { name: 'Java', icon: Java },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'TypeScript', icon: TypeScript },
      ],
    },
    {
      category: 'Frontend Technologies',
      technologies: [
        { name: 'React', icon: ReactJs },
        { name: 'Angular', icon: Angular },
        { name: 'HTML', icon: null },
        { name: 'CSS', icon: null },
        { name: 'Bootstrap', icon: Bootstrap },
      ],
    },
    {
      category: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', icon: NodeJs },
        { name: 'Spring Boot', icon: Spring },
        { name: 'Express.js', icon: ExpressJs },
      ],
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: PostgreSQL },
        { name: 'MySQL', icon: MySQL },
        { name: 'MongoDB', icon: MongoDB },
      ],
    },
    {
      category: 'Tools & Platforms',
      technologies: [
        { name: 'VS Code', icon: null },
        { name: 'Spring Tool Suite', icon: Spring },
        { name: 'GitLab', icon: GitLab },
        { name: 'Postman', icon: null },
        { name: 'Compass', icon: null },
        { name: 'DBeaver', icon: null },
      ],
    },
    {
      category: 'Methodologies & Others',
      technologies: [
        { name: 'Agile', icon: null },
        { name: 'Scrum', icon: null },
        { name: 'API Development', icon: null },
        { name: 'API Testing', icon: null },
        { name: 'Code Management', icon: null },
        { name: 'Debugging', icon: null },
      ],
    },
  ],
  education: [
    {
      degree: 'B.E. in Electrical and Electronics Engineering',
      institution: 'Kongunadu College of Engineering and Technology',
      period: '2015 – 2019',
      grade: 'Percentage: 73% | First Class',
    },
  ],
  certifications: [
    {
      name: 'Application Developer – Web Mobile (SSC/Q8403), Level 6',
      institution: 'DDUGKY, KRK Educational Trust, Trichy',
      period: 'Sep 2022 – Feb 2023',
    },
  ],
};
