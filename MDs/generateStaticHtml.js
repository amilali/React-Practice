const fs = require('fs');
const path = require('path');

const mdsDir = __dirname;
const mdFiles = fs.readdirSync(mdsDir).filter(f => f.endsWith('.md'));

const filesData = {};
mdFiles.forEach(file => {
    filesData[file] = fs.readFileSync(path.join(mdsDir, file), 'utf8');
});

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interview Prep Hub</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Marked.js for parsing -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    
    <!-- DOMPurify for security -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js"></script>

    <!-- Highlight.js -->
    <link id="hljs-theme" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

    <style>
        :root {
            /* Light Mode Variables */
            --bg-body: #f8fafc;
            --bg-container: #ffffff;
            --text-main: #334155;
            --text-heading: #0f172a;
            --text-muted: #64748b;
            --accent: #3b82f6;
            --accent-hover: #2563eb;
            --border-subtle: #e2e8f0;
            --bg-code: #f1f5f9;
            --text-code: #0f172a;
            --bg-details: #f8fafc;
        }

        [data-theme="dark"] {
            /* Dark Mode Variables - Focus Reading Black */
            --bg-body: #050505;
            --bg-container: #121212; 
            --text-main: #e2e8f0;
            --text-heading: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #60a5fa;
            --accent-hover: #93c5fd;
            --border-subtle: #27272a;
            --bg-code: #1f2937;
            --text-code: #e2e8f0;
            --bg-details: #1a1a1a;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-body);
            color: var(--text-main);
            line-height: 1.7;
            transition: background-color 0.3s ease, color 0.3s ease;
            display: flex;
            justify-content: center;
            padding: 2rem 1rem;
        }

        .container {
            width: 100%;
            max-width: 800px;
            background-color: var(--bg-container);
            padding: 3rem 4rem;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        [data-theme="dark"] .container {
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        /* Navbar & Header */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--border-subtle);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        h1, h2, h3, h4, h5 {
            color: var(--text-heading);
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        h1 { font-size: 2.25rem; margin-top: 0; }
        h2 { font-size: 1.75rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; }
        h3 { font-size: 1.25rem; }

        p {
            margin-bottom: 1.2rem;
        }

        a {
            color: var(--accent);
            text-decoration: none;
            cursor: pointer;
            transition: color 0.2s ease;
        }

        a:hover {
            color: var(--accent-hover);
            text-decoration: underline;
        }

        /* Buttons */
        .btn {
            background-color: transparent;
            border: 1px solid var(--border-subtle);
            color: var(--text-heading);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s ease;
        }

        .btn:hover {
            background-color: var(--border-subtle);
        }

        /* Code & Pre */
        code {
            font-family: 'Fira Code', monospace;
            font-size: 0.85em;
            background-color: var(--bg-code);
            color: var(--text-code);
            padding: 0.2em 0.4em;
            border-radius: 4px;
        }

        pre {
            background-color: var(--bg-code);
            padding: 1.25rem;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 1.5rem;
            border: 1px solid var(--border-subtle);
        }

        pre code {
            background-color: transparent;
            padding: 0;
        }

        /* Overwrite hljs background to match our theme */
        .hljs {
            background: transparent !important;
            padding: 0 !important;
        }

        /* Details & Summary */
        details {
            background-color: var(--bg-details);
            border: 1px solid var(--border-subtle);
            border-radius: 8px;
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
        }
        
        details[open] {
            padding-bottom: 1.5rem;
        }

        summary {
            cursor: pointer;
            font-weight: 600;
            color: var(--text-heading);
            outline: none;
            display: flex;
            align-items: center;
        }

        summary::marker {
            color: var(--accent);
        }

        details > *:not(summary) {
            margin-top: 1rem;
        }

        /* Lists */
        ul, ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
        }
        
        li {
            margin-bottom: 0.5rem;
        }

        /* Home Page List styles */
        .topic-list {
            list-style: none;
            padding: 0;
        }

        .topic-list li {
            margin-bottom: 1rem;
        }

        .topic-card {
            display: block;
            padding: 1.5rem;
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            background-color: var(--bg-body);
        }

        .topic-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            text-decoration: none;
        }

        [data-theme="dark"] .topic-card:hover {
            box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        }

        .topic-card h3 {
            margin: 0 0 0.5rem 0;
            color: var(--accent);
            border: none;
        }

        .topic-card p {
            margin: 0;
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .container {
                padding: 2rem 1.5rem;
            }
        }
        
        /* Hide content until JS loads */
        .page {
            display: none;
        }
        .page.active {
            display: block;
            animation: fadeIn 0.4s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <div class="header-left">
                <button id="back-btn" class="btn" style="display: none;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Back to Hub
                </button>
            </div>
            
            <button id="theme-button" class="btn">
                <svg id="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                <span id="theme-text">Dark Mode</span>
            </button>
        </header>

        <!-- Home View -->
        <main id="home-view" class="page active">
            <h1>Interview Preparation Hub</h1>
            <p>Welcome to your personal study dashboard. Select a topic below to begin reviewing tricky interview questions, concepts, and code output.</p>
            
            <ul class="topic-list" id="topic-list">
                <!-- Injected via JS -->
            </ul>
        </main>

        <!-- Document View -->
        <main id="doc-view" class="page">
            <div id="doc-content"></div>
        </main>
    </div>

    <script>
        // Data injected from build script
        const markdownFiles = ${JSON.stringify(filesData)};

        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-button');
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');
        
        const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        const sunIcon = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

        let currentTheme = localStorage.getItem('theme') || 'dark';

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            const hljsThemeLink = document.getElementById('hljs-theme');

            if(theme === 'dark') {
                themeIcon.innerHTML = sunIcon;
                themeText.textContent = 'Light Mode';
                if(hljsThemeLink) hljsThemeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
            } else {
                themeIcon.innerHTML = moonIcon;
                themeText.textContent = 'Dark Mode';
                if(hljsThemeLink) hljsThemeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
            }
            localStorage.setItem('theme', theme);
        }

        applyTheme(currentTheme);

        themeBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });

        // Navigation & Routing Logic
        const homeView = document.getElementById('home-view');
        const docView = document.getElementById('doc-view');
        const backBtn = document.getElementById('back-btn');
        const topicList = document.getElementById('topic-list');
        const docContent = document.getElementById('doc-content');

        // Formats filename to a nice title
        function formatTitle(filename) {
            return filename
                .replace('.md', '')
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // Initialize Home Page
        function renderHome() {
            Object.keys(markdownFiles).forEach(file => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'topic-card';
                a.href = '#' + file;
                
                const title = document.createElement('h3');
                title.textContent = formatTitle(file);
                
                const desc = document.createElement('p');
                desc.textContent = "Click to open and study the interview flashcards and concepts.";

                a.appendChild(title);
                a.appendChild(desc);
                li.appendChild(a);
                topicList.appendChild(li);
            });
        }

        // Initialize Document Page
        function renderDoc(filename) {
            const rawMd = markdownFiles[filename];
            if(!rawMd) {
                docContent.innerHTML = '<p>Error: Document not found.</p>';
                return;
            }
            // Parse Markdown. DOMPurify ensures it is safe.
            const rawHtml = marked.parse(rawMd);
            docContent.innerHTML = DOMPurify.sanitize(rawHtml, { ADD_TAGS: ['details', 'summary'] });

            // Apply Highlight.js to all code blocks after rendering
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }

        // Router function
        function handleRoute() {
            const hash = window.location.hash;
            if (hash && markdownFiles[hash.substring(1)]) {
                const filename = hash.substring(1);
                renderDoc(filename);
                homeView.classList.remove('active');
                docView.classList.add('active');
                backBtn.style.display = 'flex';
                window.scrollTo(0,0);
            } else {
                docView.classList.remove('active');
                homeView.classList.add('active');
                backBtn.style.display = 'none';
                window.scrollTo(0,0);
            }
        }

        backBtn.addEventListener('click', () => {
            window.location.hash = '';
        });

        window.addEventListener('hashchange', handleRoute);

        // Boot app
        renderHome();
        handleRoute();

    </script>
</body>
</html>`;

fs.writeFileSync(path.join(mdsDir, 'index.html'), htmlContent);
console.log('HTML generated successfully at', path.join(mdsDir, 'index.html'));
