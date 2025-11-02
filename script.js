// Efectos interactivos adicionales
document.addEventListener('DOMContentLoaded', () => {
    const socialCards = document.querySelectorAll('.social-card');
    const avatar = document.querySelector('.avatar');
    const avatarModal = document.getElementById('avatarModal');
    const closeModal = document.getElementById('closeModal');
    
    // Modal de avatar
    avatar.addEventListener('click', () => {
        avatarModal.classList.add('active');
    });

    closeModal.addEventListener('click', (e) => {
        e.stopPropagation();
        avatarModal.classList.remove('active');
    });

    avatarModal.addEventListener('click', (e) => {
        if (e.target === avatarModal) {
            avatarModal.classList.remove('active');
        }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            avatarModal.classList.remove('active');
        }
    });
    
    // Efecto parallax 3D mejorado en hover
    socialCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
        });

        // Efecto de pulso al cargar
        card.style.animation = `cardSlideIn 0.6s ease-out backwards`;
    });

    // Animación de los botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.8)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'rippleAnimation 0.6s ease-out';
            
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Scroll reveal animation mejorada
    const revealElements = document.querySelectorAll('.social-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'cardSlideIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Efecto de glow al hacer hover
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) drop-shadow(0 0 20px rgba(255,255,255,0.2))';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))';
        });
    });
});

// Agregar estilos de animación de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnimation {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }

    @keyframes cardSlideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
