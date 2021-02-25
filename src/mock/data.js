import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vadim Roibu Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Vadim',
  subtitle: 'I am a Junior QA tester and Web Developer',
  cta: 'more About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Vadim. I live in Moldova, Chișinău. I am just starting my career in IT.',
  paragraphTwo:
    'I began my path with a QA course in Software Testing. For now, I am improving my skills on freelance platforms like utes.com and test.io. My focus is more on Web Applications and, I think that to be a better Web application QA engineer, you have to know very well how the system is working. That`s why I am actively learning Web Development and Advance JavaScript Programming on Udemy.',
  paragraphThree:
    'For the future, I want to learn Phyton or Java and at least one test automation framework. I think that will help me to achieve my final goal - to become a QA Automation Engineer.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WordPress Websites',
    info: '',
    info2: '',
    url: 'https://metalprim.md',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
