/**
 * Vue.js Application
 * Main app setup for portfolio site
 */

// Wait for Vue to be available
if (typeof Vue !== 'undefined') {
  // Portfolio data utilities
  const { loadPortfolioData, getTopTechnologies, formatNumber } = window.portfolioUtils || {};

  // Create Vue app
  const { createApp, ref, computed, onMounted, reactive } = Vue;

  const app = createApp({
  setup() {
    // Site content (all text)
    const content = ref(window.siteContent || {});
    
    // Reactive state
    const mobileMenuOpen = ref(false);
    const sliderIndex = ref(0);
    const portfolioData = ref([]);
    const statistics = ref(null);
    const loading = ref(true);
    const selectedCategory = ref('all');
    const searchQuery = ref('');
    const dataLoadError = ref(false);
    
    // Modal state for technology details
    const techModalOpen = ref(false);
    const selectedTech = ref(null);
    const allProjects = ref([]); // Store all projects (for reference, not shown in modal)
    
    // Slider data
    const sliderData = ref([
      { src: "img/bash_logo.jpg", alt: "Bash" },
      { src: "img/machine_learning.jpg", alt: "Machine Learning" },
      { src: "img/mysql_logo.png", alt: "MySQL" },
      { src: "img/php-logo-ADE513E748-seeklogo.com.png", alt: "PHP" },
      { src: "img/linux_logo.webp", alt: "Linux" },
      { src: "img/Linear_alg.png", alt: "Linear Algebra" },
      { src: "img/Typescript_logo.png", alt: "Typescript" },
      { src: "img/Image7.png", alt: "C#" },
      { src: "img/Image8.png", alt: "Python" }
    ]);
    
    // Computed properties
    const currentSlide = computed(() => sliderData.value[sliderIndex.value]);
    const topTechnologies = computed(() => {
      if (!statistics.value) return [];
      return getTopTechnologies ? getTopTechnologies(statistics.value, 10) : [];
    });
    
    // Filtered projects
    const filteredProjects = computed(() => {
      let filtered = portfolioData.value || [];
      
      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory.value);
      }
      
      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          (p.technologies && p.technologies.some(t => t.toLowerCase().includes(query)))
        );
      }
      
      return filtered;
    });
    
    // Categories for filtering
    const categories = computed(() => {
      if (!statistics.value || !statistics.value.byCategory) return [];
      return Object.keys(statistics.value.byCategory).filter(cat => cat !== 'client-site');
    });
    
    // Methods
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
      document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
    };
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      document.body.style.overflow = '';
    };
    
    const nextSlide = () => {
      sliderIndex.value = (sliderIndex.value + 1) % sliderData.value.length;
    };
    
    const prevSlide = () => {
      sliderIndex.value = (sliderIndex.value - 1 + sliderData.value.length) % sliderData.value.length;
    };
    
    // Three.js visualization instances
    let threeVizInstance = null;
    let heroOrbitsInstance = null;
    
    // Technology descriptions - generic, enthusiastic tech-focused content
    const techDescriptions = {
      'Node.js': {
        title: 'Node.js',
        description: 'The runtime that brought JavaScript to the server-side. I love Node.js for its event-driven, non-blocking I/O model which makes it perfect for building scalable network applications. The single-threaded event loop with worker threads gives you the best of both worlds - simplicity and performance.',
        highlights: [
          'Asynchronous I/O enables high-concurrency applications',
          'V8 engine provides exceptional performance',
          'Massive npm ecosystem with packages for everything',
          'Unified language across frontend and backend'
        ]
      },
      'Fastify': {
        title: 'Fastify',
        description: 'A lightning-fast web framework built on top of Node.js. Fastify\'s plugin architecture and schema-based validation make it incredibly developer-friendly. The performance is outstanding - it\'s one of the fastest web frameworks out there, and the TypeScript support is first-class.',
        highlights: [
          'Plugin architecture enables clean, modular code',
          'JSON Schema validation built-in',
          'Exceptional performance with minimal overhead',
          'Excellent TypeScript support'
        ]
      },
      'Docker': {
        title: 'Docker',
        description: 'Containerization changed how I think about deployment. Docker\'s ability to package applications with all dependencies into portable containers is brilliant. The consistency from development to production eliminates the "works on my machine" problem entirely.',
        highlights: [
          'Consistent environments across all stages',
          'Isolation without VM overhead',
          'Docker Compose for multi-container orchestration',
          'Massive ecosystem and community support'
        ]
      },
      'GitHub Actions': {
        title: 'GitHub Actions',
        description: 'CI/CD integrated directly into GitHub is a game-changer. The YAML-based workflows are declarative and easy to reason about. Being able to trigger builds, run tests, and deploy on every push keeps the development cycle tight and feedback immediate.',
        highlights: [
          'Native GitHub integration',
          'Powerful matrix builds for multi-platform testing',
          'Extensive marketplace of pre-built actions',
          'Free for public repositories'
        ]
      },
      'Laravel': {
        title: 'Laravel',
        description: 'PHP\'s most elegant framework. Laravel\'s expressive syntax and powerful features like Eloquent ORM, Blade templating, and the service container make building complex applications a joy. The artisan CLI tools and robust ecosystem accelerate development significantly.',
        highlights: [
          'Elegant, expressive syntax',
          'Eloquent ORM with beautiful query builder',
          'Comprehensive authentication and authorization',
          'Queue system for background job processing'
        ]
      },
      'PHP': {
        title: 'PHP',
        description: 'The language that powers the web. Modern PHP (8.4) with typed properties, attributes, and improved performance is genuinely delightful to work with. Its ubiquity and excellent documentation make it a reliable choice for web development.',
        highlights: [
          'Mature, stable language with decades of refinement',
          'Excellent performance in recent versions',
          'Composer for dependency management',
          'Built-in support for HTTP and web standards'
        ]
      },
      'Filament': {
        title: 'Filament',
        description: 'A stunning admin panel framework for Laravel. Filament combines the power of Livewire with beautiful UI components to create admin interfaces rapidly. The resource management system is intuitive, and the form builder is incredibly flexible.',
        highlights: [
          'Livewire-powered reactive components',
          'Beautiful, modern UI out of the box',
          'Powerful form and table builders',
          'Minimal code for maximum functionality'
        ]
      },
      'JavaScript': {
        title: 'JavaScript',
        description: 'The language of the web. JavaScript\'s flexibility and ubiquity make it incredibly powerful. Modern ES6+ features like async/await, destructuring, and modules have transformed it into a truly enjoyable language to work with.',
        highlights: [
          'Universal runtime across browsers and servers',
          'Dynamic typing with TypeScript for type safety',
          'Rich ecosystem of frameworks and libraries',
          'Event-driven, asynchronous by nature'
        ]
      },
      'TypeScript': {
        title: 'TypeScript',
        description: 'JavaScript with superpowers. TypeScript\'s type system catches errors at compile-time rather than runtime, making refactoring safe and code self-documenting. The IntelliSense support alone is worth the learning curve.',
        highlights: [
          'Static typing prevents entire classes of bugs',
          'Incredible IDE support and autocomplete',
          'Gradual adoption - use as much or little as needed',
          'Compiles to clean, readable JavaScript'
        ]
      },
      'Express': {
        title: 'Express',
        description: 'The minimalist web framework for Node.js. Express gives you just enough structure without getting in your way. The middleware pattern is elegant and composable, making it easy to build exactly what you need.',
        highlights: [
          'Minimal, unopinionated framework',
          'Middleware pattern for composable logic',
          'Massive ecosystem of plugins',
          'Simple routing and request handling'
        ]
      },
      'Shell': {
        title: 'Shell Scripting',
        description: 'The foundation of automation. Shell scripting allows me to orchestrate complex workflows, automate deployments, and interact with system-level tools efficiently. There\'s something satisfying about crafting the perfect pipeline.',
        highlights: [
          'Powerful automation capabilities',
          'Direct system integration',
          'Pipeline composition with pipes and redirects',
          'Essential for DevOps and deployment workflows'
        ]
      }
    };
    
    // Handle technology click from Three.js visualization
    const handleTechClick = (techInfo) => {
      const techName = techInfo.tech;
      
      // Get generic tech description or create default
      const techInfo_obj = techDescriptions[techName] || {
        title: techName,
        description: `${techName} is a powerful technology I work with regularly. Its capabilities and developer experience make it an excellent choice for building modern applications. The ecosystem, performance characteristics, and tooling all contribute to making development efficient and enjoyable.`,
        highlights: [
          'Robust feature set for modern development',
          'Strong community and ecosystem',
          'Excellent documentation and resources',
          'Proven track record in production environments'
        ]
      };
      
      selectedTech.value = {
        name: techInfo_obj.title,
        description: techInfo_obj.description,
        highlights: techInfo_obj.highlights
      };
      
      // Open modal and prevent body scroll
      techModalOpen.value = true;
      document.body.style.overflow = 'hidden';
    };
    
    // Portfolio stats for reactive text (removed intro generation - using site-content.js instead)
    const portfolioStats = computed(() => {
      if (!statistics.value || statistics.value.total === 0) return null;
      
      const topTechs = Object.entries(statistics.value.byTechnology || {})
        .filter(([tech]) => !tech.includes('extension') && tech !== 'csv' && tech !== 'pyc')
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([tech]) => tech);
      
      return {
        totalProjects: statistics.value.total,
        totalLoc: statistics.value.totalLinesOfCode,
        technologies: topTechs
      };
    });
    
    // Load portfolio data (now synchronous since it's in a JS file)
    const loadData = () => {
      try {
        loading.value = true;
        if (loadPortfolioData) {
          // loadPortfolioData is now async but fast (checks window.portfolioData)
          loadPortfolioData().then(data => {
            portfolioData.value = data.projects || [];
            allProjects.value = data.projects || []; // Store all projects
            statistics.value = data.statistics || {};
          
          // Wait for THREE.js to be available (ES module loading)
          const initThreeJS = () => {
            // Check if THREE is available, if not wait a bit
            if (typeof THREE === 'undefined') {
              setTimeout(initThreeJS, 100);
              return;
            }
            
            // Initialize hero orbiting objects (always try to show something)
            setTimeout(() => {
              if (window.createHeroOrbits && typeof THREE !== 'undefined') {
                try {
                  heroOrbitsInstance = window.createHeroOrbits('hero-three-container', {
                    statistics: statistics.value,
                    projects: portfolioData.value
                  });
                } catch (orbitError) {
                  console.warn('Could not initialize hero orbits:', orbitError);
                }
              }
            }, 300);
            
            // Initialize Three.js visualization after data loads (only if data exists)
            if (statistics.value && statistics.value.total > 0) {
              setTimeout(() => {
                if (window.createThreeViz && typeof THREE !== 'undefined') {
                  try {
                    threeVizInstance = window.createThreeViz('three-container', {
                      statistics: statistics.value,
                      projects: portfolioData.value
                    });
                    
                    // Set up click callback for technology nodes
                    if (threeVizInstance && threeVizInstance.setClickCallback) {
                      threeVizInstance.setClickCallback(handleTechClick);
                    }
                  } catch (vizError) {
                    console.warn('Could not initialize Three.js visualization:', vizError);
                  }
                }
              }, 500);
            } else {
              // Hide visualization section if no data
              const vizSection = document.getElementById('tech-visualization');
              if (vizSection) {
                vizSection.style.display = 'none';
              }
            }
          };
          
          // Start initialization
          initThreeJS();
          }).catch(error => {
            console.warn('Error loading portfolio data:', error);
            dataLoadError.value = true;
            // Set empty defaults so site still works
            portfolioData.value = [];
            statistics.value = {
              total: 0,
              byCategory: {},
              byTechnology: {},
              totalLinesOfCode: 0,
              totalFiles: 0
            };
            loading.value = false;
          }).finally(() => {
            loading.value = false;
          });
        } else {
          loading.value = false;
        }
      } catch (error) {
        console.warn('Error in loadData:', error);
        loading.value = false;
      }
    };
    
    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    };
    
    // Close technology modal and resume animation
    const closeTechModal = () => {
      techModalOpen.value = false;
      selectedTech.value = null;
      document.body.style.overflow = ''; // Restore body scroll
      
      // Resume helix rotation
      if (threeVizInstance && threeVizInstance.resume) {
        threeVizInstance.resume();
      }
    };
    
    // Initialize
    onMounted(() => {
      loadData();
      
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          scrollToSection(targetId);
        });
      });
      
      // Close tech modal with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && techModalOpen.value) {
          closeTechModal();
        }
      });
    });
    
    return {
      mobileMenuOpen,
      sliderIndex,
      currentSlide,
      portfolioData,
      statistics,
      loading,
      topTechnologies,
      filteredProjects,
      selectedCategory,
      searchQuery,
      categories,
      dataLoadError,
      portfolioStats,
      content,
      toggleMobileMenu,
      closeMobileMenu,
      nextSlide,
      prevSlide,
      scrollToSection,
      formatNumber: formatNumber || ((num) => num.toLocaleString()),
      // Modal state and functions
      techModalOpen,
      selectedTech,
      closeTechModal
    };
  }
});

  // Hide loading screen function
  const hideLoadingScreen = () => {
    const loadingScreen = document.getElementById('vue-loading-screen');
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
      loadingScreen.classList.add('hidden');
      // Remove from DOM after fade-out animation completes
      setTimeout(() => {
        if (loadingScreen.parentNode) {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }
      }, 500);
    }
  };

  // Mount the app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      app.mount('#app');
      // Hide loading screen after Vue mounts and has time to render
      // Give it a bit more time to ensure Vue is fully initialized
      setTimeout(hideLoadingScreen, 500);
    });
  } else {
    app.mount('#app');
    // Hide loading screen after Vue mounts and has time to render
    setTimeout(hideLoadingScreen, 500);
  }
} else {
  console.error('Vue.js is not loaded. Please check the CDN script tag.');
  // Hide loading screen even if Vue fails to load
  const loadingScreen = document.getElementById('vue-loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      if (loadingScreen.parentNode) {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }
    }, 500);
  }
}
