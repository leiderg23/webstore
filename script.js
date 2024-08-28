// JavaScript para controlar la visibilidad del botón
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('scroll-to-buy');
    const comprarSection = document.getElementById('comprar');

    function handleScroll() {
        const sectionTop = comprarSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition < sectionTop) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página
});

