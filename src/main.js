import { narrativeConfig } from './narrative_config.js';
import { parseInnerThoughts } from './scripts/narrative_utils.js';

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    initAnimations();
    initLightbox();
});

function renderGallery() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const line = container.querySelector('.timeline-line');
    container.innerHTML = '';
    container.appendChild(line);

    narrativeConfig.chapters.forEach((chapter, chapterIndex) => {
        const isLeft = chapterIndex % 2 === 0;
        const chapterEl = document.createElement('div');
        chapterEl.className = `timeline-item ${isLeft ? 'left' : 'right'} animate-time chapter-section`;
        
        const storyHtml = chapter.story.split('\n').map(p => `<p class="time-text">${p}</p>`).join('');

        // Generate Gallery HTML for all sections in this chapter
        let galleryHtml = '';
        chapter.sections.forEach(section => {
            galleryHtml += `
                <div class="folder-section">
                    <h4 class="folder-name">${section.name}</h4>
                    <div class="photo-grid">
                        ${section.images.map(img => {
                            const rotation = (Math.random() * 4 - 2).toFixed(1); // -2deg to 2deg
                            const { main, inner } = parseInnerThoughts(img.desc);
                            const innerThoughtHtml = inner ? `
                                <div class="inner-thought-container">
                                    <span class="inner-thought-trigger">💭</span>
                                    <span class="inner-thought-text">${inner}</span>
                                </div>
                            ` : '';

                            return `
                                <div class="grid-item" style="transform: rotate(${rotation}deg)">
                                    <div class="time-photo">
                                        <img src="/assets/img/stories/${section.name}/${img.src}" alt="${img.desc}" loading="lazy">
                                    </div>
                                    <div class="sticky-note">
                                        <span class="photo-desc">${main}</span>
                                        ${innerThoughtHtml}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });

        chapterEl.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="time-date">${chapter.period}</div>
                <h2 class="time-title">${chapter.title}</h2>
                <div class="story-container">
                    ${storyHtml}
                </div>
                ${galleryHtml}
            </div>
        `;
        container.appendChild(chapterEl);
    });
}

function initAnimations() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, observerOptions);

    document.querySelectorAll('.animate-time').forEach(el => observer.observe(el));
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    document.addEventListener('click', (e) => {
        const photo = e.target.closest('.time-photo img');
        if (photo) {
            lightboxImg.src = photo.src;
            lightboxCaption.innerText = photo.alt;
            lightbox.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }
    });

    document.getElementById('lightbox-close')?.addEventListener('click', () => {
        lightbox.classList.remove('is-active');
        document.body.style.overflow = '';
    });
}
