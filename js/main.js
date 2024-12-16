// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado y procesado");

    // Configuración del carrusel
    const carousel = document.querySelector('#carouselExample');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000, // Tiempo entre transiciones (ms)
            wrap: true // Permitir ciclo infinito
        });

        console.log("Carrusel inicializado:", carouselInstance);
    }

    // Modal: Evento de apertura y cierre
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', () => {
            console.log(`Modal abierto: ${modal.id}`);
        });

        modal.addEventListener('hide.bs.modal', () => {
            console.log(`Modal cerrado: ${modal.id}`);
        });
    });

    // Navegación del menú: Resaltar la sección activa al hacer clic
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            event.target.classList.add('active');
            console.log(`Sección activa: ${event.target.textContent}`);
        });
    });

    // Botón para desplazarse hacia arriba
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.classList.add('btn', 'btn-primary', 'back-to-top');
    document.body.appendChild(backToTopBtn);

    // Mostrar/Ocultar botón al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Evento de clic en el botón para volver al inicio
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
