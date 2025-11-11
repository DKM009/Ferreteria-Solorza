// Datos de productos
const productos = [
    {
        id: 1,
        nombre: 'Armex',
        descripcion: 'Material de construcción versátil y resistente, ideal para trabajos de albañilería y construcción. El Armex es un material esencial en cualquier proyecto de construcción, conocido por su durabilidad y versatilidad.',
        descripcionCorta: 'Material de construcción versátil y resistente',
        precio: 450.00,
        stock: true,
        imagen: '🔨'
    },
    {
        id: 2,
        nombre: 'Acero',
        descripcion: 'Barras de acero para construcción de alta calidad. Perfectas para estructuras de concreto reforzado, con diferentes calibres disponibles según tus necesidades de construcción.',
        descripcionCorta: 'Barras de acero para construcción',
        precio: 380.00,
        stock: true,
        imagen: '⚙️'
    },
    {
        id: 3,
        nombre: 'Herramientas Manuales',
        descripcion: 'Set completo de herramientas manuales incluyendo llaves, martillos, destornilladores, alicates y más. Herramientas de calidad profesional para todos tus proyectos de reparación y construcción.',
        descripcionCorta: 'Llaves, martillos, destornilladores y más',
        precio: 250.00,
        stock: true,
        imagen: '🔧'
    },
    {
        id: 4,
        nombre: 'Pinturas y Acabados',
        descripcion: 'Pinturas de calidad para interiores y exteriores. Disponible en una amplia gama de colores y acabados. Pintura resistente al agua, rayos UV y con excelente cubrimiento.',
        descripcionCorta: 'Pinturas de calidad para interiores y exteriores',
        precio: 320.00,
        stock: true,
        imagen: '🎨'
    },
    {
        id: 5,
        nombre: 'WD 40',
        descripcion: 'Lubricante multiusos de alta calidad. Ideal para eliminar óxido, lubricar piezas metálicas, proteger contra la corrosión y facilitar el desmontaje de piezas atascadas.',
        descripcionCorta: 'Lubricante multiusos',
        precio: 180.00,
        stock: true,
        imagen: '💧'
    },
    {
        id: 6,
        nombre: 'Tuberías',
        descripcion: 'Tuberías de diferentes materiales (PVC, cobre, galvanizado) y medidas. Perfectas para instalaciones de plomería, riego y sistemas de agua. Disponibles en varios diámetros.',
        descripcionCorta: 'Tuberías de diferentes materiales y medidas',
        precio: 420.00,
        stock: true,
        imagen: '🔩'
    },
    {
        id: 7,
        nombre: 'Cables',
        descripcion: 'Cables eléctricos de diversas especificaciones y calibres. Cables de cobre de alta conductividad, con diferentes tipos de aislamiento según la aplicación. Cumple con normas de seguridad.',
        descripcionCorta: 'Cables eléctricos de diversas especificaciones',
        precio: 150.00,
        stock: true,
        imagen: '⚡'
    },
    {
        id: 8,
        nombre: 'Interruptores',
        descripcion: 'Interruptores y apagadores eléctricos de calidad. Disponibles en diferentes estilos y acabados. Fácil instalación y compatible con diferentes sistemas eléctricos.',
        descripcionCorta: 'Interruptores y apagadores eléctricos',
        precio: 95.00,
        stock: true,
        imagen: '🔌'
    },
    {
        id: 9,
        nombre: 'Lámparas',
        descripcion: 'Lámparas e iluminación para el hogar. Disponible en diferentes estilos, tamaños y tecnologías (LED, incandescente, fluorescente). Perfectas para iluminar cualquier espacio.',
        descripcionCorta: 'Lámparas e iluminación para el hogar',
        precio: 280.00,
        stock: true,
        imagen: '💡'
    },
    {
        id: 10,
        nombre: 'Equipos de Seguridad',
        descripcion: 'Equipo de seguridad completo incluyendo cascos, guantes, lentes de seguridad, chalecos reflectantes y más. Protección esencial para trabajos de construcción y reparación.',
        descripcionCorta: 'Cascos, guantes, lentes de seguridad y más',
        precio: 350.00,
        stock: true,
        imagen: '🛡️'
    }
];

// Variables del carousel
let currentPosition = 0;
let carouselInterval;
let isMoving = false;

// Inicializar carousel
function initCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;

    // Limpiar contenido previo
    carouselTrack.innerHTML = '';

    // Crear tarjetas de productos (duplicadas para efecto infinito)
    // Duplicamos 3 veces para tener suficiente contenido para el efecto infinito
    const productosDuplicados = [...productos, ...productos, ...productos];
    
    productosDuplicados.forEach((producto) => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.dataset.id = producto.id;
        card.innerHTML = `
            <div class="producto-img">${producto.imagen}</div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcionCorta || producto.descripcion}</p>
                <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
                <button class="btn-ver-detalle" onclick="verDetalle(${producto.id})">Ver Detalle</button>
            </div>
        `;
        carouselTrack.appendChild(card);
    });

    // Esperar a que las tarjetas se rendericen
    setTimeout(() => {
        // Calcular el ancho de una tarjeta
        const firstCard = carouselTrack.querySelector('.producto-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 20; // ancho + gap
            
            // Configurar el ancho total del track
            carouselTrack.style.width = `${productosDuplicados.length * cardWidth}px`;
        }

        // Iniciar auto-movimiento continuo
        startAutoCarousel();
    }, 100);

    // Botones de navegación
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoCarousel();
            moveCarouselManual(-1);
            startAutoCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoCarousel();
            moveCarouselManual(1);
            startAutoCarousel();
        });
    }

    // Pausar carousel al hacer hover
    carouselTrack.addEventListener('mouseenter', stopAutoCarousel);
    carouselTrack.addEventListener('mouseleave', startAutoCarousel);
}

// Mover carousel manualmente (con botones)
function moveCarouselManual(direction) {
    if (isMoving) return;
    isMoving = true;

    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) {
        isMoving = false;
        return;
    }

    const firstCard = carouselTrack.querySelector('.producto-card');
    if (!firstCard) {
        isMoving = false;
        return;
    }

    const cardWidth = firstCard.offsetWidth + 20;
    const maxPosition = productos.length * cardWidth;

    currentPosition -= direction * cardWidth;

    // Aplicar transición suave para movimiento manual
    carouselTrack.style.transition = 'transform 0.5s ease';

    // Si nos movemos más allá del primer conjunto, volver al inicio
    if (Math.abs(currentPosition) >= maxPosition) {
        currentPosition = 0;
        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = `translateX(${currentPosition}px)`;
        setTimeout(() => {
            carouselTrack.style.transition = 'transform 0.5s ease';
            isMoving = false;
        }, 50);
    } else {
        carouselTrack.style.transform = `translateX(${currentPosition}px)`;
        setTimeout(() => {
            isMoving = false;
            // Restaurar transición linear para auto-movimiento
            carouselTrack.style.transition = 'none';
        }, 500);
    }
}

// Auto-movimiento continuo del carousel (efecto tren)
function startAutoCarousel() {
    stopAutoCarousel();
    
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;

    const firstCard = carouselTrack.querySelector('.producto-card');
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 20;
    const maxPosition = productos.length * cardWidth;

    // Configurar transición linear para movimiento suave
    carouselTrack.style.transition = 'none';

    carouselInterval = setInterval(() => {
        if (isMoving) return;

        currentPosition -= 1; // Mover 1px a la vez para movimiento visible pero suave

        // Si llegamos al final del primer conjunto, reiniciar sin transición
        if (Math.abs(currentPosition) >= maxPosition) {
            currentPosition = 0;
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            // Forzar reflow para aplicar el cambio
            void carouselTrack.offsetHeight;
        } else {
            carouselTrack.style.transform = `translateX(${currentPosition}px)`;
        }
    }, 30); // Actualizar cada 30ms para movimiento visible pero fluido
}

function stopAutoCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// Navegación suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Menú móvil
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
}

// Función para ver detalle del producto
function verDetalle(productoId) {
    // Guardar el producto seleccionado en localStorage
    localStorage.setItem('productoSeleccionado', productoId);
    // Redirigir a la página de detalle
    window.location.href = 'detalle-producto.html';
}

// Guardar productos en localStorage para uso en otras páginas
function saveProductsToStorage() {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initSmoothScroll();
    initMobileMenu();
    saveProductsToStorage();

});

// Mostrar mensaje de retroalimentación
function showMessage(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje ${tipo} mostrar`;
    mensajeDiv.textContent = mensaje;
    
    const container = document.querySelector('.producto-detalle-info') || document.body;
    container.insertBefore(mensajeDiv, container.firstChild);
    
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

