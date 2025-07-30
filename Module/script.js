
// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Module card click handlers - redirect to separate pages
    document.querySelectorAll('.module-card').forEach(card => {
        const moduleBtn = card.querySelector('.module-btn');
        if (moduleBtn) {
            moduleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const moduleId = card.getAttribute('data-module');
                redirectToModule(moduleId);
            });
        }
    });

    function redirectToModule(moduleId) {
        // Define redirect URLs for all 16 modules
        const moduleUrls = {
            'computer-basics': 'modules/computer-basics.html',
            'internet-safety': 'modules/internet-safety.html',
            'microsoft-office': 'modules/microsoft-office.html',
            'digital-marketing': 'modules/digital-marketing.html',
            'basic-programming': 'modules/basic-programming.html',
            'web-design': 'modules/web-design.html',
            'digital-photography': 'modules/digital-photography.html',
            'ecommerce': 'modules/ecommerce.html',
            'video-editing': 'modules/video-editing.html',
            'data-analysis': 'modules/data-analysis.html',
            'mobile-apps': 'modules/mobile-apps.html',
            'graphic-design': 'modules/graphic-design.html',
            'digital-citizenship': 'modules/digital-citizenship.html',
            'social-media': 'modules/social-media.html',
            'cloud-computing': 'modules/cloud-computing.html',
            'cybersecurity': 'modules/cybersecurity.html'
        };

        // Redirect to the appropriate module page
        if (moduleUrls[moduleId]) {
            window.location.href = moduleUrls[moduleId];
        } else {
            // Fallback to a general modules page
            window.location.href = 'modules/index.html';
        }
    }

    // Search functionality
    const moduleSearch = document.getElementById('moduleSearch');
    const modulesGrid = document.getElementById('modulesGrid');
    const noResults = document.getElementById('noResults');

    if (moduleSearch && modulesGrid) {
        moduleSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const moduleCards = modulesGrid.querySelectorAll('.module-card');
            let visibleCount = 0;

            moduleCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const participants = card.querySelector('.participants').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || participants.includes(searchTerm)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show/hide no results message
            if (noResults) {
                if (visibleCount === 0 && searchTerm.length > 0) {
                    noResults.style.display = 'block';
                } else {
                    noResults.style.display = 'none';
                }
            }
        });
    }

    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // Add staggered animation for cards
                if (entry.target.classList.contains('animated-card')) {
                    const cards = entry.target.parentElement.querySelectorAll('.animated-card');
                    cards.forEach((card, index) => {
                        if (card === entry.target) {
                            card.style.animationDelay = `${index * 0.1}s`;
                        }
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animated-card, .animated-title, .contact-item, .training-card');
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Contact form submission with enhanced feedback
    const supportForm = document.getElementById('contactForm');
    if (supportForm) {
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(supportForm);
            const formObj = Object.fromEntries(formData.entries());

            // Enhanced form submission feedback
            const submitBtn = supportForm.querySelector('.submit-btn');
            if (submitBtn) {
                const originalText = submitBtn.textContent;

                // Loading state
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                submitBtn.style.background = 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)';

                setTimeout(() => {
                    // Success state
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

                    // Show success animation
                    submitBtn.style.transform = 'scale(1.05)';

                    setTimeout(() => {
                        // Reset form
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        submitBtn.style.transform = '';
                        supportForm.reset();

                        // Show thank you message
                        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            });
        }

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (!header) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        // Add header background opacity based on scroll
        const opacity = Math.min(scrollTop / 100, 1);
        header.style.background = `linear-gradient(135deg, 
            rgba(30, 58, 138, ${0.9 + opacity * 0.1}) 0%, 
            rgba(59, 130, 246, ${0.9 + opacity * 0.1}) 100%)`;

        lastScrollTop = scrollTop;
    });

    // Tool card interactions
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const toolName = btn.closest('.tool-card').querySelector('h3').textContent;
            showNotification(`Opening ${toolName}...`, 'info');
        });
    });

    // Module progress tracking
    document.querySelectorAll('.module-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const moduleCard = e.target.closest('.module-card');
            if (moduleCard) {
                const moduleId = moduleCard.getAttribute('data-module');
                // Track module access
                console.log(`Accessing module: ${moduleId}`);
            }
        });
    });
});
