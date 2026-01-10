document.addEventListener('DOMContentLoaded', function() {
    // Slider global variables
    let currentSlideIndex = 0;
    let needsSliderReinit = true;
    const images = [
        "img/gallery/webdev/home.png", 
        "img/gallery/webdev/technology_profiler.png", 
        "img/gallery/webdev/port_scanner.png", 
        "img/gallery/webdev/host_viewer.png", 
        "img/gallery/webdev/domain_profiler.png"
    ];
    
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
        },
        project5: {
            title: "macOS Screenshot Tool",
            image: "img/gallery/screenshot_tool/settings.png", 
            description: "A desktop application built with Electron.js that enables capturing screenshots by selecting a specific area of the screen through a drag-to-select interface.",
            github: "https://github.com/jstanaford/electron-local-screenshot-tool",
            technologies: ["Electron.js", "JavaScript", "HTML", "CSS", "Node.js", "REST API"],
            features: [
                "Screen Capture: Select any area of your screen with a drag-to-select interface",
                "Visual Feedback: Transparent overlay with crosshair cursor and real-time dimensions display",
                "Flexible Output Options: Save images to a configurable directory, copy directly to clipboard, or upload to a remote server",
                "Toast Notifications: Receive confirmation when screenshots are saved or uploaded",
                "System Integration: Access via system tray icon for quick captures",
                "Configurable Settings: Customize the application to your workflow"
            ],
            installation: [
                "Clone this repository",
                "Install dependencies: `npm install`",
                "Start the application: `npm start`"
            ],
            screenshotWorkflow: [
                "Click on the system tray icon (or use the \"Capture Screenshot\" button in settings)",
                "A transparent overlay will appear with a crosshair cursor",
                "Click and drag to select the area you want to capture",
                "Release the mouse button to display the capture controls",
                "Click \"Capture\" to take the screenshot or \"Cancel\" to abort",
                "The screenshot will be processed according to your settings"
            ],
            keyboardShortcuts: [
                "Press `ESC` while selecting to cancel the capture",
                "Press `Enter` after selecting an area to capture the screenshot"
            ],
            settings: {
                localStorage: [
                    "Copy to clipboard: Automatically copy screenshots to the clipboard",
                    "Save to file: Save screenshots as image files",
                    "Save location: Choose where to save your screenshots"
                ],
                remoteUpload: [
                    "Enable remote upload: Send screenshots to a remote server",
                    "Endpoint URL: Set the API endpoint for your remote server",
                    "Authentication Token: Provide authentication for the remote API"
                ]
            },
            toastNotifications: [
                "Confirmation message",
                "Link to open the save location (if saved locally)",
                "Link to view the image online (if uploaded remotely)"
            ],
            development: {
                runDev: "To run the application in development mode: `npm run dev`",
                projectStructure: [
                    "`src/main.js` - Main Electron process",
                    "`src/renderer/index.html` - Settings window",
                    "`src/renderer/capture.html` - Screenshot selection overlay",
                    "`src/renderer/toast.html` - Notification component"
                ]
            },
            remoteUploadApi: {
                endpoint: "POST https://your-endpoint-url/wp-json/wpms/v1/upload",
                header: "x-wpms-auth: your-auth-token",
                body: "multipart/form-data with 'file' field containing the image",
                response: "The server is expected to respond with a JSON object containing at least a `url` field pointing to where the image can be viewed online."
            },
            hasSlider: false,
            hasInstallation: true,
            hasScreenshotWorkflow: true,
            hasKeyboardShortcuts: true,
            hasSettings: true,
            hasToastNotifications: true,
            hasDevelopment: true,
            hasRemoteUploadApi: true
        },
        project6: {
            title: "Laravel DevOps Monorepo",
            image: "",
            description: "A complete Laravel development and deployment toolkit that seamlessly bridges local development, CI/CD, and remote server management. This monorepo combines local development tools, remote deployment utilities, and GitHub Actions workflows to create a seamless development-to-production workflow.",
            github: "https://github.com/jstanaford/laravel-devops",
            technologies: [
                "Bash", 
                "Shell Scripting", 
                "Docker", 
                "Docker Compose", 
                "GitHub Actions", 
                "CI/CD", 
                "Laravel", 
                "YAML",
                "SSH",
                "Automated Deployment"
            ],
            features: [
                "Local Development Tools: Docker-based environment management with intelligent port allocation",
                "Remote Deployment Tools: Release-based deployment strategy with zero-downtime capabilities",
                "CI/CD Integration: GitHub Actions workflows for automated deployments",
                "Intelligent Configuration: Single deploy.yml file controls both local and remote behavior",
                "Database Management: Automated backups and syncing between environments",
                "Frontend Development: Integrated Vite dev server with hot-reload",
                "Interactive Menus: User-friendly CLI interface for all operations",
                "Auto-Update System: Automatic version checking and updates",
                "Release Management: Numbered releases with automatic cleanup and rollback support",
                "Permission Management: Automated file permission fixes",
                "Shared Files: Automatic symlink management for persistent files"
            ],
            requirements: [
                "Docker and Docker Compose (for local development)",
                "Bash 4.0+",
                "curl and unzip (for installation)",
                "Git (for repository detection)",
                "SSH access (for remote deployments)",
                "PHP 8.1+ with Composer (for Laravel projects)",
                "Node.js and npm (for frontend asset building)"
            ],
            installation: [
                "Clone the repository: git clone https://github.com/jstanaford/laravel-devops.git",
                "For local tools: curl -L https://YOUR_DEPLOYMENT_DOMAIN/local/install.sh | bash",
                "For remote tools: Download and extract to your deployment server",
                "Configure deploy.yml with your server settings",
                "Set up GitHub Secrets for CI/CD automation"
            ],
            hasSlider: false,
            hasRequirements: true,
            hasInstallation: true
        }
    };

    // Update desktop time
    function updateDesktopTime() {
        const now = new Date();
        const timeElement = document.getElementById('desktop-time');
        if (timeElement) {
            timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
    }
    
    // Initialize and update time every minute
    updateDesktopTime();
    setInterval(updateDesktopTime, 60000);

    // Main desktop and modal functionality
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalCloseButton = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Image slider functionality
    let currentSlide = 0;
    const totalSlides = 5; // Number of images in our WebDev Tools slider
    
    function updateSlider() {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        if (!sliderWrapper) return;
        
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
        const nextButton = document.querySelector('.slider-next');
        const prevButton = document.querySelector('.slider-prev');
        const dots = document.querySelectorAll('.slider-dot');
        
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }
        
        if (dots.length > 0) {
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentSlide = parseInt(this.getAttribute('data-index'));
                    updateSlider();
                });
            });
        }
    }
    
    // Only initialize slider controls if we're on a page that has them
    if (document.querySelector('.slider-next') || document.querySelector('.slider-prev')) {
        initSliderControls();
    }
    
    // Function to populate modal with project data
    function populateProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        console.log("Opening project:", projectId, project.title);
        
        // Set modal title
        document.getElementById('modal-title').textContent = project.title;
        
        // Set GitHub link
        document.getElementById('modal-github').href = project.github;
        
        // Set description
        document.getElementById('modal-description').textContent = project.description;
        
        // Set technologies
        const techContainer = document.getElementById('modal-technologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techSpan = document.createElement('span');
            techSpan.className = 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2';
            techSpan.textContent = tech;
            techContainer.appendChild(techSpan);
        });
        
        // Set features
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'mb-1';
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Handle slider if present
        const sliderContainer = document.getElementById('image-slider-container');
        const sliderImages = document.querySelector('.slider-images');
        
        // First, clear any existing content in the slider
        if (sliderImages) {
            sliderImages.innerHTML = '';
            sliderImages.style.transform = 'translateX(0)';
        }
        
        if (project.hasSlider) {
            sliderContainer.classList.remove('hidden');
            
            // Reset the slider for WebDev Tools (project1)
            if (projectId === 'project1') {
                console.log("Initializing WebDev slider, needs reinit:", needsSliderReinit);
                
                // Reset current slide index
                currentSlideIndex = 0;
                
                // Make sure the slider images container is visible and properly styled
                if (sliderImages) {
                    // Remove any lingering styles first if needed
                    if (needsSliderReinit) {
                        sliderImages.removeAttribute('style');
                    }
                    
                    // Set required styles
                    sliderImages.style.display = 'flex';
                    sliderImages.style.transition = 'transform 0.5s ease';
                    sliderImages.style.width = '100%';
                    sliderImages.style.height = '100%';
                }
                
                // Force re-creation of all images
                sliderImages.innerHTML = ''; // Ensure it's completely empty
                console.log("Adding", images.length, "images to slider");
                
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = "WebDev Tools Screenshot";
                    img.className = "h-full w-auto flex-shrink-0 object-contain mx-auto";
                    img.style.minWidth = '100%';
                    sliderImages.appendChild(img);
                });
                
                // Create indicators
                const indicators = document.getElementById('slide-indicators');
                if (indicators) {
                    indicators.innerHTML = '';
                    
                    images.forEach((_, index) => {
                        const indicator = document.createElement('button');
                        indicator.className = `w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'}`;
                        indicator.addEventListener('click', () => goToSlide(index));
                        indicators.appendChild(indicator);
                    });
                }
                
                // Show slider controls
                const prevButton = document.getElementById('prev-slide');
                const nextButton = document.getElementById('next-slide');
                
                if (prevButton) prevButton.classList.remove('hidden');
                if (nextButton) nextButton.classList.remove('hidden');
                if (indicators) indicators.classList.remove('hidden');
                
                // Reset to first slide
                currentSlideIndex = 0;
                updateNewSlider();
                
                // Reset the flag since we've reinitialized
                needsSliderReinit = false;
            }
        } else if (project.image) {
            // Display a single image instead of the slider
            sliderContainer.classList.remove('hidden');
            
            console.log("Setting up single image:", project.image);
            
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = project.title + " Screenshot";
            img.className = "h-full w-auto object-contain mx-auto";
            sliderImages.appendChild(img);
            
            // Hide slider controls when showing a single image
            const prevButton = document.getElementById('prev-slide');
            const nextButton = document.getElementById('next-slide');
            const indicators = document.getElementById('slide-indicators');
            
            if (prevButton) prevButton.classList.add('hidden');
            if (nextButton) nextButton.classList.add('hidden');
            if (indicators) indicators.classList.add('hidden');
        } else {
            sliderContainer.classList.add('hidden');
        }
        
        // Handle requirements if present
        const requirementsSection = document.getElementById('requirements-section');
        if (project.hasRequirements) {
            requirementsSection.classList.remove('hidden');
            const requirementsList = document.getElementById('modal-requirements');
            requirementsList.innerHTML = '';
            project.requirements.forEach(req => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = req;
                requirementsList.appendChild(li);
            });
        } else {
            requirementsSection.classList.add('hidden');
        }
        
        // Handle installation if present
        const installationSection = document.getElementById('installation-section');
        if (project.hasInstallation) {
            installationSection.classList.remove('hidden');
            const installationList = document.getElementById('modal-installation');
            installationList.innerHTML = '';
            project.installation.forEach(step => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = step;
                installationList.appendChild(li);
            });
        } else {
            installationSection.classList.add('hidden');
        }
        
        // Handle API Endpoints if present
        const apiEndpointsSection = document.getElementById('api-endpoints-section');
        if (project.hasApiEndpoints) {
            apiEndpointsSection.classList.remove('hidden');
            const apiEndpointsList = document.getElementById('modal-api-endpoints');
            apiEndpointsList.innerHTML = '';
            project.apiEndpoints.forEach(endpoint => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = endpoint;
                apiEndpointsList.appendChild(li);
            });
        } else {
            apiEndpointsSection.classList.add('hidden');
        }
        
        // Handle Equipment Categories if present
        const equipmentCategoriesSection = document.getElementById('equipment-categories-section');
        if (project.hasEquipmentCategories) {
            equipmentCategoriesSection.classList.remove('hidden');
            const categoriesTable = document.getElementById('modal-equipment-categories');
            categoriesTable.innerHTML = '';
            
            // Create table header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const idHeader = document.createElement('th');
            idHeader.className = 'border px-4 py-2';
            idHeader.textContent = 'ID';
            const nameHeader = document.createElement('th');
            nameHeader.className = 'border px-4 py-2';
            nameHeader.textContent = 'Category Name';
            
            headerRow.appendChild(idHeader);
            headerRow.appendChild(nameHeader);
            thead.appendChild(headerRow);
            categoriesTable.appendChild(thead);
            
            // Create table body
            const tbody = document.createElement('tbody');
            project.equipmentCategories.forEach(category => {
                const row = document.createElement('tr');
                const idCell = document.createElement('td');
                idCell.className = 'border px-4 py-2';
                idCell.textContent = category.id;
                const nameCell = document.createElement('td');
                nameCell.className = 'border px-4 py-2';
                nameCell.textContent = category.name;
                
                row.appendChild(idCell);
                row.appendChild(nameCell);
                tbody.appendChild(row);
            });
            categoriesTable.appendChild(tbody);
        } else {
            equipmentCategoriesSection.classList.add('hidden');
        }
        
        // Handle Usage if present
        const usageSection = document.getElementById('usage-section');
        if (project.hasUsage) {
            usageSection.classList.remove('hidden');
            
            // Equipment Selection
            const selectionSection = document.getElementById('equipment-selection-section');
            const selectionList = document.getElementById('modal-equipment-selection');
            selectionList.innerHTML = '';
            project.usage.equipmentSelection.forEach(step => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = step;
                selectionList.appendChild(li);
            });
            
            // Running the Importer
            const importerSection = document.getElementById('importer-section');
            const importerList = document.getElementById('modal-importer');
            importerList.innerHTML = '';
            project.usage.runningImporter.forEach(step => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = step;
                importerList.appendChild(li);
            });
            
            // Displaying Equipment
            const displaySection = document.getElementById('display-section');
            const displayList = document.getElementById('modal-display');
            displayList.innerHTML = '';
            project.usage.displayingEquipment.forEach(step => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = step;
                displayList.appendChild(li);
            });
        } else {
            usageSection.classList.add('hidden');
        }
        
        // Handle Customization if present
        const customizationSection = document.getElementById('customization-section');
        if (project.hasCustomization) {
            customizationSection.classList.remove('hidden');
            
            // Filters
            const filtersSection = document.getElementById('filters-section');
            const filtersList = document.getElementById('modal-filters');
            filtersList.innerHTML = '';
            project.customization.filters.forEach(filter => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = filter;
                filtersList.appendChild(li);
            });
            
            // Templates
            const templatesSection = document.getElementById('templates-section');
            const templatesList = document.getElementById('modal-templates');
            templatesList.innerHTML = '';
            project.customization.templates.forEach(template => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = template;
                templatesList.appendChild(li);
            });
        } else {
            customizationSection.classList.add('hidden');
        }

        // Handle Screenshot Workflow if present
        const screenshotWorkflowSection = document.getElementById('screenshot-workflow-section');
        if (project.hasScreenshotWorkflow) {
            screenshotWorkflowSection.classList.remove('hidden');
            const workflowList = document.getElementById('modal-screenshot-workflow');
            workflowList.innerHTML = '';
            project.screenshotWorkflow.forEach(step => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = step;
                workflowList.appendChild(li);
            });
        } else {
            screenshotWorkflowSection.classList.add('hidden');
        }

        // Handle Keyboard Shortcuts if present
        const keyboardShortcutsSection = document.getElementById('keyboard-shortcuts-section');
        if (project.hasKeyboardShortcuts) {
            keyboardShortcutsSection.classList.remove('hidden');
            const shortcutsList = document.getElementById('modal-keyboard-shortcuts');
            shortcutsList.innerHTML = '';
            project.keyboardShortcuts.forEach(shortcut => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = shortcut;
                shortcutsList.appendChild(li);
            });
        } else {
            keyboardShortcutsSection.classList.add('hidden');
        }

        // Handle Settings if present
        const settingsSection = document.getElementById('settings-section');
        if (project.hasSettings) {
            settingsSection.classList.remove('hidden');
            
            // Local Storage Settings
            const localStorageSection = document.getElementById('local-storage-section');
            const localStorageList = document.getElementById('modal-local-storage');
            localStorageList.innerHTML = '';
            project.settings.localStorage.forEach(setting => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = setting;
                localStorageList.appendChild(li);
            });
            
            // Remote Upload Settings
            const remoteUploadSection = document.getElementById('remote-upload-section');
            const remoteUploadList = document.getElementById('modal-remote-upload');
            remoteUploadList.innerHTML = '';
            project.settings.remoteUpload.forEach(setting => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = setting;
                remoteUploadList.appendChild(li);
            });
        } else {
            settingsSection.classList.add('hidden');
        }

        // Handle Toast Notifications if present
        const toastNotificationsSection = document.getElementById('toast-notifications-section');
        if (project.hasToastNotifications) {
            toastNotificationsSection.classList.remove('hidden');
            const notificationsList = document.getElementById('modal-toast-notifications');
            notificationsList.innerHTML = '';
            project.toastNotifications.forEach(notification => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = notification;
                notificationsList.appendChild(li);
            });
        } else {
            toastNotificationsSection.classList.add('hidden');
        }

        // Handle Development if present
        const developmentSection = document.getElementById('development-section');
        if (project.hasDevelopment) {
            developmentSection.classList.remove('hidden');
            document.getElementById('modal-run-dev').textContent = project.development.runDev;
            
            const structureList = document.getElementById('modal-project-structure');
            structureList.innerHTML = '';
            project.development.projectStructure.forEach(item => {
                const li = document.createElement('li');
                li.className = 'mb-1';
                li.textContent = item;
                structureList.appendChild(li);
            });
        } else {
            developmentSection.classList.add('hidden');
        }

        // Handle Remote Upload API if present
        const remoteUploadApiSection = document.getElementById('remote-upload-api-section');
        if (project.hasRemoteUploadApi) {
            remoteUploadApiSection.classList.remove('hidden');
            document.getElementById('modal-api-endpoint').textContent = project.remoteUploadApi.endpoint;
            document.getElementById('modal-api-header').textContent = project.remoteUploadApi.header;
            document.getElementById('modal-api-body').textContent = project.remoteUploadApi.body;
            document.getElementById('modal-api-response').textContent = project.remoteUploadApi.response;
        } else {
            remoteUploadApiSection.classList.add('hidden');
        }
    }
    
    // Function to open project modal
    function openProjectModal(projectId) {
        console.log("Opening modal for project:", projectId);
        populateProjectModal(projectId);
        if (projectModal) {
            projectModal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden'); // Prevent scrolling when modal is open
        }
    }
    
    // Function to close modal
    function closeModal() {
        if (projectModal) {
            projectModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            
            console.log("Closing modal and completely resetting slider state");
            
            // COMPLETELY reset slider content and styles
            const sliderImages = document.querySelector('.slider-images');
            if (sliderImages) {
                // Clear all content
                sliderImages.innerHTML = '';
                
                // Remove all inline styles first
                sliderImages.removeAttribute('style');
                
                // Then set only necessary reset styles
                sliderImages.style.transform = 'translateX(0)';
            }
            
            // Reset slider controls visibility
            const prevButton = document.getElementById('prev-slide');
            const nextButton = document.getElementById('next-slide');
            const indicators = document.getElementById('slide-indicators');
            
            if (prevButton) prevButton.classList.remove('hidden');
            if (nextButton) nextButton.classList.remove('hidden');
            if (indicators) {
                indicators.classList.remove('hidden');
                indicators.innerHTML = '';
            }
            
            // Reset current slide index
            currentSlideIndex = 0;
            
            // Flag to indicate we need to reinitialize the slider on next open
            needsSliderReinit = true;
        }
    }
    
    // Add event listeners for desktop icons
    desktopIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const projectId = this.dataset.project;
            openProjectModal(projectId);
        });
    });
    
    // Close modal when clicking close button
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking legacy close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking on modal background
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeModal();
            }
        });
    }
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Add floating animation to some desktop icons
    try {
        const randomIcons = Array.from(desktopIcons).sort(() => 0.5 - Math.random()).slice(0, 2);
        randomIcons.forEach(icon => {
            icon.classList.add('desktop-float');
        });
    } catch (error) {
        console.warn('Could not add floating animation to desktop icons:', error);
    }
    
    function initSlider() {
        console.log("Initializing main slider");
        const sliderContainer = document.querySelector('.slider-images');
        if (!sliderContainer) {
            console.warn("Slider container not found");
            return;
        }
        
        // Clear existing content
        sliderContainer.innerHTML = '';
        console.log("Cleared slider content");
        
        // Apply proper styling with transitions
        sliderContainer.style.display = 'flex';
        sliderContainer.style.transition = 'transform 0.5s ease';
        sliderContainer.style.width = '100%';
        
        // Add images to slider
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = "WebDev Tools Screenshot";
            img.className = "h-full w-auto flex-shrink-0 object-contain mx-auto";
            img.style.minWidth = '100%';
            sliderContainer.appendChild(img);
            console.log(`Added image ${index + 1}:`, src);
        });
        
        // Create indicators
        const indicators = document.getElementById('slide-indicators');
        if (!indicators) {
            console.warn("Slider indicators not found");
            return;
        }
        
        indicators.innerHTML = '';
        
        images.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = `w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'}`;
            indicator.addEventListener('click', () => goToSlide(index));
            indicators.appendChild(indicator);
        });
        
        // Reset to first slide
        currentSlideIndex = 0;
        updateNewSlider();
    }

    function updateNewSlider() {
        console.log("Updating slider to slide:", currentSlideIndex);
        const sliderImages = document.querySelector('.slider-images');
        if (!sliderImages) {
            console.warn("Slider images container not found");
            return;
        }
        
        sliderImages.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        
        // Update indicators
        const indicators = document.querySelectorAll('#slide-indicators button');
        indicators.forEach((indicator, index) => {
            if (index === currentSlideIndex) {
                indicator.classList.remove('bg-gray-400');
                indicator.classList.add('bg-white');
            } else {
                indicator.classList.remove('bg-white');
                indicator.classList.add('bg-gray-400');
            }
        });
    }

    function goToSlide(index) {
        currentSlideIndex = index;
        updateNewSlider();
    }

    function nextNewSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
        updateNewSlider();
    }

    function prevNewSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
        updateNewSlider();
    }

    // Add event listeners for new slider controls
    const nextSlideBtn = document.getElementById('next-slide');
    const prevSlideBtn = document.getElementById('prev-slide');
    
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', nextNewSlide);
    }
    
    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', prevNewSlide);
    }

    // Initialize the new slider if it exists
    if (document.querySelector('.slider-images')) {
        initSlider();
    }
});
