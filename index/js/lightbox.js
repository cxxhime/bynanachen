class ProjectLightbox {
    constructor() {
        this.currentImages = [];
        this.currentIndex = 0;
        this.lightboxElement = null;
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.createLightbox();
        this.bindGlobalEvents();
        this.autoDetectImages();
    }
    
    createLightbox() {
        if (document.querySelector('.project-lightbox')) return;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'project-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <div class="lightbox-loading">
                    <div class="lightbox-spinner"></div>
                    Chargement...
                </div>
                <img class="lightbox-img" alt="">
                <button class="lightbox-navigation lightbox-prev">&lt;</button>
                <button class="lightbox-navigation lightbox-next">&gt;</button>
                <div class="lightbox-caption"></div>
            </div>
            <button class="lightbox-close">&times;</button>
        `;
        
        document.body.appendChild(lightbox);
        this.lightboxElement = lightbox;
        
        // Events internes
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.close());
        lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            this.prev();
        });
        lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            this.next();
        });
        
        // Fermer en cliquant sur le fond
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) this.close();
        });
    }
    
    autoDetectImages() {
        // Détecte automatiquement les images dans les carrousels
        document.addEventListener('click', (e) => {
            if (e.target.matches('.carousel-img')) {
                e.preventDefault();
                const carousel = e.target.closest('.project-carousel');
                if (carousel) {
                    const images = Array.from(carousel.querySelectorAll('.carousel-img'));
                    const imageData = images.map(img => ({
                        src: img.src,
                        alt: img.alt
                    }));
                    const currentIndex = images.indexOf(e.target);
                    this.openGallery(imageData, currentIndex);
                }
            }
            
            // Détecte aussi les images avec classe clickable
            if (e.target.matches('.lightbox-enabled, [data-lightbox]')) {
                e.preventDefault();
                this.open(e.target.src, e.target.alt);
            }
        });
    }
    
    bindGlobalEvents() {
        // Navigation clavier
        document.addEventListener('keydown', (e) => {
            if (!this.isOpen) return;
            
            switch(e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
            }
        });
        
        // Support tactile
        this.addTouchSupport();
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        document.addEventListener('touchstart', (e) => {
            if (!this.isOpen) return;
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!this.isOpen || !isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        document.addEventListener('touchend', () => {
            if (!this.isOpen || !isDragging) return;
            
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
        });
    }
    
    open(imageSrc, caption = '') {
        this.openGallery([{ src: imageSrc, alt: caption }], 0);
    }
    
    openGallery(images, startIndex = 0) {
        this.currentImages = images;
        this.currentIndex = startIndex;
        this.isOpen = true;
        
        this.showLoading();
        this.lightboxElement.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        this.loadImage(this.currentImages[this.currentIndex]);
        this.updateNavigation();
    }
    
    showLoading() {
        const loading = this.lightboxElement.querySelector('.lightbox-loading');
        const img = this.lightboxElement.querySelector('.lightbox-img');
        
        loading.style.display = 'block';
        img.style.display = 'none';
    }
    
    hideLoading() {
        const loading = this.lightboxElement.querySelector('.lightbox-loading');
        const img = this.lightboxElement.querySelector('.lightbox-img');
        
        loading.style.display = 'none';
        img.style.display = 'block';
    }
    
    loadImage(imageData) {
        const img = this.lightboxElement.querySelector('.lightbox-img');
        const caption = this.lightboxElement.querySelector('.lightbox-caption');
        
        this.showLoading();
        
        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = tempImg.src;
            img.alt = imageData.alt;
            caption.textContent = imageData.alt;
            caption.style.display = imageData.alt ? 'block' : 'none';
            this.hideLoading();
        };
        
        tempImg.onerror = () => {
            this.hideLoading();
            caption.textContent = 'Erreur de chargement de l\'image';
            caption.style.display = 'block';
        };
        
        tempImg.src = imageData.src;
    }
    
    updateNavigation() {
        const prevBtn = this.lightboxElement.querySelector('.lightbox-prev');
        const nextBtn = this.lightboxElement.querySelector('.lightbox-next');
        
        if (this.currentImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }
    
    next() {
        if (this.currentImages.length <= 1) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;
        this.loadImage(this.currentImages[this.currentIndex]);
    }
    
    prev() {
        if (this.currentImages.length <= 1) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
        this.loadImage(this.currentImages[this.currentIndex]);
    }
    
    close() {
        this.isOpen = false;
        this.lightboxElement.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            const img = this.lightboxElement.querySelector('.lightbox-img');
            img.src = '';
            this.currentImages = [];
            this.currentIndex = 0;
        }, 300);
    }
    
    static open(imageSrc, caption = '') {
        if (!window.projectLightboxInstance) {
            window.projectLightboxInstance = new ProjectLightbox();
        }
        window.projectLightboxInstance.open(imageSrc, caption);
    }
    
    static openGallery(images, startIndex = 0) {
        if (!window.projectLightboxInstance) {
            window.projectLightboxInstance = new ProjectLightbox();
        }
        window.projectLightboxInstance.openGallery(images, startIndex);
    }
}

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    window.projectLightboxInstance = new ProjectLightbox();
});

window.ProjectLightbox = ProjectLightbox;