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
});
