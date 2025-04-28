document.addEventListener('DOMContentLoaded', function() {
    // Gestion des boutons "Voir plus" pour les projets
    const projectButtons = document.querySelectorAll('.project-details-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            
            if (details.style.display === 'block') {
                details.style.display = 'none';
                this.textContent = 'Voir plus';
            } else {
                details.style.display = 'block';
                this.textContent = 'Voir moins';
            }
        });
    });
    
    // Animation au défilement
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialiser les styles pour l'animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Vérifier au chargement et au défilement
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Ici, vous pourriez ajouter du code pour envoyer les données à un serveur
            console.log('Formulaire soumis:', { name, email, message });
            
            // Afficher un message de confirmation
            alert('Merci pour votre message, ' + name + ' ! Je vous répondrai dès que possible.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
    
    // Navigation fluide
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const starsContainer = document.querySelector('.stars-background');
        const starCount = 50; // Nombre d'étoiles
        
        // Création des étoiles
        for (let i = 0; i < starCount; i++) {
            createStar();
        }
        
        function createStar() {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Taille aléatoire (entre 1px et 3px)
            const size = Math.random() * 2 + 1;
            
            // Position aléatoire
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            
            // Durée et délai aléatoires
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            // Appliquer les styles
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${posX}px`;
            star.style.top = `${posY}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            // Optionnel : variation d'opacité
            star.style.opacity = Math.random() * 0.5 + 0.5;
            
            starsContainer.appendChild(star);
        }
        
        // Réinitialiser les étoiles quand la fenêtre est redimensionnée
        window.addEventListener('resize', function() {
            starsContainer.innerHTML = '';
            for (let i = 0; i < starCount; i++) {
                createStar();
            }
        });
    });
});