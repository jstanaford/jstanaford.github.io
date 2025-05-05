document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projectData = {
        project1: {
            title: "WebTechProfiler",
            image: "img/gallery/webdev/home.png", // This won't be used directly as we have a slider
            description: "A modern web application built with ASP.NET Core 8.0 and TailwindCSS for profiling and analyzing web technologies. This project provides a robust development environment using Docker containers for consistent deployment across different platforms.",
            github: "https://github.com/jstanaford/webdev-tools",
            technologies: [
                "ASP.NET Core 8.0", 
                "TailwindCSS", 
                "Docker", 
                "Docker Compose", 
                "Swagger/OpenAPI", 
                "npm", 
                ".NET SDK", 
                "Node.js"
            ],
            features: [
                "ASP.NET Core 8.0 Web Application",
                "Modern UI with TailwindCSS",
                "Docker containerization",
                "Swagger/OpenAPI documentation",
                "Development environment management scripts",
                "Integrated development workflows",
                "Responsive web design",
                "Cross-platform compatibility"
            ],
            hasSlider: true // Flag to indicate this project uses the image slider
        },
        project2: {
            title: "Python MyMoveApp",
            image: "img/projects/python-mymoveapp.png",
            description: "An application I created during my time at the Tech Academy. This app allows the user to interface on a GUI and move files from one directory to another. Specifically, this app is designed to ONLY move files with a '.txt' ending. In this project I got the opportunity to work with creating a GUI window and using Tkinter.",
            github: "https://github.com/jstanaford/Python_MyMoveApp",
            technologies: ["Python", "Tkinter", "SQLite", "GUI Development", "File Operations"],
            features: [
                "GUI interface built with Tkinter",
                "File selection with directory browser",
                "Selective file moving ('.txt' files only)",
                "SQLite database integration",
                "File metadata tracking",
                "Modular code organization with separate files",
                "Error handling with user feedback"
            ],
            hasSlider: false
        }
    };

    // Update desktop time
    function updateDesktopTime() {
        const now = new Date();
        const timeElement = document.getElementById('desktop-time');
        timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // Initialize and update time every minute
    updateDesktopTime();
    setInterval(updateDesktopTime, 60000);

    // Project modal functionality
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    // Image slider functionality
    let currentSlide = 0;
    const totalSlides = 5; // Number of images in our WebDev Tools slider
    
    function updateSlider() {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active', 'bg-white');
                dot.classList.remove('bg-white/50');
            } else {
                dot.classList.remove('active', 'bg-white');
                dot.classList.add('bg-white/50');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    // Add event listeners for slider controls
    function initSliderControls() {
        document.querySelector('.slider-next').addEventListener('click', nextSlide);
        document.querySelector('.slider-prev').addEventListener('click', prevSlide);
        
        // Dot navigation
        document.querySelectorAll('.slider-dot').forEach(dot => {
            dot.addEventListener('click', function() {
                currentSlide = parseInt(this.getAttribute('data-index'));
                updateSlider();
            });
        });
    }
    
    // Initialize slider controls when DOM is loaded
    initSliderControls();
    
    // Populate modal with project data
    function populateProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-github').href = project.github;
        
        // Handle image content based on whether project has a slider or not
        const imageSlider = document.getElementById('image-slider');
        const modalImage = document.getElementById('modal-image');
        
        if (project.hasSlider) {
            imageSlider.classList.remove('hidden');
            modalImage.classList.add('hidden');
            currentSlide = 0; // Reset slider to first image
            updateSlider();
        } else {
            imageSlider.classList.add('hidden');
            modalImage.classList.remove('hidden');
            modalImage.src = project.image;
        }
        
        // Add technology badges
        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const badge = document.createElement('span');
            badge.className = 'tech-badge';
            badge.textContent = tech;
            techContainer.appendChild(badge);
        });
        
        // Add features
        const featuresContainer = document.getElementById('modal-features');
        featuresContainer.innerHTML = '';
        project.features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            featuresContainer.appendChild(listItem);
        });
    }
    
    // Open modal when clicking on a desktop icon
    desktopIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            populateProjectModal(projectId);
            projectModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', function() {
        projectModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Add floating animation to some desktop icons
    const randomIcons = Array.from(desktopIcons).sort(() => 0.5 - Math.random()).slice(0, 2);
    randomIcons.forEach(icon => {
        icon.classList.add('desktop-float');
    });
});
