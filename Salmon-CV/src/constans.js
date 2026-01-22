import salmon from './assets/salmon.jpg'

export const navItems = [
    {
        id: 'about',
        label: 'About',
        icon: 'person'
    },
    {
        id: "experience",
        label: 'Experience',
        icon: 'work_history'
    },
    {
        id: 'skills',
        label: 'Skills',
        icon: 'bolt'
    }
]

export const contact_icons = [
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/luis-salm%C3%B3n-rosales-792473119/',
    },
    {
        name: 'github',
        link: 'https://github.com/luissalmon5',
    },
    {
        name: 'whatsapp',
        link: 'https://wa.me/6143573383',
    }
]

export const PROFILE = {
    name: 'Luis Salmón',
    role: 'Frontend Developer | React.js • Responsive UI • JavaScript',
    location: 'Chihuahu Chihuahua México',
    languages: 'Spanish, English',
    availability: 'Full-time / Freelance',
    bio: 'Frontend Developer with 8+ years of experience designing and developing modern, scalable web applications using JavaScript, jQuery, SASS, and React.js. Highly specialized in eCommerce platforms, I consistently deliver high-quality UX/UI solutions, focusing on performance, responsiveness, and usability across all devices. I have built custom landing pages and CMS-driven websites from the ground up, avoiding heavy CSS frameworks to maintain clean, maintainable, and optimized codebases. My experience also includes developing ServiceNow Service Portals and working as a Demo Support Engineer, collaborating on ServiceNow projects by supporting demos, resolving portal issues, and assisting with platform configurations. Strong collaborator with a problem-solving mindset and a continuous learning attitude.',
    image: salmon
};

export const EXPERIENCES = [
    {
        id: '1',
        title: 'ServiceNow Developer / Demo Support Engineer',
        company: 'Concentrix Catalyst.',
        period: '2021 - 2025',
        description: 'Leading the frontend development of Service Portal Projects. As a Demo Support Engineer troubleshoot and resolve issues reported by users',
        responsibilities: [
            { text: 'Troubleshoot and resolve reported issues on DemoHub Project.' },
            { text: 'Design and develop email notification templates to improve communication and issue tracking for end users.' },
            { text: 'Support and contribute to the development of ServiceNow Service Portals, collaborating with cross-functional teams.' },
            { text: 'Maintain, optimize, and enhance the performance of ServiceNow Service Portal applications.' },
            { text: 'Develop custom Service Portal widgets using Vanilla JavaScript and Node.js.' }
        ]
    },
    {
        id: '2',
        title: 'Magento 2 Frontend Developer',
        company: 'Concentrix Catalyst',
        period: '2018 - 2021',
        description: 'Developed responsive websites and e-commerce platforms for diverse clients. Worked closely with designers to ensure pixel-perfect implementation and cross-browser compatibility.',
        responsibilities: [
            { text: 'Develop and maintain CMS pages and reusable templates for Magento 2 projects.' },
            { text: 'Build and maintain reusable Header and Footer components across multiple stores.' },
            { text: 'Implement frontend features using Vanilla JavaScript, jQuery, SASS, Knockout.js, and XML layout files.' },
            { text: 'Collaborate with the frontend team to design and maintain a shared base theme used across multiple eCommerce projects.' }
        ]
    },
    {
        id: '3',
        title: 'Junior Fronten Developer',
        company: 'Concentrix Catalyst',
        period: '2017 - 2018',
        description: "Assisted in maintaining an existing Magento 1 eCommerce platform, designing and implementing new features and improvements.",
        responsibilities: [
            { text: 'Maintain and update existing CMS pages and templates.' },
            { text: 'Identify and fix JavaScript-related issues and frontend bugs.' },
        ]
    }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Technical Skills',
    icon: 'terminal',
    skills: [
      { name: 'React.js', icon: 'react'},
      { name: 'Tailwind', icon: 'tailwind'},
      { name: 'CSS', icon: 'css'},
      { name: 'Javascript', icon: 'javascript'},
      { name: 'HTML', icon: 'html'},
      { name: 'WordPress', icon: 'wordpress'},
      { name: 'jQuery', icon: 'jquery'},
      { name: 'Magento', icon: 'magento'},
    ]
  },
  {
    title: 'Design & Tools',
    icon: 'design_services',
    skills: [
      { name: 'Figma', icon: 'figma'},
      { name: 'Invision' , icon: 'invision'},
      { name: 'Git' , icon: 'git'},
      { name: 'SASS', icon: 'sass'},
    ]
  }
];