// Initialize particles.js
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6e48aa"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#9d50bb",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll to sections
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
            document.getElementById('hamburger').classList.remove('active');
        });
    });

    // Scroll down button
    document.getElementById('scroll-down').addEventListener('click', function () {
        window.scrollTo({
            top: document.getElementById('about').offsetTop - 70,
            behavior: 'smooth'
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hamburger menu toggle
    document.getElementById('hamburger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.getElementById('nav-menu').classList.toggle('active');
    });

    // Navbar scroll effect
    const navbar = document.getElementById('nav');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars
                if (entry.target.id === 'skills') {
                    const skillBars = document.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                    });
                }

                // Animate stats
                if (entry.target.id === 'about') {
                    animateValue('paper-published', 0, 3, 2000);
                    animateValue('project-completed', 0, 7, 2000);
                    animateValue('awards-won', 0, 11, 2000);
                    animateValue('years-experience', 0, 1, 2000);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Function to animate values
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // In a real implementation, you would send the form data to a server
        // For this demo, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Profile picture animation
    const profilePic = document.getElementById('profile-pic');
    let isRotating = false;

    profilePic.addEventListener('click', function () {
        if (isRotating) {
            this.style.animation = 'none';
            isRotating = false;
        } else {
            this.style.animation = 'rotate 5s linear infinite';
            isRotating = true;
        }
    });

    // Typewriter effect for tagline
    const taglines = [
        "Geomatics Engineer",
        "GIS Expert",
        "WebGIS Developer",
        "Surveyor",
        "Basic Programmer"
    ];
    let taglineIndex = 0;

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector('.typing-text').textContent = text.substring(0, i + 1);
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 2000);
        }
    }

    function startTextAnimation() {
        typeWriter(taglines[taglineIndex], 0, function () {
            // After typing, pause then start deleting
            setTimeout(function () {
                deleteText(taglines[taglineIndex], taglines[taglineIndex].length);
            }, 1000);
        });
    }

    function deleteText(text, i) {
        if (i >= 0) {
            document.querySelector('.typing-text').textContent = text.substring(0, i);
            setTimeout(function () {
                deleteText(text, i - 1)
            }, 50);
        } else {
            // Move to next tagline
            taglineIndex = (taglineIndex + 1) % taglines.length;
            startTextAnimation();
        }
    }

    // Start the animation
    startTextAnimation();

    // Add border to typing text
    document.querySelector('.typing-text').style.borderRight = '3px solid white';
});

document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get the PDF URL from GitHub (must be the RAW link)
    const pdfUrl = 'https://github.com/arunbhomi/personal_website/raw/main/Arun%20Bhomi_Resume.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    
    // Force the file to download with a specific name
    link.setAttribute('download', 'Arun_Kumar_Bhomi_CV.pdf');
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
