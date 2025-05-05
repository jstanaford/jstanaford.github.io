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
            image: "",
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
        },
        project3: {
            title: "Complyt WooCommerce Integration",
            image: "img/gallery/complyt/admin.png",
            description: "A WordPress plugin that maps WooCommerce orders to Complyt customers for tax compliance purposes. Based on the Complyt API: https://docs.complyt.io/doc-557000",
            github: "https://github.com/jstanaford/wp-complyt-integration",
            technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "REST API", "Tax Compliance"],
            features: [
                "Automatic tax code mapping by product SKU",
                "Integration with Complyt's tax compliance API",
                "Admin interface for managing tax settings",
                "Detailed logging for troubleshooting"
            ],
            requirements: [
                "WordPress 5.0 or higher",
                "WooCommerce 4.0 or higher",
                "PHP 7.4 or higher"
            ],
            installation: [
                "Upload the plugin files to the `/wp-content/plugins/wp-complyt-integration` directory",
                "Activate the plugin through the 'Plugins' screen in WordPress",
                "Configure the plugin settings under the Complyt menu in WordPress admin"
            ],
            hasSlider: false,
            hasRequirements: true,
            hasInstallation: true
        },
        project4: {
            title: "WP Bandit Equipment Plugin",
            image: "", // No image for this project
            description: "A WordPress plugin that integrates with the Bandit Chippers API to import and display equipment data from banditchippers.com.",
            github: "https://github.com/jstanaford/wp-bandit",
            technologies: ["WordPress", "PHP", "JavaScript", "REST API", "Custom Post Types", "Custom Taxonomies"],
            features: [
                "Import Bandit equipment data directly into WordPress",
                "Custom post type for Bandit equipment",
                "Custom taxonomy for equipment families",
                "Admin interface for selecting which equipment to import",
                "Scheduling options for automated imports",
                "Support for displaying equipment images, specifications, and videos",
                "Customizable display options"
            ],
            apiEndpoints: [
                "Base URL: `banditchippers.com/wp-json/wp/v2/`",
                "Individual items: `/project/{item_id}`",
                "List of items by category: `/project?category={category_id}`",
                "Available categories: `/project_category`",
                "Media items: `/media/{media_id}`"
            ],
            equipmentCategories: [
                { id: 7, name: "Hand-Fed Chippers" },
                { id: 8, name: "Stump Grinders" },
                { id: 9, name: "Skid Steer Attachments" },
                { id: 10, name: "Horizontal Grinders" },
                { id: 11, name: "Whole Tree Chippers" },
                { id: 12, name: "Track Carriers" },
                { id: 13, name: "Slow-Speed Shredders" }
            ],
            usage: {
                equipmentSelection: [
                    "Navigate to the 'Bandit Importer' > 'Inventory Picklist' in the WordPress admin",
                    "Browse available equipment by category",
                    "Select the equipment you want to import",
                    "Save your selections"
                ],
                runningImporter: [
                    "Navigate to the 'Bandit Importer' > 'Importer' tab",
                    "Click the 'Run Import' button to start the import process",
                    "The progress bar will display the current status of the import"
                ],
                displayingEquipment: [
                    "Create archive pages for all equipment",
                    "Filter equipment by family",
                    "Display individual equipment details",
                    "Customize the display using WordPress templates"
                ]
            },
            customization: {
                filters: [
                    "`wp_bandit_post_name` - Modify the post type slug",
                    "`wp_bandit_tax_name` - Modify the taxonomy slug",
                    "`wp_bandit_top_level_parent` - Set a parent term for all equipment families",
                    "`wp_bandit_post_type_args` - Modify post type registration arguments",
                    "`wp_bandit_tax_args` - Modify taxonomy registration arguments"
                ],
                templates: [
                    "`single-bandit_equipment.php` - Template for single equipment pages",
                    "`archive-bandit_equipment.php` - Template for equipment archives",
                    "`taxonomy-bandit_equipment_family.php` - Template for family archives"
                ]
            },
            requirements: [
                "WordPress 5.0 or higher",
                "PHP 7.0 or higher",
                "Active connection to the internet"
            ],
            installation: [
                "Upload the `wp-bandit-plugin` folder to the `/wp-content/plugins/` directory",
                "Activate the plugin through the 'Plugins' menu in WordPress",
                "Go to 'Bandit Importer' in the WordPress admin menu",
                "Select the equipment you want to import",
                "Run the importer"
            ],
            hasSlider: false,
            hasRequirements: true,
            hasInstallation: true,
            hasApiEndpoints: true,
            hasEquipmentCategories: true,
            hasUsage: true,
            hasCustomization: true
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
        const imageContainer = modalImage.parentElement;
        
        if (project.hasSlider) {
            imageSlider.classList.remove('hidden');
            modalImage.classList.add('hidden');
            currentSlide = 0; // Reset slider to first image
            updateSlider();
            imageContainer.classList.remove('hidden');
        } else if (project.image) {
            imageSlider.classList.add('hidden');
            modalImage.classList.remove('hidden');
            modalImage.src = project.image;
            imageContainer.classList.remove('hidden');
        } else {
            // No image or slider
            imageSlider.classList.add('hidden');
            modalImage.classList.add('hidden');
            imageContainer.classList.add('hidden');
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
        
        // Show or hide requirements section
        const requirementsSection = document.getElementById('requirements-section');
        const requirementsContainer = document.getElementById('modal-requirements');
        
        if (project.hasRequirements) {
            requirementsSection.classList.remove('hidden');
            requirementsContainer.innerHTML = '';
            project.requirements.forEach(requirement => {
                const listItem = document.createElement('li');
                listItem.textContent = requirement;
                requirementsContainer.appendChild(listItem);
            });
        } else {
            requirementsSection.classList.add('hidden');
        }
        
        // Show or hide installation section
        const installationSection = document.getElementById('installation-section');
        const installationContainer = document.getElementById('modal-installation');
        
        if (project.hasInstallation) {
            installationSection.classList.remove('hidden');
            installationContainer.innerHTML = '';
            project.installation.forEach((step, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = step;
                installationContainer.appendChild(listItem);
            });
        } else {
            installationSection.classList.add('hidden');
        }
        
        // Show or hide API endpoints section (for WP Bandit)
        const apiEndpointsSection = document.getElementById('api-endpoints-section');
        const apiEndpointsContainer = document.getElementById('modal-api-endpoints');
        
        if (project.hasApiEndpoints) {
            apiEndpointsSection.classList.remove('hidden');
            apiEndpointsContainer.innerHTML = '';
            project.apiEndpoints.forEach(endpoint => {
                const listItem = document.createElement('li');
                listItem.textContent = endpoint;
                apiEndpointsContainer.appendChild(listItem);
            });
        } else {
            apiEndpointsSection.classList.add('hidden');
        }
        
        // Show or hide equipment categories section (for WP Bandit)
        const equipmentCategoriesSection = document.getElementById('equipment-categories-section');
        const equipmentCategoriesContainer = document.getElementById('modal-equipment-categories');
        
        if (project.hasEquipmentCategories) {
            equipmentCategoriesSection.classList.remove('hidden');
            equipmentCategoriesContainer.innerHTML = '';
            project.equipmentCategories.forEach(category => {
                const row = document.createElement('tr');
                
                const idCell = document.createElement('td');
                idCell.className = 'px-4 py-2 border-b border-gray-700';
                idCell.textContent = category.id;
                
                const nameCell = document.createElement('td');
                nameCell.className = 'px-4 py-2 border-b border-gray-700';
                nameCell.textContent = category.name;
                
                row.appendChild(idCell);
                row.appendChild(nameCell);
                
                equipmentCategoriesContainer.appendChild(row);
            });
        } else {
            equipmentCategoriesSection.classList.add('hidden');
        }
        
        // Show or hide usage section (for WP Bandit)
        const usageSection = document.getElementById('usage-section');
        const equipmentSelectionContainer = document.getElementById('modal-equipment-selection');
        const runningImporterContainer = document.getElementById('modal-running-importer');
        const displayingEquipmentContainer = document.getElementById('modal-displaying-equipment');
        
        if (project.hasUsage) {
            usageSection.classList.remove('hidden');
            
            // Equipment Selection
            equipmentSelectionContainer.innerHTML = '';
            project.usage.equipmentSelection.forEach(step => {
                const listItem = document.createElement('li');
                listItem.textContent = step;
                equipmentSelectionContainer.appendChild(listItem);
            });
            
            // Running Importer
            runningImporterContainer.innerHTML = '';
            project.usage.runningImporter.forEach(step => {
                const listItem = document.createElement('li');
                listItem.textContent = step;
                runningImporterContainer.appendChild(listItem);
            });
            
            // Displaying Equipment
            displayingEquipmentContainer.innerHTML = '';
            project.usage.displayingEquipment.forEach(option => {
                const listItem = document.createElement('li');
                listItem.textContent = option;
                displayingEquipmentContainer.appendChild(listItem);
            });
        } else {
            usageSection.classList.add('hidden');
        }
        
        // Show or hide customization section (for WP Bandit)
        const customizationSection = document.getElementById('customization-section');
        const filtersContainer = document.getElementById('modal-filters');
        const templatesContainer = document.getElementById('modal-templates');
        
        if (project.hasCustomization) {
            customizationSection.classList.remove('hidden');
            
            // Filters
            filtersContainer.innerHTML = '';
            project.customization.filters.forEach(filter => {
                const listItem = document.createElement('li');
                listItem.textContent = filter;
                filtersContainer.appendChild(listItem);
            });
            
            // Templates
            templatesContainer.innerHTML = '';
            project.customization.templates.forEach(template => {
                const listItem = document.createElement('li');
                listItem.textContent = template;
                templatesContainer.appendChild(listItem);
            });
        } else {
            customizationSection.classList.add('hidden');
        }
        
        // Show or hide code samples section for Python project
        const codeSamplesSection = document.getElementById('code-samples');
        if (projectId === 'project2') { // Python MyMoveApp
            codeSamplesSection.classList.remove('hidden');
        } else {
            codeSamplesSection.classList.add('hidden');
        }
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
