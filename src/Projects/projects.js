export const projects = [
  {
    id: 1,
    title: 'T.L.D.R',
    summary: 'A google chrome extension that summarizes articles.',
    description:
      'This extension summarizes and saves web articles for later reading. The extension also provides a text box that the user can talk directly to chatGPT with.',
    challenges:
      'The biggest challenge was working with the chatGPT API and getting the extension to work with the API and this was our first and only extension that my partner and I made. Learning webpack and how to use it was also a challenge. This project uses Javascript, React, Chrome API, webpack, Scss and ChatGPT API.',
    link: 'https://chromewebstore.google.com/detail/tldr/fdoabojpkjopijhpfhapkddbafljjfff?hl=en-US&utm_source=ext_sidebar',
    technologies: [
      '/frontEnd/react.svg',
      '/frontEnd/javascript.svg',
      '/frontEnd/css.svg',
    ],
  },
  {
    id: 2,
    title: 'Joyland Prime Academy',
    summary: 'Full-stack application for a school in Kenya',
    description:
      'This project features a modern, responsive design built with React and Material UI components, ensuring an optimal user experience across various devices. Information about the school, including its establishment in 2008, is thoughtfully organized and presented clearly through a clean visual hierarchy using cards and papers to distinguish content sections. Its grid-based layout dynamically adjusts to different screen sizes, enhancing accessibility. In addition there is also a ton of admin capabilites that give the admin full control of the application',
    challenges:
      'This was my first time working with firebase which just came with a learning curve, but the biggest challenge was this was also my first time using Material U.I, learning the syntax was a challenge but quite a lot of fun.',
    link: 'https://joyland.netlify.app/',
    technologies: [
      'public/frontEnd/react.svg',
      '/frontEnd/javascript.svg',
      '/frontEnd/mui.svg',
      '/backEnd/firebase.svg',
    ],
  },
  {
    id: 5,
    title: 'Siding Business',
    summary: 'Front-end Website for a siding business',
    description:
      'This app is a clean, modern, single-page design that serves as a professional online presence for a siding service business."SG-Siding" conveys professionalism and quality craftsmanship. It successfully uses modern web design trends—minimalism, clear typography, and effective use of visual space—to create a user-friendly platform that highlights the core offerings of a siding business.',
    link: 'https://shaung.netlify.app/',
    technologies: [
      '/frontEnd/react.svg',
      '/frontEnd/javascript.svg',
      '/frontEnd/html5.svg',
      '/frontEnd/css.svg',
    ],
  },

  {
    id: 4,
    title: 'Minty Fresh Codeworks',
    summary: 'This is a personal website for freelance work',
    description:
      'I built this website to showcase my work and provide a way for potential clients to contact me. It is a simple, clean, and professional website that is easy to navigate and use.',
    challenges:
      'This build took me a while to complete but its one of favourite builds, learning more about more about modern web design and how to implement it was a challenge but a fun one.',
    link: 'https://mintyfreshcodeworks.netlify.app/',
    technologies: [
      '/frontEnd/react.svg',
      '/frontEnd/javascript.svg',
      '/frontEnd/html5.svg',
      '/frontEnd/css.svg',
      '/backEnd/firebase.svg',
      // '/backEnd/express.svg',
      // '/database/mysql.svg',
    ],
  },
  {
    id: 3,
    title: 'Wyatt Wiebe Wellness Center',
    summary: 'Full-stack application for a wellness center',
    description:
      'This is a full-stack application for a wellness center that allows the admin to manage the center and the clients that come in. The project was put on hold but the owner due to changes to the center',
    challenges:
      'During this build I learned how to use Material UI and how to implement it into a project.',
    // link: 'https://github.com/ClintasaurusRex/jungle',
    technologies: [
      '/backEnd/firebase.svg',
      '/frontEnd/javascript.svg',
      '/frontEnd/html5.svg',
      '/frontEnd/css.svg',
    ],
  },
];
