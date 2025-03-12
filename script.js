// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.querySelector('.overlay');
    const searchBtn = document.querySelector('.nav-search-btn');
    const searchPanel = document.querySelector('.search-panel');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    const userDropdownBtn = document.querySelector('.user-dropdown-btn');
    const userDropdown = document.querySelector('.user-dropdown');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        // Close search panel and user dropdown if open
        searchPanel.classList.remove('active');
        userDropdown.classList.remove('active');
    });
    
    overlay.addEventListener('click', function() {
        navToggle.classList.remove('active');
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        searchPanel.classList.remove('active');
        userDropdown.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Search panel functionality
    if (searchBtn && searchPanel) {
        searchBtn.addEventListener('click', function() {
            searchPanel.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
            
            // Focus search input after a small delay to ensure panel is visible
            setTimeout(() => {
                searchInput.focus();
            }, 300);
            
            // Close mobile menu and user dropdown if open
            navToggle.classList.remove('active');
            mainNav.classList.remove('active');
            userDropdown.classList.remove('active');
        });
        
        searchClose.addEventListener('click', function() {
            searchPanel.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    // User dropdown functionality
    if (userDropdownBtn && userDropdown) {
        userDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent click from bubbling to document
            userDropdown.classList.toggle('active');
            
            // Close search panel and mobile menu if open
            searchPanel.classList.remove('active');
            navToggle.classList.remove('active');
            mainNav.classList.remove('active');
            
            // Only show overlay on mobile
            if (window.innerWidth <= 768) {
                overlay.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
                if (window.innerWidth <= 768) {
                    overlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    }
    
    // Add scroll event to change header appearance
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Detect active page and highlight the correct nav item
    function setActiveNavItem() {
        const currentLocation = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to current page link
            if (currentLocation.endsWith(linkPath)) {
                link.classList.add('active');
            }
            
            // Handle index.html or root path
            if ((currentLocation === '/' || currentLocation.endsWith('/index.html')) && 
                (linkPath === 'index.html' || linkPath === './')) {
                link.classList.add('active');
            }
        });
    }
    
    // Call on load
    setActiveNavItem();
});

// ...existing code...