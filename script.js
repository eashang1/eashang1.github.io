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
    console.log('DOM loaded, rendering content...');

    // Scroll to top on page load
    window.scrollTo(0, 0);

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
    console.log('Rendering complete');
});

// Render papers from data.js
function renderPapers() {
    const papersContainer = document.getElementById('papers-list');
    if (!papersContainer || !websiteData || !websiteData.papers) {
        console.log('Papers render failed:', {
            container: !!papersContainer,
            data: !!websiteData,
            papers: !!websiteData?.papers
        });
        return;
    }
    console.log('Rendering', websiteData.papers.length, 'papers');

    if (websiteData.papers.length === 0) {
        papersContainer.innerHTML = '<p class="placeholder-text">Papers will be added here.</p>';
        return;
    }

    papersContainer.innerHTML = websiteData.papers.map(paper => {
        const additionalLinks = paper.links && paper.links.length > 0
            ? paper.links.map(link => `
                <a href="${link.url}" class="btn-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    ${link.text}
                </a>
            `).join('')
            : '';

        return `
            <div class="paper-item">
                <h3>${paper.title}</h3>
                <p class="authors">${paper.authors}</p>
                <p class="venue">${paper.venue}</p>
                <p class="description">${paper.description}</p>
                <div class="paper-links">
                    <a href="${paper.pdf}" class="btn-link" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        PDF
                    </a>
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
            ? `<a href="${project.demo}" class="btn-link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
            </a>`
            : '';

        return `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" class="btn-link" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub
                    </a>
                    ${demoLink}
                </div>
            </div>
        `;
    }).join('');
}
