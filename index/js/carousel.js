class ProjectCarousel {
    constructor(element) {
        this.container = element;
        this.currentIndex = 0;
        this.images = JSON.parse(element.dataset.images || '[]');
        this.descriptions = JSON.parse(element.dataset.descriptions || '[]');
        this.title = element.dataset.title || 'Product Showcase';
        this.subtitle = element.dataset.subtitle || '';
        this.autoplayInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.images.length === 0) {
            console.warn('Aucune image fournie pour le carrousel');
            return;
        }
        
        this.render();
        this.bindEvents();
        this.startAutoplay();
    }
    
    render() {
        this.container.innerHTML = `
            <h2>${this.title}</h2>
            <p>${this.subtitle}</p>
            
            <div class="carousel-wrapper">
                <div class="carousel-container">
                    ${this.images.map((img, index) => `
                        <img src="${img}" 
                             alt="${this.descriptions[index] || `Screenshot ${index + 1}`}" 
                             class="carousel-img ${index === 0 ? 'active' : ''}"
                             data-index="${index}">
                    `).join('')}
                </div>
                
                <div class="carousel-controls">
                    <div class="carousel-dots">
                        ${this.images.map((_, index) => `
                            <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                        `).join('')}
                    </div>
                    
                    <div class="carousel-arrows">
                        <button class="carousel-arrow prev">&lt;</button>
                        <button class="carousel-arrow next">&gt;</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    bindEvents() {
        // Navigation par flèches
        this.container.querySelector('.prev').addEventListener('click', () => this.prev());
        this.container.querySelector('.next').addEventListener('click', () => this.next());
        
        // Navigation par dots
        this.container.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });
        
        // Clic sur image pour lightbox
        this.container.querySelectorAll('.carousel-img').forEach(img => {
            img.addEventListener('click', () => {
                if (window.ProjectLightbox) {
                    window.ProjectLightbox.open(img.src, img.alt);
                }
            });
        });
        
        // Pause autoplay au hover
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Support tactile
        this.addTouchSupport();
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        const container = this.container.querySelector('.carousel-container');
        
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoplay();
        });
        
        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        container.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const diffX = startX - currentX;
            const threshold = 50;
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            
            isDragging = false;
            this.startAutoplay();
        });
    }
    
    goTo(index) {
        if (index < 0 || index >= this.images.length) return;
        
        // Retire active de tout
        this.container.querySelectorAll('.carousel-img, .dot').forEach(el => {
            el.classList.remove('active');
        });
        
        // Ajoute active aux nouveaux éléments
        this.container.querySelector(`.carousel-img[data-index="${index}"]`).classList.add('active');
        this.container.querySelector(`.dot[data-index="${index}"]`).classList.add('active');
        
        this.currentIndex = index;
    }
    
    next() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.goTo(nextIndex);
    }
    
    prev() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.goTo(prevIndex);
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.next(), 4000);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    destroy() {
        this.stopAutoplay();
        this.container.innerHTML = '';
    }
}

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.project-carousel');
    carousels.forEach(carousel => new ProjectCarousel(carousel));
});

window.ProjectCarousel = ProjectCarousel;