// Portfolio Data (auto-generated from portfolio-ready.json)
// This file is included directly to avoid CORS issues in static sites

const portfolioData = {
  "metadata": {
    "generated": "2026-01-10T21:03:37.942Z",
    "totalProjects": 20
  },
  "statistics": {
    "total": 20,
    "byCategory": {
      "tool": 10,
      "platform": 3,
      "client-site": 5,
      "api": 1,
      "workshop": 1
    },
    "byTechnology": {
      "Fastify": 4,
      "JavaScript": 1,
      "Node.js": 15,
      "Docker": 12,
      "GitHub Actions": 17,
      "no-extension": 7,
      "Filament": 8,
      "Laravel": 10,
      "PHP": 12,
      "pyc": 1,
      "Express": 1,
      "Shell": 1,
      "TypeScript": 1,
      "csv": 1
    },
    "totalLinesOfCode": 628943,
    "totalFiles": 6747,
    "averageReadmeScore": "4.75"
  },
  "projects": [
    {
      "id": "api-bridge",
      "name": "api-bridge",
      "category": "tool",
      "description": "# API Bridge  Bridge package connecting individual API projects to the API management platform.",
      "technologies": [
        "Fastify",
        "JavaScript",
        "Node.js"
      ],
      "primaryLanguage": "JavaScript",
      "features": [
        "API key validation middleware",
        "Endpoint registration with product tagging",
        "Product-based access control",
        "Usage logging to management platform",
        "Fastify plugin implementation"
      ],
      "metrics": {
        "linesOfCode": 51,
        "files": 4,
        "languages": {
          "md": 1,
          "json": 1,
          "js": 2
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 7,
        "hasApiDocs": true,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "api-management-platform",
      "name": "api-management-platform",
      "category": "platform",
      "description": "# API Management Platform  <!-- Deployment test: 2026-01-05 - Testing SSH/firewall fix -->",
      "technologies": [
        "Docker",
        "Fastify",
        "GitHub Actions",
        "Node.js",
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [
        "Create and manage API projects",
        "Provision subdomains via WHM API",
        "Create databases and manage credentials",
        "API key creation and management",
        "Associate API keys with API products",
        "Monitor API usage and health",
        "View centralized logs",
        "Configure error email notifications"
      ],
      "metrics": {
        "linesOfCode": 2999,
        "files": 48,
        "languages": {
          "example": 1,
          "no-extension": 1,
          "md": 2,
          "js": 22,
          "sql": 2,
          "yml": 1,
          "json": 2,
          "css": 2,
          "html": 15
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 4,
        "hasApiDocs": true,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "api-template",
      "name": "api-template",
      "category": "tool",
      "description": "# API Template  GitHub template repository for creating new API projects in the API ecosystem.",
      "technologies": [
        "Docker",
        "Fastify",
        "GitHub Actions",
        "Node.js",
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [
        "Fastify framework",
        "API bridge integration",
        "Docker support with Docker Compose",
        "GitHub Actions CI/CD with reusable workflows",
        "Standardized structure",
        "Health check endpoints"
      ],
      "metrics": {
        "linesOfCode": 128,
        "files": 12,
        "languages": {
          "example": 1,
          "no-extension": 1,
          "md": 1,
          "yml": 2,
          "json": 1,
          "js": 6
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 8,
        "hasApiDocs": true,
        "hasDeploymentDocs": true
      }
    },
    {
      "id": "assets-management",
      "name": "assets-management",
      "category": "platform",
      "description": "# Asset Management Site  A Laravel Filament application for tracking products, projects, and tasks/goals for development.",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Products**: Track codebases/apps with GitHub links, descriptions, tags, and project associations",
        "**Projects**: Overarching projects that link products and tasks together",
        "**Tasks/Goals**: Complex task management with:",
        "WYSIWYG descriptions",
        "Multi-user priority ratings (1-10 scale, averaged)",
        "Links to products and projects",
        "**Revision History**: Automatic JSON snapshot revisions for all entities",
        "**Public Viewing**: All content is publicly viewable (read-only)",
        "**Authenticated Editing**: Only logged-in users can create/edit content"
      ],
      "metrics": {
        "linesOfCode": 6452,
        "files": 161,
        "languages": {
          "example": 1,
          "md": 3,
          "php": 92,
          "no-extension": 3,
          "json": 3,
          "lock": 1,
          "sql": 1,
          "ini": 1,
          "conf": 1,
          "crt": 1,
          "key": 1,
          "yml": 3,
          "sh": 22,
          "pid": 1,
          "backup": 1,
          "xml": 1,
          "css": 4,
          "ico": 1,
          "js": 19,
          "txt": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 6,
        "hasApiDocs": true,
        "hasDeploymentDocs": true
      }
    },
    {
      "id": "aaas",
      "name": "aaas",
      "category": "client-site",
      "description": "# Order Platform - AAAS  ## 🚀 Getting Started",
      "technologies": [
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Ensure Docker Desktop is up and running in the background**",
        "**Clone the repository**",
        "**Navigate to the project directory**",
        "**Start the development environment**",
        "**Access your application**",
        "**Create a feature branch**",
        "**Open the codebase in your editor**",
        "**When you're done making changes**",
        "**Create a PR to merge your change into the development branch first**",
        "**For big changes**",
        "**After development PR is merged, create a PR to staging**",
        "**Rinse and repeat for any edits when revisiting**"
      ],
      "metrics": {
        "linesOfCode": 98345,
        "files": 1428,
        "languages": {
          "example": 2,
          "md": 33,
          "php": 505,
          "xml": 4,
          "no-extension": 3,
          "json": 7,
          "lock": 1,
          "jpg": 186,
          "Identifier": 5,
          "ini": 2,
          "conf": 2,
          "yml": 2,
          "sh": 27,
          "patch": 9,
          "css": 14,
          "pdf": 4,
          "ico": 1,
          "webp": 2,
          "png": 385,
          "svg": 7,
          "js": 26,
          "txt": 2,
          "html": 1,
          "csv": 121,
          "xlsx": 10,
          "bak": 4,
          "eps": 62,
          "log": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "billboardawards",
      "name": "billboardawards",
      "category": "client-site",
      "description": "# CRN Licensing  A modern e-commerce platform built with Laravel and Lunar PHP, featuring a robust order management system, customizable templates, and comprehensive admin interface.",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Clone the repository**",
        "**Start the local development environment**",
        "**Access your application**",
        "**Always create feature branches from `staging`:**",
        "**Make your changes and commit regularly:**",
        "**Test locally using the development tools:**",
        "**First, merge to `development` for initial testing:**",
        "**After testing, merge to `staging` for final review:**"
      ],
      "metrics": {
        "linesOfCode": 93177,
        "files": 663,
        "languages": {
          "example": 3,
          "md": 9,
          "php": 494,
          "xml": 4,
          "no-extension": 3,
          "gz": 17,
          "json": 7,
          "lock": 1,
          "jpg": 16,
          "ini": 1,
          "conf": 1,
          "crt": 1,
          "key": 1,
          "yml": 3,
          "sh": 45,
          "patch": 1,
          "css": 14,
          "pdf": 3,
          "ico": 1,
          "png": 9,
          "svg": 1,
          "js": 26,
          "txt": 1,
          "html": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": true,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "crnlicensing",
      "name": "crnlicensing",
      "category": "client-site",
      "description": "# CRN Licensing  A modern e-commerce platform built with Laravel and Lunar PHP, featuring a robust order management system, customizable templates, and comprehensive admin interface.",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Clone the repository**",
        "**Start the local development environment**",
        "**Access your application**",
        "**Always create feature branches from `staging`:**",
        "**Make your changes and commit regularly:**",
        "**Test locally using the development tools:**",
        "**First, merge to `development` for initial testing:**",
        "**After testing, merge to `staging` for final review:**"
      ],
      "metrics": {
        "linesOfCode": 76078,
        "files": 515,
        "languages": {
          "example": 1,
          "md": 5,
          "php": 397,
          "xml": 4,
          "no-extension": 3,
          "gz": 2,
          "json": 6,
          "lock": 1,
          "jpg": 16,
          "ini": 2,
          "conf": 2,
          "crt": 2,
          "key": 2,
          "yml": 2,
          "backup": 1,
          "sh": 14,
          "css": 14,
          "pdf": 3,
          "ico": 1,
          "png": 8,
          "svg": 1,
          "js": 26,
          "txt": 1,
          "html": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": true,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "foundrylicensing",
      "name": "foundrylicensing",
      "category": "client-site",
      "description": "# Order Platform  A modern e-commerce platform built with Laravel and Lunar PHP, featuring a robust order management system, customizable templates, and comprehensive admin interface.",
      "technologies": [
        "Docker",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Clone the repository**",
        "**Run the initial installation**",
        "**Access your application**",
        "Create a feature branch from `main` (eg usage `git checkout -b feature-new-contact-form` for a contact form addon)",
        "Make your changes",
        "Test thoroughly using the provided commands",
        "Submit a pull request with a clear description"
      ],
      "metrics": {
        "linesOfCode": 195842,
        "files": 2119,
        "languages": {
          "example": 1,
          "md": 18,
          "php": 619,
          "xml": 9,
          "no-extension": 6,
          "gz": 3,
          "json": 9,
          "lock": 1,
          "jpg": 16,
          "ini": 4,
          "conf": 2,
          "crt": 2,
          "key": 2,
          "yml": 2,
          "backup": 1,
          "log": 1,
          "sh": 18,
          "csv": 9,
          "css": 116,
          "pdf": 6,
          "ico": 1,
          "svg": 3,
          "png": 161,
          "js": 346,
          "txt": 91,
          "html": 63,
          "info": 115,
          "install": 43,
          "module": 116,
          "inc": 268,
          "wsdl": 4,
          "test": 39,
          "gif": 11,
          "pot": 1,
          "rule": 1,
          "db": 1,
          "bat": 1,
          "xsl": 5,
          "markdown": 1,
          "map": 2,
          "xcf": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": true,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "ncmw",
      "name": "ncmw",
      "category": "client-site",
      "description": "# NCMW Integration hub  Integration hub application for enterprise web services.",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP",
        "pyc"
      ],
      "primaryLanguage": "pyc",
      "features": [],
      "metrics": {
        "linesOfCode": 21710,
        "files": 258,
        "languages": {
          "example": 1,
          "md": 5,
          "pyc": 1,
          "php": 182,
          "no-extension": 9,
          "sh": 6,
          "json": 5,
          "lock": 1,
          "ini": 5,
          "conf": 4,
          "sql": 1,
          "yml": 1,
          "xml": 1,
          "js": 22,
          "pdf": 1,
          "css": 4,
          "ico": 1,
          "zip": 1,
          "txt": 1,
          "py": 3,
          "csv": 2,
          "log": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 1,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "cloudflare-bot-verification-api",
      "name": "cloudflare-bot-verification-api",
      "category": "api",
      "description": "# Cloudflare Bot Verification API\r \r **An HTTP Message Signatures authentication sidecar for verified bot access through Cloudflare's Web Bot Auth.**\r",
      "technologies": [
        "Express",
        "GitHub Actions",
        "Node.js",
        "Shell",
        "TypeScript"
      ],
      "primaryLanguage": "Shell",
      "features": [
        "**Clone and setup**:",
        "**Start development server**:",
        "**Test endpoints**:",
        "**Create feature branch from main**:",
        "**Make your changes and commit**:",
        "**Open Pull Request**:"
      ],
      "metrics": {
        "linesOfCode": 506,
        "files": 17,
        "languages": {
          "md": 2,
          "sh": 1,
          "json": 3,
          "yaml": 1,
          "ts": 7,
          "pem": 2,
          "jwk": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 4,
        "hasApiDocs": true,
        "hasDeploymentDocs": true
      }
    },
    {
      "id": "core-services",
      "name": "core-services",
      "category": "tool",
      "description": "# Core Services  WordPress-style hooks and plugin management system for Laravel applications.",
      "technologies": [
        "PHP",
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [
        "Extend `BasePlugin` or implement `PluginInterface`:",
        "Register hooks in your plugin's service provider:",
        "Package as ZIP and install:"
      ],
      "metrics": {
        "linesOfCode": 3397,
        "files": 27,
        "languages": {
          "md": 3,
          "no-extension": 1,
          "json": 1,
          "php": 22
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 7,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "local-development-tools",
      "name": "local-development-tools",
      "category": "tool",
      "description": "# Local Development Tools (gs_develop)  A modular, auto-updating local development toolkit for Laravel projects.",
      "technologies": [
        "GitHub Actions",
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [
        "Configuration stored in `gs_develop/config/deploy.yml`",
        "Integrates with Laravel `.env` file",
        "Preserves custom configs during auto-updates"
      ],
      "metrics": {
        "linesOfCode": 0,
        "files": 28,
        "languages": {
          "md": 2,
          "no-extension": 2,
          "example": 2,
          "sh": 22
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 9,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "media-plugin",
      "name": "media-plugin",
      "category": "tool",
      "description": "# Media Library Plugin  WordPress-style media library plugin with thumbnail generation and staff attribution for order platforms.",
      "technologies": [
        "GitHub Actions",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "Visit the [Plugin Management Site](https://plugins.gregoryscottdev.com)",
        "Browse to the Media Library plugin",
        "Click \"Download\" to get the latest version",
        "In your order-platform admin panel, go to Plugins",
        "Click \"Install Plugin\" and upload the downloaded ZIP file",
        "Activate the plugin",
        "Download the latest release ZIP from GitHub Releases",
        "In your order-platform admin panel, go to Plugins",
        "Click \"Install Plugin\" and upload the ZIP file",
        "Activate the plugin",
        "File upload (images, videos, documents)",
        "WordPress-style directory organization (`media/YYYY/MM/`)",
        "Automatic thumbnail generation (150px, 300px, 1024px)",
        "Staff attribution",
        "Filament admin interface"
      ],
      "metrics": {
        "linesOfCode": 1101,
        "files": 13,
        "languages": {
          "md": 3,
          "php": 9,
          "json": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 9,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "notify-plus",
      "name": "notify-plus",
      "category": "tool",
      "description": "# SendGrid Notify API  Email notification service powered by SendGrid, part of the API platform.",
      "technologies": [
        "Docker",
        "Fastify",
        "GitHub Actions",
        "Node.js",
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [
        "Send single emails",
        "Send bulk emails",
        "API key authentication via API Bridge",
        "Product-based access control",
        "Usage logging and tracking",
        "Docker support",
        "GitHub Actions CI/CD"
      ],
      "metrics": {
        "linesOfCode": 526,
        "files": 20,
        "languages": {
          "example": 1,
          "no-extension": 1,
          "md": 5,
          "yml": 2,
          "json": 1,
          "js": 10
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 8,
        "hasApiDocs": true,
        "hasDeploymentDocs": true
      }
    },
    {
      "id": "order-platform",
      "name": "order-platform",
      "category": "platform",
      "description": "# Order Platform  A modern e-commerce platform built with Laravel and Lunar PHP, featuring a robust order management system, customizable templates, and comprehensive admin interface.",
      "technologies": [
        "Docker",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Clone the repository**",
        "**Run the initial installation**",
        "**Access your application**",
        "Create a feature branch from `main` (eg usage `git checkout -b feature-new-contact-form` for a contact form addon)",
        "Make your changes",
        "Test thoroughly using the provided commands",
        "Submit a pull request with a clear description"
      ],
      "metrics": {
        "linesOfCode": 41707,
        "files": 458,
        "languages": {
          "example": 2,
          "md": 20,
          "php": 302,
          "no-extension": 4,
          "gz": 1,
          "sh": 48,
          "json": 13,
          "lock": 1,
          "jpg": 15,
          "ini": 2,
          "conf": 2,
          "crt": 2,
          "key": 2,
          "backup": 1,
          "20251123_182828": 1,
          "bak": 1,
          "yml": 3,
          "pid": 1,
          "xml": 1,
          "css": 9,
          "ico": 1,
          "js": 25,
          "txt": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": true,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "plugin-management-site",
      "name": "plugin-management-site",
      "category": "tool",
      "description": "# Plugin Management Site  Laravel application for managing and distributing storefront plugins.",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [
        "**Install Composer dependencies** (using Docker):",
        "**Build and start Docker containers**:",
        "**Generate application key**:",
        "**Run migrations**:",
        "**Install Filament**:",
        "**Run initial setup** (migrations + seed admin users):",
        "**Set admin user passwords**:",
        "SSH to server",
        "Map domain to directory",
        "Git clone repository",
        "Update `.env` and create database",
        "Run `php artisan app:setup`",
        "Set up SSL"
      ],
      "metrics": {
        "linesOfCode": 4632,
        "files": 117,
        "languages": {
          "example": 1,
          "md": 3,
          "php": 53,
          "no-extension": 3,
          "json": 2,
          "lock": 1,
          "ini": 1,
          "yml": 4,
          "sh": 22,
          "pid": 1,
          "xml": 1,
          "css": 4,
          "ico": 1,
          "js": 19,
          "txt": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 4,
        "hasApiDocs": false,
        "hasDeploymentDocs": true
      }
    },
    {
      "id": "print-automation",
      "name": "print-automation",
      "category": "tool",
      "description": "<p align=\"center\"><a href=\"https://laravel.com\" target=\"_blank\"><img src=\"https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP",
        "csv"
      ],
      "primaryLanguage": "csv",
      "features": [
        "Create a new repo within github by clicking on \"Use this Template\" and then \"Create a new repository.\"",
        "Clone the new repository with the following command",
        "Go into the new repo directory and execute setup script"
      ],
      "metrics": {
        "linesOfCode": 14365,
        "files": 240,
        "languages": {
          "example": 1,
          "md": 2,
          "csv": 2,
          "php": 178,
          "no-extension": 9,
          "sh": 3,
          "json": 3,
          "lock": 1,
          "ini": 4,
          "conf": 4,
          "sql": 1,
          "yml": 1,
          "xml": 1,
          "css": 5,
          "ico": 1,
          "png": 1,
          "js": 21,
          "txt": 1,
          "log": 1
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "product-pro",
      "name": "product-pro",
      "category": "tool",
      "description": "Clone the new repository with the following command ```bash git clone [repository-url]",
      "technologies": [
        "Docker",
        "Filament",
        "GitHub Actions",
        "Laravel",
        "Node.js",
        "PHP"
      ],
      "primaryLanguage": "PHP",
      "features": [],
      "metrics": {
        "linesOfCode": 32458,
        "files": 386,
        "languages": {
          "example": 1,
          "md": 9,
          "php": 219,
          "no-extension": 1,
          "sh": 2,
          "json": 11,
          "lock": 1,
          "yml": 1,
          "mjs": 1,
          "stub": 1,
          "neon": 2,
          "dist": 4,
          "xml": 1,
          "js": 41,
          "css": 7,
          "ico": 1,
          "txt": 1,
          "vue": 77,
          "bak": 1,
          "Identifier": 1,
          "csv": 3
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 3,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "remote-deployment-tools",
      "name": "remote-deployment-tools",
      "category": "tool",
      "description": "# Remote Deployment Tools\r \r A set of bash commands to help with remote development and Laravel-based deployments.\r",
      "technologies": [
        "GitHub Actions",
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [
        "Clone this repository to your deployment directory",
        "Make the scripts executable:",
        "Checks for newer versions from a public repository",
        "Downloads and applies updates automatically",
        "Maintains version tracking via version.txt"
      ],
      "metrics": {
        "linesOfCode": 0,
        "files": 9,
        "languages": {
          "md": 4,
          "no-extension": 1,
          "sh": 4
        }
      },
      "documentation": {
        "readmeExists": true,
        "readmeScore": 7,
        "hasApiDocs": false,
        "hasDeploymentDocs": false
      }
    },
    {
      "id": "workshop-ideas",
      "name": "workshop-ideas",
      "category": "workshop",
      "description": "No description available",
      "technologies": [
        "no-extension"
      ],
      "primaryLanguage": "no-extension",
      "features": [],
      "metrics": {
        "linesOfCode": 35469,
        "files": 224,
        "languages": {
          "example": 6,
          "md": 43,
          "yml": 1,
          "no-extension": 2,
          "sql": 10,
          "json": 20,
          "ts": 93,
          "js": 5,
          "tsx": 27,
          "css": 2,
          "sh": 5,
          "html": 2,
          "txt": 1,
          "jsonc": 3,
          "yaml": 3,
          "svg": 1
        }
      },
      "documentation": {
        "readmeExists": false,
        "readmeScore": 0,
        "hasApiDocs": false
      }
    }
  ]
};

// Make available globally for Vue app
if (typeof window !== "undefined") {
    window.portfolioData = portfolioData;
}
