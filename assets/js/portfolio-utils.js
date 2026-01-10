/**
 * Portfolio Data Utilities
 * Handles loading and sanitizing portfolio data for display
 */

// Sanitize project names (remove client site names, format for display)
function sanitizeProjectName(name) {
  const clientSiteMap = {
    'aaas': 'Enterprise E-Commerce Platform',
    'billboardawards': 'Awards Management System',
    'crnlicensing': 'Licensing Platform',
    'foundrylicensing': 'Enterprise Licensing System',
    'ncmw': 'Enterprise Web Application',
    'gsorderautomationprintmail': 'Print & Mail Automation System'
  };
  
  if (clientSiteMap[name.toLowerCase()]) {
    return clientSiteMap[name.toLowerCase()];
  }
  
  // Convert kebab-case to Title Case
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Sanitize project descriptions (remove markdown formatting, client references)
function sanitizeDescription(description) {
  if (!description) return '';
  
  // Remove markdown headers
  let clean = description.replace(/^#+\s+/gm, '');
  
  // Remove HTML comments
  clean = clean.replace(/<!--[\s\S]*?-->/g, '');
  
  // Take first few sentences
  const sentences = clean.split(/[.!?]+/).filter(s => s.trim().length > 20);
  return sentences.slice(0, 2).join('. ').trim() + '.';
}

// Filter and sanitize projects for display
function processPortfolioData(data) {
  if (!data || !data.projects) return { projects: [], statistics: {} };
  
  // Filter out client sites OR group them as generic projects
  const publicProjects = data.projects
    .filter(p => p.category !== 'client-site')
    .map(p => ({
      ...p,
      name: sanitizeProjectName(p.name),
      displayName: sanitizeProjectName(p.name),
      description: sanitizeDescription(p.description)
    }));
  
  // Get client site aggregates (for achievements section)
  const clientSites = data.projects.filter(p => p.category === 'client-site');
  const clientSiteStats = {
    count: clientSites.length,
    technologies: getUniqueTechnologies(clientSites),
    totalLoc: clientSites.reduce((sum, p) => sum + (p.metrics?.linesOfCode || 0), 0),
    totalFiles: clientSites.reduce((sum, p) => sum + (p.metrics?.files || 0), 0)
  };
  
  // Update statistics (exclude client sites from public count)
  const publicStats = {
    ...data.statistics,
    total: publicProjects.length,
    clientSites: clientSiteStats
  };
  
  return {
    projects: publicProjects,
    statistics: publicStats,
    metadata: data.metadata
  };
}

// Get unique technologies from projects
function getUniqueTechnologies(projects) {
  const techSet = new Set();
  projects.forEach(p => {
    if (p.technologies && Array.isArray(p.technologies)) {
      p.technologies.forEach(tech => techSet.add(tech));
    }
  });
  return Array.from(techSet).sort();
}

// Format technology names for display
function formatTechnology(tech) {
  const techMap = {
    'Node.js': 'Node.js',
    'JavaScript': 'JavaScript',
    'TypeScript': 'TypeScript',
    'PHP': 'PHP',
    'Laravel': 'Laravel',
    'Filament': 'Laravel Filament',
    'Fastify': 'Fastify',
    'Express': 'Express.js',
    'Docker': 'Docker',
    'GitHub Actions': 'GitHub Actions',
    'Vue.js': 'Vue.js'
  };
  return techMap[tech] || tech;
}

// Load portfolio data
// Now uses a JavaScript file included directly (no fetch needed, works for static sites)
async function loadPortfolioData() {
  try {
    // Check if portfolio data is already available from the included JS file
    if (typeof window !== 'undefined' && window.portfolioData) {
      return processPortfolioData(window.portfolioData);
    }
    
    // Fallback: try to load from JSON if JS file wasn't included (shouldn't happen normally)
    try {
      const response = await fetch('assets/data/portfolio-ready.json');
      if (response.ok) {
        const data = await response.json();
        return processPortfolioData(data);
      }
    } catch (fetchError) {
      // Fetch failed (CORS or file not found)
      console.warn('Portfolio data not available. Make sure portfolio-data.js is included in the page.');
    }
    
    // Return empty data structure if data isn't available
    // This allows the site to still work without portfolio data
    return { 
      projects: [], 
      statistics: {
        total: 0,
        byCategory: {},
        byTechnology: {},
        totalLinesOfCode: 0,
        totalFiles: 0
      }, 
      metadata: {} 
    };
  } catch (error) {
    console.warn('Error loading portfolio data:', error.message);
    return { 
      projects: [], 
      statistics: {
        total: 0,
        byCategory: {},
        byTechnology: {},
        totalLinesOfCode: 0,
        totalFiles: 0
      }, 
      metadata: {} 
    };
  }
}

// Get projects by category
function getProjectsByCategory(projects, category) {
  return projects.filter(p => p.category === category);
}

// Get top technologies by usage
function getTopTechnologies(statistics, limit = 10) {
  if (!statistics.byTechnology) return [];
  
  return Object.entries(statistics.byTechnology)
    .filter(([tech]) => !tech.includes('extension') && tech !== 'csv' && tech !== 'pyc')
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tech, count]) => ({ name: tech, count }));
}

// Format large numbers
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// Export functions (for use in Vue app and global access)
window.portfolioUtils = {
  loadPortfolioData,
  sanitizeProjectName,
  sanitizeDescription,
  processPortfolioData,
  getProjectsByCategory,
  getTopTechnologies,
  formatTechnology,
  formatNumber
};

// Also support CommonJS if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.portfolioUtils;
}
