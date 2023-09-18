const Home = { 
  template: `
    <div class="home-container">
      <h2>Home</h2>
      <p>Hello! My name is Shaheer, and I am highly passionate in the field of cybersecurity. I utilize my critical thinking and problem-solving skills in order to solve cybersecurity problems as well as problems in general in the real-world. In this portfolio website I will be showcasing my projects and about myself such as my skills and my strengths. Welcome to my website and enjoy reading it!</p>
      <img src="https://marine-offshore.bureauveritas.com/sites/g/files/zypfnx136/files/styles/magazine_cover_mobile/public/2020-07/AdobeStock_245636933.jpg?h=69e98cab&itok=WHqefyhT" alt="Home Image" class="home-image">
    </div>
  `,
};

const Projects = {
  template: `
    <div class="projects"> 
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" rel="noopener noreferrer">Click here for the Video</a>
        </li>
      </ul>
      <img src="https://img.freepik.com/premium-photo/ai-generated-hacker-laptop-with-binary-computer-code-internet-network-security_77186-4380.jpg?w=826" alt="Projects Image" class="projects-image">
    </div>
  `,
  data() {
    return {
      projects: [
        { 
          id: 1, 
          title: 'Project 1', 
          description: 
                       'In Project 1 I created an HTML webpage on Mercedes Cars in which I included the popular models and the modern features and characteristics which makes them a symbol of luxury and elegance. I also utilised HTML tags like image to make the webpage visually appealing, table for the purpose of listing famous Mercedes models including their prices in an organised manner, and created a form utilising form tag etc. I also added different CSS styles such as external, internal, and inline styles which further enhanced the look of the website as well as making it more responsive.',
          link: 'https://video.deakin.edu.au/media/t/1_9vehik1a'
        },
        { 
          id: 2, 
          title: 'Project 2', 
          description: 'For Project 2 I created a webpage on Literary Books that included famous authors and a brief description of each book. For this web page I implemented the significant concept of Responsive Web Design or RWD that is responsible for ensuring a user-friendly experience and making the web page adaptable on screen sizes of different devices such as laptop, tablet, and mobile etc. To illustrate this I have included the link to the video in which I show my web page on Literary books.',
          link: 'https://video.deakin.edu.au/media/t/1_f60cws96'
        },
        { 
          id: 3, 
          title: 'Project 3', 
          description: 'Lastly, in project 3 I created an HTML file implementing different methods of JavaScript such as string, date, array, number, and function methods through which I gained a good understanding of JavaScript overall. I have included the output of each JavaScript method in the following video.',
          link: 'https://video.deakin.edu.au/media/t/1_f60cws96'
        }
      ]
    };
  }
};

const About = {
  template: `
    <div>
      <h2>About Me</h2>
      <p>In the current technological world where cybersecurity is emerging rapidly due to an increase in the number of cyber-crimes, I have developed a strong set of skills such as critical thinking, problem-solving, and organizational skills, which enables me to make the digitalized world highly secure and safe. I have a strong understanding of computer security and cryptography, which assists me in protecting data as well as computers from hacking. Through a positive mindset and a high level of motivation, I ensure to continue excelling in the field of cybersecurity and expand my knowledge circle in order to gain a high level of expertise in cybersecurity and become a successful cybersecurity professional.</p>
      <img src="https://thumbs.dreamstime.com/b/social-media-day-concept-female-freelancer-starting-working-day-early-morning-drinking-coffee-living-room-website-273935541.jpg" alt="About Me Image" class="about-image">
    </div>
  `,
};

const Contact = {
  template: `
    <div>
      <form class="contact-form">
        <h3>Contact Me</h3>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="contactForm.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="contactForm.email" required>
        </div>
        <div class="form-group">
          <label for="mobile">Phone:</label>
          <input type="tel" id="mobile" v-model="contactForm.mobile" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="contactForm.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  data() {
    return {
      contactForm: {
        name: 'Shaheer', 
        email: 'shaheershahid47@gmail.com', 
        mobile: '+61481685870', 
        message: 'Hi I am Shaheer and this is my webiste',
      },
    };
  },
};


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

const app = Vue.createApp({
  data() {
    return {
      Name: 'Shaheer Shahid',
      Profession: 'Cybersecurity Professional'
    };
  }
});

app.use(router);
app.mount('#app');