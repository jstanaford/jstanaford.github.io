# YGS Group - Portfolio Summary

This document provides high-level summaries of all repositories and projects completed at YGS Group. Each entry includes project purpose, technology stack, and key features.

---

## E-Commerce Platforms (Laravel/Lunar PHP)

### AAAS (Order Platform - AAAS)
**Type:** E-commerce Storefront  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Lunar PHP (e-commerce framework)
- Livewire 3.5
- Meilisearch
- Authorize.net payment integration
- FedEx shipping integration
- Docker-based development environment
- Vite + Tailwind CSS 4.0

**Purpose:** Backissues storefront for AAAS (American Association for the Advancement of Science) built on modern Laravel/Lunar e-commerce platform.

**Key Features:**
- Full-featured e-commerce platform
- Custom templates with flexible fields
- FedEx shipping calculations and tracking
- Authorize.net secure payment processing
- Pay by Check alternative payment method
- Docker containerized development environment
- Automated deployment workflows

---

### CRN Licensing
**Type:** E-commerce Storefront  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Lunar PHP 1.0.0-beta.9
- Livewire 3.5
- Filament 3.2.25 (admin panel)
- Meilisearch
- Authorize.net payment integration
- Docker + Laravel Sail
- Vite + Tailwind CSS 4.0
- YGS Storefront Bridge package

**Purpose:** Modern e-commerce platform for CRN Licensing featuring robust order management, customizable templates, and comprehensive admin interface.

**Key Features:**
- Full e-commerce functionality
- Customizable template system
- Comprehensive admin interface via Filament
- Order management system
- Payment processing integration
- Search functionality via Meilisearch
- Automated deployment to staging/development environments

---

### Foundry Licensing
**Type:** E-commerce Storefront  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Lunar PHP 1.0.0-beta
- Livewire 3.5
- Meilisearch
- Authorize.net payment integration
- SMB file system integration (icewind/smb)
- Docker + Laravel Sail
- Vite + Tailwind CSS
- YGS Storefront Bridge package

**Purpose:** E-commerce platform for Foundry Licensing built on Laravel/Lunar framework with SMB file system integration capabilities.

**Key Features:**
- Full e-commerce platform
- SMB network file system integration
- Custom templates
- Payment and shipping integrations
- Search functionality
- Docker-based development environment

---

### Order Platform (Base Platform)
**Type:** E-commerce Platform Foundation  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Lunar PHP 1.0.0-beta
- Livewire 3.5
- Meilisearch
- Authorize.net payment integration
- FedEx shipping integration
- Docker + Laravel Sail
- Vite + Tailwind CSS 4.0
- YGS Storefront Bridge package

**Purpose:** Base e-commerce platform template/skeleton for building new storefronts. Serves as the foundation for multiple client storefronts.

**Key Features:**
- Reusable e-commerce foundation
- Standardized payment and shipping integrations
- Template system
- Docker development environment
- Automated deployment workflows

---

## PageFlex Storefronts (.NET/ASP.NET)

### AMP Storefront
**Type:** PageFlex Storefront  
**Technology Stack:
- ASP.NET / C#
- PageFlex Storefront platform
- Microsoft SQL Server
- Bootstrap
- jQuery
- CKEditor
- Dojo Toolkit

**Purpose:** PageFlex-based storefront for AMP (American Medical Publishers) with custom email templates, API extensions, and deployment configurations.

**Key Features:**
- PageFlex Storefront integration
- Custom email templates (responsive, Outlook-compatible)
- Custom API extensions
- Custom ASPX pages
- Template system for branding
- Deployment folder structure

---

### GS_ABC Storefront
**Type:** PageFlex Storefront  
**Technology Stack:**
- ASP.NET / C#
- PageFlex Storefront platform
- Microsoft SQL Server
- .NET Solution structure

**Purpose:** PageFlex storefront for GS ABC with custom extensions, APIs, email templates, and task services.

**Key Features:**
- Storefront API extensions
- Custom SXI (Storefront Extension Interface) modules
- Email template system
- Pick list functionality
- Task service integration
- Co-op SXI extensions

---

### GS_NCRStorefront
**Type:** PageFlex Storefront  
**Technology Stack:**
- ASP.NET / C#
- PageFlex Storefront platform
- Microsoft SQL Server
- CDN integration
- User importer utilities

**Purpose:** PageFlex storefront for NCR (National Cash Register) with CDN integration, user management, and custom extensions.

**Key Features:**
- Full PageFlex storefront implementation
- CDN asset management
- User import functionality
- Custom API extensions
- Email templates
- Task services
- Co-op extensions

---

### Molina Health Storefront
**Type:** PageFlex Storefront  
**Technology Stack:**
- ASP.NET / C#
- PageFlex Storefront platform
- Microsoft SQL Server
- Bootstrap
- jQuery
- CKEditor
- Dojo Toolkit

**Purpose:** PageFlex-based storefront for Molina Health with custom templates and email notifications.

**Key Features:**
- PageFlex Storefront integration
- Custom email templates
- Template system
- Custom ASPX pages
- Bootstrap UI components

---

## Automation & Integration Platforms

### Print Automation
**Type:** Order Processing & Automation Platform  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Filament 3.2 (admin panel)
- AWS SDK
- SFTP integration
- SOAP API integration
- Pace API integration
- Laravel Horizon (queue management)
- PDF processing (FPDF, FPDI, PDF Parser)
- Excel processing (Maatwebsite Excel)

**Purpose:** Comprehensive order automation platform that handles print order processing, file transfers, data synchronization with Pace (PageFlex), and KPI ingestion.

**Key Features:**
- Automated order processing workflows
- SFTP file transfer automation
- PageFlex Pace integration for order synchronization
- BCC (Business Card Company) data push integration
- KPI data ingestion
- PDF and Excel file processing
- Queue-based job processing via Laravel Horizon
- Admin interface via Filament
- Health monitoring

---

### GSOrderAutomationPrintMail
**Type:** Print & Mail Automation Scripts  
**Technology Stack:**
- PowerShell
- Azure Blob Storage integration
- File system automation
- Email reporting

**Purpose:** PowerShell-based automation system for managing print and mail order files, Azure Blob Storage operations, and automated reporting.

**Key Features:**
- Automated file movement and processing
- Azure Blob Storage integration (azcopy)
- CSV file validation and processing
- Mail data (MAILDAT) file handling
- IMB (Intelligent Mail Barcode) verification
- Automated email reporting
- Job staging and verification
- Logging and audit trails

---

## API Services & Microservices

### FedEx API
**Type:** API Wrapper Service  
**Technology Stack:**
- Node.js 18+
- TypeScript
- Express.js
- Zod (validation)
- Pino (logging)
- Helmet (security)
- CORS
- Semantic versioning

**Purpose:** Express.js API wrapper for FedEx shipping services with versioning support and TypeScript implementation.

**Key Features:**
- FedEx API integration
- Semantic versioning (v1, v2, etc.)
- TypeScript for type safety
- Request validation with Zod
- Structured logging
- Security headers via Helmet
- Health check endpoints
- Version discovery endpoints

---

### Cloudflare Bot Verification API
**Type:** Bot Authentication Sidecar  
**Technology Stack:**
- Node.js 18+
- TypeScript
- Express.js
- web-bot-auth library
- Jose (JWT/JWS)
- Helmet (security)
- CORS
- Morgan (HTTP logging)

**Purpose:** HTTP Message Signatures authentication sidecar implementing RFC 9421 for verified bot access through Cloudflare's Web Bot Auth system.

**Key Features:**
- RFC 9421 HTTP Message Signatures implementation
- Cloudflare Web Bot Auth integration
- JWKS directory endpoint
- Request signing endpoint
- Health check monitoring
- Sidecar architecture for web scrapers
- Eliminates CAPTCHA challenges for verified bots
- Automatic deployment via GitHub Actions

---

### AuthorizeNetPay
**Type:** Payment Processing Library  
**Technology Stack:**
- C# / .NET
- Authorize.net SDK

**Purpose:** C# library/component for Authorize.net payment processing integration.

**Key Features:**
- Authorize.net payment gateway integration
- .NET library implementation
- Reusable payment processing component

---

## Data Management & CMS

### Data CMS
**Type:** Content Management System  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Filament 3.3 (admin panel)
- SFTP integration
- YGS DataCMS Bridge package
- Vite

**Purpose:** Content management system for handling data synchronization, file management, and content operations.

**Key Features:**
- CMS functionality
- SFTP file management
- Filament admin interface
- Data bridge integration
- File system operations

---

### Product Pro
**Type:** Product Management Platform  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.0
- Filament 3.2
- Inertia.js + Vue.js
- Spatie Media Library
- Spatie Permissions
- Laravel Impersonate
- Excel export/import
- Activity logging
- Revision tracking

**Purpose:** Advanced product management platform with Vue.js frontend, comprehensive admin interface, and product lifecycle management.

**Key Features:**
- Product management system
- Inertia.js + Vue.js SPA frontend
- Filament admin panel
- Media library integration
- Role-based permissions
- User impersonation
- Excel import/export
- Activity logging and audit trails
- Revision tracking
- File parser package integration
- Comments system integration

---

## Web Scraping & Data Collection

### Falconer
**Type:** Web Scraping & Machine Learning Platform  
**Technology Stack:**
- Python 3.x
- Scrapy 2.11+
- Scrapy-Playwright
- Playwright
- MySQL (mysqlclient)
- Machine Learning libraries (scikit-learn, NLTK)
- Training scripts

**Purpose:** Web scraping platform with machine learning capabilities for data collection and analysis.

**Key Features:**
- Scrapy-based web scraping
- JavaScript rendering via Playwright
- MySQL database integration
- Machine learning integration
- Training script for ML models
- Data collection automation

---

### Falconer v2
**Type:** Advanced Web Scraping & ML Platform  
**Technology Stack:**
- Python 3.12
- Flask 3.0+ (web framework)
- FastAPI 0.104+ (API framework)
- Uvicorn (ASGI server)
- SQLAlchemy 2.0+ (ORM)
- PyMySQL
- Scrapy 2.11+
- Scrapy-Playwright
- Playwright 1.40+
- Transformers (NLP/ML)
- scikit-learn
- NLTK
- NumPy, Pandas
- Pytest (testing)

**Purpose:** Enhanced web scraping platform with REST API, machine learning capabilities, and modern Python architecture.

**Key Features:**
- Dual framework architecture (Flask + FastAPI)
- Advanced web scraping with JavaScript rendering
- Machine learning and NLP capabilities
- RESTful API endpoints
- Database ORM with SQLAlchemy
- Comprehensive testing suite
- CPU-optimized ML for cPanel hosting
- Training and inference capabilities

---

## Client-Specific Projects

### NCMW (Integration Hub)
**Type:** Integration Platform  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Vite + Tailwind CSS 3.3
- Alpine.js
- Puppeteer (browser automation)

**Purpose:** Integration hub for NCMW with browser automation capabilities and modern frontend.

**Key Features:**
- Integration platform
- Browser automation via Puppeteer
- Modern Vue-like frontend with Alpine.js
- Tailwind CSS styling
- Documentation hub integration

---

### Provider Marketing (Aetna)
**Type:** Marketing Platform  
**Technology Stack:**
- ASP.NET / C#
- .NET Solution

**Purpose:** Aetna Provider Marketing 2021 redesign platform for healthcare provider marketing materials.

**Key Features:**
- Provider marketing platform
- Site redesign implementation
- Healthcare industry focus

---

### Enterprise Control
**Type:** Enterprise Management Platform  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Vite + Tailwind CSS 4.0

**Purpose:** Enterprise-level control and management platform.

**Key Features:**
- Enterprise management functionality
- Modern Laravel architecture
- Tailwind CSS 4.0 styling

---

## Development Tools & Infrastructure

### Remote Deployment Tools
**Type:** Deployment Automation Toolset  
**Technology Stack:**
- Bash scripting
- SSH automation
- Git integration

**Purpose:** Command-line utilities for managing remote Laravel deployments with automated release management.

**Key Features:**
- Automated deployment workflows
- Release management (symlink-based)
- Database backup automation
- Vendor dependency recalibration
- Permission fixing utilities
- Auto-update mechanism
- Multi-environment support (staging, production, development)
- Remote command execution

---

### Workflows (GitHub Actions)
**Type:** CI/CD Workflow Templates  
**Technology Stack:**
- GitHub Actions
- YAML workflows
- SSH deployment
- Docker integration

**Purpose:** Reusable GitHub Actions workflow for deploying Laravel applications with environment-based configuration.

**Key Features:**
- Reusable workflow templates
- Environment-based deployments
- Automatic deployment on branch push
- Manual workflow dispatch
- SSH-based deployment
- Version tagging and semantic versioning
- Secret management integration

---

### Storefront Bridge Wrapper
**Type:** Integration Package  
**Technology Stack:**
- PHP 8.1+
- Laravel 10.10
- Composer package
- Vite + Tailwind CSS 4.0

**Purpose:** Wrapper package for storefront bridge functionality, providing integration between Laravel applications and storefront systems.

**Key Features:**
- Reusable Composer package
- Storefront integration bridge
- Order platform integration

---

## Playground & Experimental Projects

### NCR Playground
**Type:** Development Environment  
**Technology Stack:**
- Docker
- Microsoft SQL Server 2022
- Nginx
- ASP.NET application serving
- Bash management scripts

**Purpose:** Docker-based development environment for NCR storefront with SQL Server and web server containers.

**Key Features:**
- Docker Compose setup
- SQL Server 2022 container
- Nginx web server
- Database backup/restore utilities
- Management scripts for container operations
- Local development environment

---

### DB Playground
**Type:** Database Development & Testing  
**Purpose:** Playground environment for database schema development, testing, and experimentation.

**Sub-projects:**
- ABC scratch paper
- Aetna AMP schema development
- Aetna scratch paper

**Key Features:**
- Database schema experimentation
- Schema examples and documentation
- Working drafts and backups

---

## Summary Statistics

**Total Repositories:** 28+  
**Primary Technologies:**
- **PHP/Laravel:** 12+ projects
- **.NET/ASP.NET:** 6+ projects
- **Node.js/TypeScript:** 3 projects
- **Python:** 2 projects
- **PowerShell:** 1 project
- **Bash/DevOps:** 2 projects

**Key Technology Stacks:**
- Laravel 10.x with Lunar PHP e-commerce
- PageFlex Storefront platform (.NET)
- Node.js/Express.js APIs
- Python web scraping (Scrapy, Playwright)
- Docker containerization
- GitHub Actions CI/CD
- Filament admin panels
- Tailwind CSS 4.0
- Vite build tooling

**Domain Expertise:**
- E-commerce platform development
- Print-on-demand automation
- Payment gateway integration (Authorize.net)
- Shipping integration (FedEx)
- Web scraping and data collection
- Content management systems
- API development and microservices
- DevOps and deployment automation

---

*This document was generated from repository analysis and is intended for portfolio documentation and AI-assisted work portfolio generation.*

