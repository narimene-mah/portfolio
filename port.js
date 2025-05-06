document.addEventListener('DOMContentLoaded', () => {
    function initPortfolio() { 
        document.querySelectorAll('nav a').forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                document.querySelector(link.getAttribute('href'))
                    .scrollIntoView({ behavior: 'smooth' });
            };
        });
        document.querySelector('form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci !');
            e.target.reset();
        });
    }
    initPortfolio();
});