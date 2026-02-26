import {
  Angular,
  Bootstrap,
  Docker,
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
  TypeScript,
} from '@/components/icons';

export const data = {
  name: 'Dhanush Kumar T',
  title: 'Software Engineer',
  email: 'dhanushkrock@gmail.com',
  mobile: '7708522584',
  location: 'Trichy, Tamil Nadu',
  resumeUrl: '/Dhanush_Kumar_T.docx',
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
      period: 'July 2023 – Present',
      location: 'Chennai',
      downloadUrl: '/Oasys Joining Letter.pdf',
      tasks: [
        'Developed responsive user interfaces using React and Angular frameworks.',
        'Built reusable components and maintained frontend libraries.',
        'Integrated frontend with Spring Boot and Node.js backend APIs.',
        'Optimized application performance using lazy loading techniques.',
        'Managed PostgreSQL and MySQL databases and optimized queries.',
        'Conducted API testing using Postman.',
      ],
    },
    {
      company: 'OASYS Institute of Technology',
      role: 'DDUGKY – Full Stack Development Course',
      period: 'July 2022 – March 2023',
      location: 'Tiruchirappalli',
      tasks: [
        'Completed full stack development training covering React, Angular, Node.js, Spring Boot, and databases.',
        'Built real-world projects and implemented frontend-backend integration.',
      ],
    },
    {
      company: 'Foxconn India Pvt Ltd',
      role: 'Supply Chain Management',
      period: 'January 2022 – June 2022',
      location: 'Kanchipuram',
      tasks: [
        'Managed logistics data flow from procurement to delivery.',
        'Improved reporting processes for enhanced supply chain visibility.',
      ],
    },
    {
      company: 'Oasys Cybernetics Pvt Ltd',
      role: 'HelpDesk Executive',
      period: 'February 2021 – December 2021',
      location: 'Tiruchirappalli',
      downloadUrl: '/Help Desk.pdf',
      tasks: [
        'Resolved client technical issues through systematic troubleshooting.',
        'Created technical documentation for recurring issues and solutions.',
      ],
    },
  ],
  projects: [
    {
      name: 'COOPTEX ERP System',
      description:
        'Developed and implemented modules for inventory, sales, and finance, ensuring smooth and efficient data flow across departments. Leveraged Angular for dynamic, responsive front-end development. Used PostgreSQL for secure, scalable database management. Collaborated with cross-functional teams to optimize performance and deliver a seamless user experience.',
      tech: ['Angular', 'Java Spring Boot', 'PostgreSQL'],
      liveDemo: 'https://infotex.in/login',
      image: 'cooptex-erp-image',
    },
    {
      name: 'OASYS Employee Portal',
      description:
        'Designed and developed a smart, all-in-one platform for managing employee information, attendance, leave, approvals, and tasks. Implemented easy-to-use workflows, one-time approval systems, and real-time updates to simplify daily HR activities. Built with a clean, intuitive user interface for enhanced usability and productivity. Ensured high efficiency, security, and transparency to keep teams connected and processes streamlined. Integrated React for an interactive front end, Spring Boot for robust backend services, and MySQL for reliable data management.',
      tech: ['React', 'Spring Boot', 'MySQL'],
      liveDemo: 'https://devportal.oasyscybernetics.in/portal/home',
      image: 'employee-portal-image',
    },
  ],
  personalProjects: [
    {
      name: 'Tamil Nadu Tourism',
      description:
        'A comprehensive travel and tourism platform for Tamil Nadu. Features include travel mood selection, exploration of heritage sites, spiritual destinations, and customized holiday packages. Built with a focus on vibrant aesthetics and user engagement.',
      tech: ['React'],
      liveDemo: 'https://tt-frontend.vercel.app/',
      image: 'tn-tourism-image',
    },
    {
      name: 'TODO App',
      description:
        'A full-stack TODO application using MongoDB, React, and Node.js. Features include user authentication with Google Sign-In, allowing users to manage their tasks securely.',
      tech: ['MongoDB', 'React', 'Node.js'],
      liveDemo: 'https://todoapplatest.vercel.app',
      image: 'todo-app-image',
    },
    {
      name: 'SMCC - Cricket',
      description:
        'Developed a live cricket scoring and tournament management platform. Features real-time score updates, match schedules, points tables, and detailed player statistics. Built with a focus on performance and real-time data sync to provide a seamless spectator experience.',
      tech: ['React', 'Node.js', 'Socket.io', 'MySQL'],
      liveDemo: 'https://smcc-web.vercel.app/',
      image: 'smcc-project-image',
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
      downloadUrl: '/BE.pdf',
    },
    {
      degree: 'Bio-Maths (HSC)',
      institution: 'Government Higher Secondary School',
      period: '2014 – 2015',
      grade: 'Percentage: 77%',
      downloadUrl: '/HSC.pdf',
    },
    {
      degree: 'SSLC',
      institution: 'Government Higher Secondary School',
      period: '2012 – 2013',
      grade: 'Percentage: 92%',
      downloadUrl: '/SSLC.pdf',
    },
  ],
  certifications: [
    {
      name: 'Application Developer – Web Mobile (SSC/Q8403), Level 6',
      institution: 'DDUGKY, KRK Educational Trust, Trichy',
      period: 'Sep 2022 – Feb 2023',
      downloadUrl: '/DDUGKY.pdf',
    },
    {
      name: 'National Service Scheme – Special Camping Certificate',
      institution: 'Anna University, Chennai (Kongunadu College of Engineering and Technology)',
      period: 'Feb 2017 – Mar 2017',
      downloadUrl: '/NSS.pdf',
    },
  ],
};
