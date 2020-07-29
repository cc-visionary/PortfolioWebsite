import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christopher Lim', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Welcome to my website portfolio! Check my portfolio now and you'll definitely enjoy the visual graphics along with the music I'll provide you!", // e.g: Welcome to my website
  theme_color: '#000'
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Christopher',
  subtitle: 'I am a...',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  main: "I am a 1st year college student, taking BS Computer Science in De Lasalle University, who's passion is coding. Ever since I was 16, I have learned more about programming non-stop. Now I have gathered lots of knowledge and experience which I believe I can put into good use.",
  skills: [
    "Machine Learning with TensorFlow, PyTorch, and FastAI",
    'Web Development with ReactJS',
    'Mobile Development with React Native',
    "Software Development with Python's Tkinter",
    "Webscraping with Python's Selenium or Scrapy",
  ],
  status: 'I\'m currently freelancing at Upwork, so feel free to contact me if you wish to hire me.',
  resume: 'https://drive.google.com/file/d/1tKkOvONqfCdeU8_AnWTkRc8WUSBe1KmK/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react-multicrop.png',
    title: 'ReactJS Image Multi Crop',
    info: 'A Image cropping tool which allows you to crop multiple parts of the image.',
    info2: 'As of the time I created this (2019) there weren\'t that many image cropping tools which allows you to crop multiple parts of the image',
    url: '',
    repo: 'https://github.com/cc-visionary/ReactJS-Image-Multi-Crop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ebay_scraper.png',
    title: 'Ebay Price Checker',
    info: 'A Web Scraping program which is useful for those who are using Ebay and would want to check whether the item(s) they\'re selling is the lowest price or not.',
    info2: 'From that knowledge, you\ll be able to adjust your prices if yours is too high or you can also use it to scout prices',
    url: 'https://docs.google.com/document/d/1emT28jOHaI44B8gtHYnciKcVmExIeg6465uTYvO1HNc/edit?usp=sharing',
    repo: 'https://github.com/cc-visionary/Ebay-Product-Scraper', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lim.christopher.go@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      alt: 'Facebook',
      url: 'https://www.facebook.com/CCVisionary',
    },
    {
      id: nanoid(),
      name: 'instagram',
      alt: 'Instagram',
      url: 'https://www.instagram.com/clovejl123/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      alt: 'Twitter',
      url: 'https://twitter.com/ClovesJL',
    },
    {
      id: nanoid(),
      name: 'codepen',
      alt: 'CodePen',
      url: 'https://codepen.io/cc-visionary',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      alt: 'LinkedIn',
      url: 'https://www.linkedin.com/in/christopher-lim-122831183/',
    },
    {
      id: nanoid(),
      name: 'briefcase',
      alt: 'Upwork',
      url: 'https://www.upwork.com/fl/ccvisionary',
    },
    {
      id: nanoid(),
      name: 'github',
      alt: 'Github',
      url: 'https://github.com/cc-visionary',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
