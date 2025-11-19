// Tab navigation functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to the clicked nav link
    event.target.classList.add('active');

    // Update URL hash without scrolling
    history.pushState(null, null, `#${tabName}`);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'home';
    const tabContent = document.getElementById(hash);

    if (tabContent) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Show selected tab
        tabContent.classList.add('active');

        // Activate corresponding nav link
        const navLink = document.querySelector(`a[href="#${hash}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }
    }
});

// Load correct tab on page load based on URL hash
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Show the tab from URL
        document.getElementById(hash).classList.add('active');

        // Activate corresponding nav link
        const navLink = document.querySelector(`a[href="#${hash}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }
    }

    // Render dynamic content
    renderPapers();
    renderProjects();
});

// Render papers from data.js
function renderPapers() {
    const papersContainer = document.getElementById('papers-list');
    if (!papersContainer || !websiteData || !websiteData.papers) return;

    if (websiteData.papers.length === 0) {
        papersContainer.innerHTML = '<p class="placeholder-text">Papers will be added here.</p>';
        return;
    }

    papersContainer.innerHTML = websiteData.papers.map(paper => {
        const additionalLinks = paper.links && paper.links.length > 0
            ? paper.links.map(link => `<a href="${link.url}" class="btn-link" target="_blank">${link.text}</a>`).join('')
            : '';

        return `
            <div class="paper-item">
                <h3>${paper.title}</h3>
                <p class="authors">${paper.authors}</p>
                <p class="venue">${paper.venue}</p>
                <p class="description">${paper.description}</p>
                <div class="paper-links">
                    <a href="${paper.pdf}" class="btn-link" target="_blank">PDF</a>
                    ${additionalLinks}
                </div>
            </div>
        `;
    }).join('');
}

// Render projects from data.js
function renderProjects() {
    const projectsContainer = document.getElementById('projects-list');
    if (!projectsContainer || !websiteData || !websiteData.projects) return;

    if (websiteData.projects.length === 0) {
        projectsContainer.innerHTML = '<p class="placeholder-text">Projects coming soon.</p>';
        return;
    }

    projectsContainer.innerHTML = websiteData.projects.map(project => {
        const demoLink = project.demo
            ? `<a href="${project.demo}" class="btn-link" target="_blank">Demo</a>`
            : '';

        return `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" class="btn-link" target="_blank">GitHub</a>
                    ${demoLink}
                </div>
            </div>
        `;
    }).join('');
}
