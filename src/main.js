// Smooth Scroll Observer for elements
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-up, .animate-time').forEach(el => {
        observer.observe(el);
    });

    // 2. Parallax effect for Hero Background
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroContent.style.opacity = 1 - (scrollY / 600);
        }
    });

    // 3. Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const timelinePhotos = document.querySelectorAll('.time-photo');

    const openLightbox = (src, caption) => {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
            lightboxCaption.textContent = '';
        }, 400); // Wait for transition
    };

    timelinePhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            const img = photo.querySelector('img');
            // Traverse up to find the corresponding title for caption
            const parentContent = photo.closest('.timeline-content');
            const caption = parentContent ? parentContent.querySelector('.time-title').textContent : '';
            if(img) openLightbox(img.src, caption);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close when clicking background
    lightbox.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox-bg')) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
