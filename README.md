# Jacob Stanaford Portfolio Site

Portfolio website showcasing my work and experience, built with Vue.js and Three.js.

## Local Development

### Important: Use a Local Server

This site uses JavaScript modules and fetches JSON data, which requires a web server. **Do not open `index.html` directly in a browser** (file:// protocol) - this will cause CORS errors.

### Quick Start

#### Option 1: Python (Built-in)
```bash
cd jstanaford.github.io
python3 -m http.server 8000
```
Then open: http://localhost:8000

#### Option 2: Node.js (npx serve)
```bash
cd jstanaford.github.io
npx serve
```

#### Option 3: PHP (Built-in)
```bash
cd jstanaford.github.io
php -S localhost:8000
```

#### Option 4: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## Features

- **Vue.js 3**: Reactive components and smooth interactions
- **Three.js**: Interactive 3D technology network visualization
- **Portfolio Data**: Dynamic loading from JSON (automatically extracted from YGS Group projects)
- **Filtering & Search**: Project showcase with category and search filtering
- **Responsive Design**: Works on all devices

## Project Structure

```
jstanaford.github.io/
├── index.html              # Main page
├── assets/
│   ├── css/
│   │   └── app.css        # Custom styles
│   ├── js/
│   │   ├── app-vue.js     # Vue.js application
│   │   ├── portfolio-utils.js  # Data loading & sanitization
│   │   └── three-viz.js   # Three.js visualization
│   └── data/
│       └── portfolio-ready.json  # Portfolio data
└── README.md
```

## Deployment

This site is configured for GitHub Pages. Simply push to the repository and it will deploy automatically.

## Technologies Used

- Vue.js 3 (CDN)
- Three.js (CDN)
- Tailwind CSS (CDN)
- Vanilla JavaScript

## Notes

- All client names are anonymized in the portfolio data
- Projects are categorized: API, Platform, Tool
- Client sites are excluded from public display but achievements are mentioned generically
