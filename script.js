// ============================================
// BASE DE CONOCIMIENTO DEL BOT
// ============================================
const botKnowledge = {
    nombre: "Pablo Pacheco",
    ubicacion: "Colombia",
    profesion: "Desarrollador",
    redes: {
        instagram: { usuario: "Viritaa", url: "https://www.instagram.com/viritaa/" },
        twitter: { usuario: "@PabloPa", url: "https://x.com/PabloPa60004399" },
        linkedin: { usuario: "Pablo Pacheco", url: "https://www.linkedin.com/in/pablo-pacheco-aa7113291/" },
        youtube: { usuario: "@pablo pacheco7442", url: "https://www.youtube.com/@pablopacheco7442" },
        github: { usuario: "PabloPachecoB", url: "https://github.com/PabloPachecoB" },
        tiktok: { usuario: "@virita91", url: "https://www.tiktok.com/@virita91" }
    },
    habilidades: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "Responsive Design"],
    intereses: ["Desarrollo web", "Código limpio", "UI/UX", "Tecnología"],
    contacto: "Puedes contactarme a través de mis redes sociales"
};

// ============================================
// RESPUESTAS PREDEFINIDAS DEL BOT
// ============================================
const botResponses = {
    saludo: [
        "¡Hola! 👋 Soy un bot que conoce todo sobre Pablo. ¿Qué te gustaría saber?",
        "¡Bienvenido! ¿En qué puedo ayudarte sobre Pablo?",
        "¡Hola! Pregúntame lo que quieras saber sobre Pablo. 😊"
    ],
    nombre: [
        `Me llamo ${botKnowledge.nombre}, es un gusto conocerte.`,
        `Soy ${botKnowledge.nombre}. ¿Hay algo que quieras saber sobre mí?`,
        `Mi nombre es ${botKnowledge.nombre} y soy de ${botKnowledge.ubicacion}. ¿En qué puedo ayudarte?`
    ],
    redes: [
        `Pablo está en varias redes sociales: Instagram (${botKnowledge.redes.instagram.usuario}), Twitter (${botKnowledge.redes.twitter.usuario}), LinkedIn, YouTube, GitHub y TikTok.`,
        `Puedes encontrar a Pablo en: 📱 Instagram, 🐦 Twitter, 💼 LinkedIn, 📺 YouTube, 💻 GitHub y TikTok.`,
        `Síguelo en todas sus redes: ${Object.values(botKnowledge.redes).map(r => r.usuario).join(", ")}`
    ],
    habilidades: [
        `Pablo domina: ${botKnowledge.habilidades.join(", ")}`,
        `Las habilidades de Pablo incluyen: ${botKnowledge.habilidades.join(", ")}`,
        `Algunas de sus habilidades: ${botKnowledge.habilidades.slice(0, 5).join(", ")} y más.`
    ],
    contacto: [
        `${botKnowledge.contacto} Puedes encontrarme en mis redes sociales.`,
        `La mejor forma de contactar a Pablo es a través de sus redes sociales. ¡Síguelo!`,
        `Conéctate con Pablo en: Instagram, Twitter, LinkedIn, YouTube, GitHub o TikTok.`
    ],
    ayuda: [
        "Puedo decirte: quién es Pablo, sus redes sociales, habilidades, cómo contactarlo, o cualquier otra cosa sobre él.",
        "Pregúntame sobre: nombre, redes sociales, habilidades, contacto, o simplemente ¡hablemos!",
        "Puedo ayudarte con: ¿Quién es Pablo? Sus redes, habilidades, contacto... ¿Qué te gustaría saber?"
    ],
    default: [
        "Interesante pregunta. 🤔 Intenta preguntarme sobre: nombre, redes sociales, habilidades o contacto.",
        "No estoy seguro de eso, pero puedo contarte más sobre Pablo. ¿Qué te gustaría saber?",
        "Esa pregunta se escapa de mi conocimiento, pero si quieres saber sobre Pablo, ¡estoy aquí para ayudarte!"
    ]
};

// ============================================
// SISTEMA DE CÓDIGO HACKER CONECTADO
// ============================================
class HackerCodeSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.elements = [];
        this.elementCount = window.innerWidth > 768 ? 40 : 20;
        this.connectionDistance = 200;
        
        // Caracteres hacker
        this.chars = ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F', '$', '#', '@', '!', '%', '&', '*', '+', '=', '<', '>', '?', '[', ']', '{', '}', '|', '/', '\\', '~', '^'];
        this.commands = ['> HACK', '> ACCESS', '> SCAN', '> DETECT', '> EXECUTE', '> UPLOAD', '> DOWNLOAD', '> CONNECT', '> FIREWALL', '> SECURE'];
        
        this.resizeCanvas();
        this.createElements();
        this.animate();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createElements() {
        this.elements = [];
        for (let i = 0; i < this.elementCount; i++) {
            const isCommand = Math.random() > 0.7;
            const text = isCommand 
                ? this.commands[Math.floor(Math.random() * this.commands.length)]
                : this.chars[Math.floor(Math.random() * this.chars.length)] + 
                  this.chars[Math.floor(Math.random() * this.chars.length)] +
                  this.chars[Math.floor(Math.random() * this.chars.length)];
            
            this.elements.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                text: text,
                size: isCommand ? 14 : 12,
                opacity: Math.random() * 0.6 + 0.4,
                isCommand: isCommand,
                rotation: Math.random() * Math.PI * 2
            });
        }
    }

    update() {
        this.elements.forEach(element => {
            element.x += element.vx;
            element.y += element.vy;
            element.rotation += 0.01;

            // Rebotar en los bordes
            if (element.x < 0 || element.x > this.canvas.width) {
                element.vx *= -1;
                element.x = Math.max(0, Math.min(this.canvas.width, element.x));
            }
            if (element.y < 0 || element.y > this.canvas.height) {
                element.vy *= -1;
                element.y = Math.max(0, Math.min(this.canvas.height, element.y));
            }

            // Cambiar opacidad suavemente
            element.opacity += (Math.random() - 0.5) * 0.01;
            element.opacity = Math.max(0.2, Math.min(0.8, element.opacity));
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibujar conexiones primero (atrás)
        for (let i = 0; i < this.elements.length; i++) {
            for (let j = i + 1; j < this.elements.length; j++) {
                const dx = this.elements[i].x - this.elements[j].x;
                const dy = this.elements[i].y - this.elements[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const opacity = (1 - distance / this.connectionDistance) * 0.3;
                    const isConnected = this.elements[i].isCommand && this.elements[j].isCommand;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.elements[i].x, this.elements[i].y);
                    this.ctx.lineTo(this.elements[j].x, this.elements[j].y);
                    this.ctx.strokeStyle = isConnected 
                        ? `rgba(255, 0, 100, ${opacity})` 
                        : `rgba(102, 126, 234, ${opacity})`;
                    this.ctx.lineWidth = isConnected ? 2 : 1;
                    this.ctx.stroke();
                }
            }
        }

        // Dibujar elementos de código
        this.elements.forEach(element => {
            this.ctx.save();
            this.ctx.translate(element.x, element.y);
            this.ctx.rotate(element.rotation);
            
            this.ctx.font = `bold ${element.size}px 'Courier New', monospace`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            
            if (element.isCommand) {
                // Comandos en rojo/magenta
                this.ctx.fillStyle = `rgba(255, 0, 100, ${element.opacity})`;
                this.ctx.shadowColor = `rgba(255, 0, 100, ${element.opacity * 0.8})`;
                this.ctx.shadowBlur = 10;
            } else {
                // Binarios en azul
                this.ctx.fillStyle = `rgba(102, 126, 234, ${element.opacity})`;
                this.ctx.shadowColor = `rgba(102, 126, 234, ${element.opacity * 0.6})`;
                this.ctx.shadowBlur = 5;
            }
            
            this.ctx.fillText(element.text, 0, 0);
            this.ctx.restore();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// FUNCIONES DEL BOT CHAT
// ============================================

// Obtener respuesta contextualizada del bot
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();

    // Detectar intención del usuario
    if (message.includes("hola") || message.includes("hi") || message.includes("hey") || message.includes("buenos")) {
        return botResponses.saludo[Math.floor(Math.random() * botResponses.saludo.length)];
    }
    
    if (message.includes("nombre") || message.includes("quién eres") || message.includes("who are you") || message.includes("como te llamas")) {
        return botResponses.nombre[Math.floor(Math.random() * botResponses.nombre.length)];
    }
    
    if (message.includes("red") || message.includes("instagram") || message.includes("twitter") || message.includes("linkedin") || message.includes("youtube") || message.includes("github") || message.includes("tiktok") || message.includes("sígueme") || message.includes("redes")) {
        return botResponses.redes[Math.floor(Math.random() * botResponses.redes.length)];
    }
    
    if (message.includes("habilidad") || message.includes("sabe") || message.includes("domina") || message.includes("skill") || message.includes("lenguaje")) {
        return botResponses.habilidades[Math.floor(Math.random() * botResponses.habilidades.length)];
    }
    
    if (message.includes("contacto") || message.includes("contact") || message.includes("email") || message.includes("correo") || message.includes("como contactar")) {
        return botResponses.contacto[Math.floor(Math.random() * botResponses.contacto.length)];
    }
    
    if (message.includes("ayuda") || message.includes("help") || message.includes("qué puedes") || message.includes("qué sabes")) {
        return botResponses.ayuda[Math.floor(Math.random() * botResponses.ayuda.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
}

// Enviar mensaje en el chat
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messagesContainer = document.getElementById('chatMessages');
    const message = input.value.trim();

    if (message === '') return;

    // Agregar mensaje del usuario
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'chat-message user';
    userMessageDiv.innerHTML = `<div class="message-content">${message}</div>`;
    messagesContainer.appendChild(userMessageDiv);

    input.value = '';
    input.focus();

    // Simular que el bot está escribiendo
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'chat-message bot';
        botMessageDiv.innerHTML = `<div class="message-content">${botResponse}</div>`;
        messagesContainer.appendChild(botMessageDiv);

        // Scroll automático al último mensaje
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);

    // Scroll automático
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ============================================
// EFECTO DE MÁQUINA DE ESCRIBIR
// ============================================
function typeWriter() {
    const text = "Pablo Pacheco";
    const element = document.getElementById('typingName');
    let index = 0;

    element.innerHTML = '';

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
}

// ============================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar máquina de escribir
    typeWriter();

    // Iniciar sistema de código hacker
    const canvas = document.getElementById('particlesCanvas');
    new HackerCodeSystem(canvas);

    const socialCards = document.querySelectorAll('.social-card');
    const avatar = document.querySelector('.avatar');
    const avatarModal = document.getElementById('avatarModal');
    const closeModal = document.getElementById('closeModal');
    
    // ============================================
    // EVENT LISTENERS: Modal de Avatar
    // ============================================
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
    
    // ============================================
    // EVENT LISTENERS: Efecto Parallax 3D
    // ============================================
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

        // Animación de entrada
        card.style.animation = `cardSlideIn 0.6s ease-out backwards`;
    });

    // ============================================
    // EVENT LISTENERS: Efecto Ripple en Botones
    // ============================================
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

    // ============================================
    // EVENT LISTENERS: Chat Bot
    // ============================================
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chatContainer');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    // Abrir/Cerrar chat con botón flotante
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            chatContainer.classList.toggle('active');
            chatButton.classList.toggle('active');
            if (chatContainer.classList.contains('active')) {
                chatInput.focus();
            }
        });
    }

    // Cerrar chat con botón de cerrar
    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatContainer.classList.remove('active');
            chatButton.classList.remove('active');
        });
    }

    // Enviar mensaje con Enter
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }

    // Enviar mensaje con botón
    if (chatSend) {
        chatSend.addEventListener('click', sendChatMessage);
    }

    // ============================================
    // EVENT LISTENERS: Scroll Reveal Animation
    // ============================================
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

    // ============================================
    // EVENT LISTENERS: Glow Effect
    // ============================================
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) drop-shadow(0 0 20px rgba(255,255,255,0.2))';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))';
        });
    });
});

// ============================================
// ESTILOS DE ANIMACIÓN GLOBALES
// ============================================
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
