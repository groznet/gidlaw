// Load header, footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            initMobileMenu();
        });
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// Mobile menu toggle
function initMobileMenu() {
    const button = document.getElementById('mobileMenuButton');
    const menu = document.getElementById('mobileMenu');

    if (!button || !menu) {
        console.warn("Mobile menu elements not found");
        return;
    }

    // Toggle
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // prevents closing immediately
        menu.classList.toggle('hidden');
    });

    // Close when clicking outside
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.add('hidden');
        }
    });
}
initMobileMenu();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

