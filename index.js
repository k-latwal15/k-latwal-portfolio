const portfolioData = {
    navbar: {
        links: [
            { href: "#about", text: "About" },
            { href: "#skills", text: "Skills" },
            { href: "#projects", text: "Projects" },
            { href: "#experience", text: "Experience" },
            { href: "#contact", text: "Contact" }
        ]
    },
    hero: {
        name: "Kamal Latwal",
        title: "Software Developer | Gurgaon, India",
        description: "Specializing in React.js, Next.js, and modern frontend technologies",
        imageUrl: "./assets/self-photo.jpg",
        resumeLink: "./assets/kamal.latwal.blr.2.2.3.pdf"
    },
    skills: [
        {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Building dynamic and responsive user interfaces"
        },
        {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            description: "Creating server-side rendered React applications"
        },
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Structuring web content with semantic markup"
        },
        {
            name: "CSS/SCSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout of web applications"
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            description: "Programming languages for web development"
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
            description: "Responsive front-end framework"
        },
        {
            name: "Storybook",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
            description: "UI component development and documentation"
        },
        {
            name: "Redux Toolkit",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            description: "State management for complex applications"
        },
        {
            name: "MobX",
            icon: "https://mobx.js.org/assets/mobx.png",
            description: "Simple, scalable state management"
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime for server-side development"
        },
        {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Fast, unopinionated, minimalist web framework for Node.js"
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            description: "Version control and collaboration"
        },
        {
            name: "Linux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            description: "Open-source operating system"
        },
        {
            name: "Webpack",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
            description: "Module bundler for JavaScript applications"
        }
    ],
    "projects": [
        {
            "name": "AdaniOne - Airport Food & Beverages",
            "duration": "November 2023 - Present",
            "bulletPoints": [
                "Developing a Multi-Carting feature enabling users to order from multiple outlets in a single transaction.",
                "Building a Progressive Web Application (PWA) for airport kiosk systems.",
                "Built a food ordering service allowing travelers to pre-order meals for pickup, dine-in, or delivery at boarding gates.",
                "Enhanced the ordering system with intuitive multi-select filters for cuisine, dietary preferences, and service options.",
                "Added a Customizations feature for selecting quantity and meal combo preferences.",
                "Implemented a reusable apply-coupon component with seamless cart creation managed by MobX."
            ],
            "link": "https://www.adanione.com/csmia-mumbai-airport/food-beverages"
        },
        {
            "name": "AdaniOne - Airport Car-Parking",
            "duration": "May 2023 - October 2023",
            "bulletPoints": [
                "Developed a real-time car parking reservation web app for 7+ Indian airports.",
                "Built a custom Sitecore widget for embedding dynamic forms on static web pages.",
                "Integrated Google Geocoder API for automatic state and city details based on postal code.",
                "Applied UX principles and a config-driven UI with adaptive layouts for mobile and desktop platforms."
            ],
            "link": "https://www.adanione.com/parking"
        },
        {
            "name": "AdaniOne - Airport Cab-Booking",
            "duration": "September 2022 - June 2023",
            "bulletPoints": [
                "Integrated Google's Query Autocompletion and Place Details API for an enhanced location input interface.",
                "Applied debouncing methods to reduce redundant network calls and optimize performance.",
                "Crafted SEO-friendly UIs with server-side rendering using Next.js and React, ensuring fast load times.",
                "Implemented local data storage and caching with local forage to minimize API reliance and boost app speed."
            ],
            "link": "https://www.adanione.com/cab-booking"
        },
    ],
    experience: [
        {
            "company": "Binmile Technologies",
            "position": "Software Developer",
            "duration": "April 2022 - Present",
            "bulletPoints": [
                "Contributed to the AdaniOne platform, serving over 4 million+ monthly active users.",
                "Built the Food & Beverages service and kiosk PWA for AdaniOne users, enhancing customer experience in airport services.",
                "Developed the airport Cab-booking and Car-parking services for both mobile and desktop from scratch.",
                "Enhanced code quality and maintainability by implementing best practices using SonarQube and ESLint."
            ]
        },
        {
            "company": "Cognizant Technologies",
            "position": "Programmer Analyst Trainee",
            "duration": "June 2021 - November 2021",
            "bulletPoints": [
                "Worked for The Clorox Company to build and maintain dynamic, responsive web applications.",
                "Ensured seamless user interactions within IAM and ServiceNow portals.",
                "Diagnosed, debugged, and provided bug fixes for software problems."
            ]
        }
    ],
    contact: {
        email: "k.latwal15@gmail.com",
        socialLinks: [
            { platform: "LinkedIn", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg", url: "https://www.linkedin.com/in/k-latwal15" },
            { platform: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg", url: "https://github.com/k-latwal15" }
        ]
    }
};

// Function to render the navbar
function renderNavbar() {
    const navList = document.querySelector('.nav-list');
    portfolioData.navbar.links.forEach(link => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<a href="${link.href}"  class="nav-link">${link.text}</a>`;
        navList.appendChild(li);
    });
}

// Function to render the hero section
function renderHero() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.innerHTML = `
<div class="profile-image">
  <img src="${portfolioData.hero.imageUrl}" alt="${portfolioData.hero.name}">
</div>
<h1>${portfolioData.hero.name}</h1>
<p>${portfolioData.hero.title}</p>
<p>${portfolioData.hero.description}</p>
<a href="${portfolioData.hero.resumeLink}"  target="_blank" class="resume-btn">View Resume</a>
`;
}

// Function to render the skills section
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
  <img src="${skill.icon}" alt="${skill.name}">
  <h3>${skill.name}</h3>
  <div class="skill-description">
    <p>${skill.description}</p>
  </div>
`;
        skillsGrid.appendChild(skillItem);
    });
}

// Function to render the projects section
function renderProjects() {
    const projectsSection = document.querySelector('#projects .projects-grid');
    portfolioData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
  <h3>${project.name}</h3>
  <p class="project-duration">${project.duration}</p>
  <ul>
    ${project.bulletPoints.map(point => `<li>${point}</li>`).join('')}
  </ul>
  <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
`;
        projectsSection.appendChild(projectItem);
    });
}

// Function to render the experience section
function renderExperience() {
    const experienceSection = document.querySelector('#experience .timeline');
    portfolioData.experience.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        expItem.innerHTML = `
  <div class="timeline-content">
    <h3>${exp.company}</h3>
    <h4>${exp.position}</h4>
    <p class="timeline-date">${exp.duration}</p>
    <ul>
      ${exp.bulletPoints.map(point => `<li>${point}</li>`).join('')}
    </ul>
  </div>
`;
        experienceSection.appendChild(expItem);
    });
}

// Function to render the contact section
function renderContact() {
    const contactSection = document.querySelector('#contact');
    contactSection.innerHTML = `
<div class="container">
  <h2>Get in Touch</h2>
  <p class="contact-email">${portfolioData.contact.email}</p>
  <div class="social-links">
    ${portfolioData.contact.socialLinks.map(link => `
      <a href="${link.url}" class="social-link">
        <img src="${link.icon}" alt="${link.platform}">
      </a>
    `).join('')}
  </div>
</div>
`;
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top <= windowHeight &&
        rect.bottom >= 0 &&
        rect.left <= windowWidth &&
        rect.right >= 0
    );
}

// Function to update active nav item
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    let currentSectionIndex = 0;
    const offset = window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        if (rect.top <= offset && rect.bottom > offset) {
            currentSectionIndex = i;
            break;
        }
    }

    navItems.forEach((item, index) => {
        const link = item.querySelector('.nav-link');
        if (index === currentSectionIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


// Call the render functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderHero();
    renderSkills();
    renderProjects();
    renderExperience();
    renderContact();
    updateActiveNavItem();
});
// Function to check if an element is in viewport
document.addEventListener('scroll', updateActiveNavItem);