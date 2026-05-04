// Site Content Data
// All text content for the portfolio site - makes it reactive and easy to update

const siteContent = {
  hero: {
    title: "Jacob Stanaford's Portfolio",
    intro: {
      default: [
        "Hello, my name is Jacob Stanaford! Welcome to my portfolio website.",
        "I am beyond excited to share my experiences and background on this site!",
        "Thank you for stopping by and enjoy!"
      ]
    },
    quote: {
      text: [
        "A programming language is for thinking about programs,",
        "not for expressing programs you've already thought of.",
        "It should be a pencil, not a pen."
      ],
      author: "-Paul Graham"
    }
  },
  
  navigation: {
    about: "About",
    languagesTools: "Languages & Tools",
    experience: "Experience",
    education: "Education",
    github: "GitHub",
    aboutMe: "About Me",
    contact: "Contact",
    gallery: "Gallery"
  },
  
  languagesTools: {
    title: "Programming Languages & Tools",
    description: {
      default: "These are the technologies I have the most professional experience with, ranging from backend scripting and databases to modern programming languages and machine learning. Each of these tools has played a significant role in my journey as a developer."
    }
  },
  
  experience: {
    title: "Professional Experience",
    ironmark: {
      company: "Ironmark",
      period: "February 2026 – Present",
      role: "Software Engineer",
      description: "Full-stack engineer supporting two acquired companies - American Marketing and Deliver Media - across PHP and .NET environments. Primary focus on building and maintaining PHP marketing automation platforms, with secondary responsibility for .NET enterprise applications.",
      contributions: {
        title: "Key Contributions:",
        items: [
          {
            title: "PHP Marketing Automation:",
            text: "Building and maintaining the AMMS platform - a high-throughput, multi-tenant marketing automation system on PHP 8.4 and OpenSwoole async coroutines, with queue-driven workflows, multi-client isolation, and integrations with popular third-party business development APIs"
          },
          {
            title: ".NET Enterprise Systems:",
            text: "Supporting and enhancing Deliver Media's .NET application suite including a core back-office production system, RESTful API layer, client-facing analytics dashboard (.NET 10), and campaign management tools across .NET Framework 4.8 and modern .NET"
          },
          {
            title: "API & Integration Development:",
            text: "Designing and maintaining RESTful APIs and integrations across both ecosystems, including async task servers, multi-tenant database routing, and reporting and business intelligence tooling"
          }
        ]
      },
      technologies: "Technologies: PHP 8.4, OpenSwoole, MySQL, PostgreSQL, C#, .NET Framework 4.8, .NET 10, ASP.NET MVC/Core, SQL Server, Entity Framework, REST APIs, AWS"
    },
    ygsGroup: {
      company: "YGS Group",
      period: "June 2025 – February 2026",
      role: "Senior Software Engineer",
      description: "Led development on enterprise e-commerce platforms, automation systems, and API services across a diverse technology stack. Projects spanned Laravel/PHP, .NET/ASP.NET, Node.js/TypeScript, and Python applications.",
      contributions: {
        title: "Key Contributions:",
        items: [
          {
            title: "E-Commerce Platforms:",
            text: "Built and maintained multiple Laravel/Lunar PHP storefronts with payment processing, shipping integrations, and custom template systems"
          },
          {
            title: "API Services:",
            text: "Created TypeScript/Express.js microservices including FedEx shipping API wrapper and Cloudflare bot verification service"
          },
          {
            title: "Web Scraping:",
            text: "Developed and maintained advanced Python/Scrapy platforms with machine learning capabilities for data collection and analysis"
          }
        ]
      },
      technologies: "Technologies: PHP 8.1+, Laravel 10.x, Lunar, .NET/ASP.NET, Node.js, TypeScript, Python, Docker, Filament, Livewire, Meilisearch, and more"
    },
    webfx: {
      company: "WebFX",
      period: "March 2020 – May 2025",
      role: "Senior Developer",
      description: "Progressed from Jr. Web Developer to Senior Developer over 5 years. Led teams, architected solutions, and delivered high-impact web projects for a diverse client base."
    },
    prosperIt1: {
      company: "Prosper IT Consulting – Internship #1",
      period: "Python/Django Web Scraping App | Sept 2019 - Oct 2019",
      description: "Completed a full sprint to develop a Python Django web application dedicated to advanced web scraping, data collection, and reporting."
    },
    prosperIt2: {
      company: "Prosper IT Consulting – Internship #2",
      period: "C# ASP.NET Web Application | Nov 2019 - Dec 2019",
      description: "Led a sprint focused on building a robust web application using the C# ASP.NET tech stack, emphasizing scalable architecture and modern UI/UX."
    }
  },
  
  education: {
    title: "Education Experience",
    stevens: {
      school: "Stevens Institute of Technology",
      degree: "Master of Science in Computer Science",
      programLink: "https://www.stevens.edu/program/computer-science-masters",
      programText: "Program Details",
      period: "Fall 2023 – Present",
      status: "(currently enrolled, 4.0 GPA)",
      description: "The Stevens MSCS program is designed to align with the latest industry trends, preparing graduates for success in areas such as AI, machine learning, business intelligence, analytics, and advanced software development. My coursework emphasized technical proficiency in enterprise software design, mobile and cloud computing, agile methods, and algorithm design.",
      focusAreas: [
        {
          title: "AI & Machine Learning:",
          items: "Mathematical Foundations, Machine Learning Fundamentals, Deep Learning, Natural Language Processing"
        },
        {
          title: "Business Intelligence & Analytics:",
          items: "Business Analytics, Applied Analytics, Augmented Intelligence, Big Data Technologies, Web Mining"
        },
        {
          title: "Software Development:",
          items: "Mobile Systems, Web Programming, Object-Oriented Design, Enterprise & Cloud Computing, Agile Methods, Database Management"
        }
      ],
      focusDescription: "My focus on AI and machine learning includes hands-on experience with Python, TensorFlow, Keras, and modern NLP techniques, as well as practical projects in deep learning and data-driven applications. This education has provided a strong foundation for tackling real-world challenges in both research and industry."
    },
    techAcademy: {
      school: "The Tech Academy",
      degree: "Software Developer Bootcamp",
      programLink: "https://www.learncodinganywhere.com/codingbootcamps",
      programText: "Program Details",
      period: "15-week Intensive Bootcamp",
      descriptionTitle: "What I learned from the program:",
      items: [
        "Full-stack web and software development: front-end & back-end",
        "Core languages: Python, JavaScript, HTML, CSS, SQL",
        "Frameworks: Django, Bootstrap",
        "Version control with Git & GitHub",
        "Agile, Scrum, and DevOps methodologies",
        "Capstone project for real-world experience"
      ],
      description: "The bootcamp emphasized hands-on, project-based learning, which helped me become job-ready and confident in my ability to contribute to modern software teams. I also benefited from job placement support and career coaching, which gave me a strong start in the tech industry."
    },
    messiahCollege: {
      school: "Messiah College, PA",
      degree: "Bachelor of Science in Music Education",
      period: "August 2015 – May 2019",
      items: [
        "Music Education K-12, concentration in vocal studies and piano",
        "Certified Educator in the state of Pennsylvania",
        "GPA: 3.55 (cum laude)"
      ]
    }
  },
  
  github: {
    title: "Interested in seeing my projects?",
    description: "Click below for a link to my GitHub, where you can explore my portfolio, code samples, and open source contributions.",
    buttonText: "Visit my GitHub",
    url: "https://github.com/jstanaford"
  },
  
  aboutMe: {
    title: "ABOUT ME",
    paragraphs: [
      "With over six years of dedicated education and hands-on experience, I am a passionate software developer who thrives on building and maintaining impactful enterprise systems. My journey has taken me from earning a Bachelor's in Music Education to completing an intensive software development bootcamp, and now pursuing a Master's in Computer Science at Stevens Institute of Technology.",
      "I currently work as a Software Engineer at Ironmark, where I build and maintain marketing automation platforms and enterprise back-office applications across PHP and .NET environments. My professional experience spans modern PHP development (Laravel, OpenSwoole async systems), C#/.NET enterprise applications, RESTful API design, and relational database work across MySQL, PostgreSQL, and SQL Server.",
      "I am committed to continuous learning and delivering high-quality software. Whether modernizing legacy systems, designing async microservice architectures, or collaborating across technology stacks, I bring technical depth, adaptability, and a drive to solve real business problems."
    ],
    resumeText: "View My Resume",
    resumeUrl: "img/resource/JacobS_Resume.pdf"
  },
  
  contact: {
    title: "Contact",
    description: "Interested in connecting, collaborating, or discussing career opportunities? Reach out to me directly!",
    linkedin: {
      text: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/jacobstanaford/"
    },
    email: {
      text: "Email Me",
      url: "mailto:jacobstanafordprofessional@gmail.com?subject=Career%20Inquiry"
    },
    closing: "I look forward to hearing from you!"
  },
  
  threeVisualization: {
    title: "Technology Ecosystem",
    description: "This helix represents some of my favorite technology stacks and what I love about them. Each technology forms a base pair in the DNA of my development work, connected by rungs that show how these tools come together to create something greater than the sum of their parts. Click on any technology to dive deeper into why I'm passionate about it.",
    interactionHint: " • Click any technology node to see why I love it • "
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.siteContent = siteContent;
}

// Also support CommonJS if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteContent;
}
