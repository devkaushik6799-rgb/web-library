# Web Technology – The Complete Learning Library

A complete, responsive, multi-page static Learning Management System (LMS) and online textbook built for **B.Tech Web Technology** university examination preparation, conceptual learning, and quick revision.

## Project Description

**Web Technology – The Complete Learning Library** organizes the entire 5-unit B.Tech Web Technology syllabus (63 unique topics) into dedicated, interlinked HTML5 pages with structured definitions, step-by-step explanations, SVG architecture diagrams, readable code examples, comparison tables, exam-focused callouts, and LocalStorage-backed progress tracking.

## Objectives

- Provide a dedicated, independent HTML page for each of the 5 syllabus units (`unit-1.html` – `unit-5.html`) plus a central LMS dashboard (`index.html`).
- Deliver university-level, exam-ready educational explanations for every syllabus topic without superficial summaries or placeholders.
- Enable instant cross-unit topic search, persistent progress tracking, and dark/light theme switching with zero backend dependencies.
- Maintain 100% static compatibility with **GitHub Pages** using relative file paths.

## Features

- **Main LMS Dashboard (`index.html`):** Welcome hero, live syllabus statistics (5 units, 63 topics, completed count, overall percentage), unit cards with individual progress bars, Continue Learning, Recently Studied Topics, Quick Search, and Quick Revision links.
- **5 Independent Unit Pages (`unit-1.html` – `unit-5.html`):** Consistent header, sticky/collapsible sidebar navigation, unit progress bar, structured topic cards, SVG diagrams, copyable code blocks, comparison tables, exam tips, and unit-level Quick Revision & FAQ sections.
- **Cross-Unit Search:** Instant search across all 63 topics from any page (keyboard shortcut `/`), linking directly to the exact unit page and topic anchor.
- **LocalStorage Progress Tracking:** Mark any topic as completed; progress updates dynamically across the unit page, header pill, and main dashboard, and persists across page refreshes.
- **Dark & Light Theme Toggle:** Sophisticated dark theme by default with persistent light/dark switching.
- **Fully Responsive:** Tested across desktop, tablet, and mobile viewports with an accessible collapsible drawer.

## Technology Stack

- **HTML5** (Semantic markup & accessible landmarks)
- **CSS3** (Custom properties, Flexbox, CSS Grid, responsive media queries)
- **Vanilla JavaScript (ES6+)** (Modular progress, search, navigation, and theme management)
- **LocalStorage API** (Client-side persistence)
- **Inline SVG** (Architecture diagrams and brand logo)

## Project Folder Structure

```text
web-technology-learning-library/
├── index.html
├── unit-1.html
├── unit-2.html
├── unit-3.html
├── unit-4.html
├── unit-5.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── dashboard.css
│   │   └── units.css
│   ├── js/
│   │   ├── syllabus-data.js
│   │   ├── progress.js
│   │   ├── search.js
│   │   ├── navigation.js
│   │   └── main.js
│   └── images/
│       └── logo.svg
├── README.md
├── .gitignore
└── LICENSE
```

## Installation & How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/web-technology-learning-library.git
   cd web-technology-learning-library
   ```
2. Open `index.html` directly in any modern web browser, **or** serve it with a lightweight local static server:
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   ```
   Then visit `http://localhost:8080` in your browser.

## GitHub Pages Deployment Instructions

1. Push the project to your GitHub repository (`main` branch).
2. Open your repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the **`main`** branch and **`/ (root)`** folder, then click **Save**.
5. After 1–2 minutes, your site will be live at:
   `https://YOUR_USERNAME.github.io/web-technology-learning-library/`

## Screenshots

- `[Screenshot Placeholder: Main Dashboard (Dark Theme)]`
- `[Screenshot Placeholder: Unit Page with SVG Architecture Diagram & Code Example]`
- `[Screenshot Placeholder: Cross-Unit Search & Mobile Responsive Sidebar]`

## Future Enhancements

- Interactive topic-wise MCQ self-assessment quizzes per unit.
- Printable PDF/cheat-sheet export mode for offline exam revision.
- Bookmarking and personal study notes saved in LocalStorage.
