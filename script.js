// Datos de productos
const productos = [
   /* {
        id: 1,
        nombre: 'Armex',
        descripcion: 'Material de construcción versátil y resistente, ideal para trabajos de albañilería y construcción. El Armex es un material esencial en cualquier proyecto de construcción, conocido por su durabilidad y versatilidad.',
        descripcionCorta: 'Material de construcción versátil y resistente',
        precio: 450.00,
        stock: true,
        imagen: '🔨'
    },
    {
        id: 1,
        nombre: 'Careta para soldar',
        descripcion: 'Careta de soldador de alta calidad.',
        descripcionCorta: 'Careta de soldador de alta calidad.',
        precio: 380.00,
        stock: true,
        imagen: '<img src="Img/Imagen%20de%20WhatsApp%202025-11-11%20a%20las%2009.26.10_e54b7e24.jpg" alt="Careta para soldar">'
    },
    {
        id: 2,
        nombre: 'Esmeriladora',
        descripcion: 'Esmeriladora de alta calidad, ideal para cortar, pulir y desbastar materiales metálicos. Potente motor que permite trabajos eficientes en talleres y proyectos de construcción.',
        descripcionCorta: 'Esmeriladora de alta calidad para cortar y pulir',
        precio: 250.00,
        stock: true,
        imagen: '<img src="Img/Imagen%20de%20WhatsApp%202025-11-11%20a%20las%2009.26.11_844b4aa8.jpg" alt="Esmeriladora">'
    },
    {
        id: 3,
        nombre: 'Bolsa de grapas para alambre de púas',
        descripcion: 'Bolsa de grapas especiales para alambre de púas. Grapas de alta resistencia y durabilidad, ideales para cercas y trabajos de seguridad perimetral. Material de calidad que garantiza sujeción firme y duradera.',
        descripcionCorta: 'Grapas especiales para alambre de púas',
        precio: 320.00,
        stock: true,
        imagen: '<img src="Img/Imagen%20de%20WhatsApp%202025-11-11%20a%20las%2009.26.11_37950bca.jpg" alt="Bolsa de grapas para alambre de púas">'
    },
    {
        id: 4,
        nombre: 'Rotomartillo',
        descripcion: 'Rotomartillo profesional de alta potencia, ideal para perforar concreto, mampostería y materiales duros. Herramienta versátil con múltiples velocidades y funciones de percusión para trabajos de construcción y remodelación.',
        descripcionCorta: 'Rotomartillo profesional de alta potencia',
        precio: 180.00,
        stock: true,
        imagen: '<img src="Img/Imagen%20de%20WhatsApp%202025-11-11%20a%20las%2009.26.11_42ad96ff.jpg" alt="Rotomartillo">'
    },*/
    {
        id: 5,
        nombre: 'Cilindro de gas',
        categoria: 'herramientas',
        descripcion: 'Cilindro de gas para uso doméstico e industrial. Contenedor seguro y resistente para almacenamiento de gas LP. Fabricado con materiales de alta calidad que garantizan seguridad y durabilidad en el transporte y uso de gas.',
        descripcionCorta: 'Cilindro de gas seguro y resistente',
        precio: 800.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.48_38ecfaa4.jpg" alt="Producto catálogo 01">'
    },
    {
        id: 6,
        nombre: 'Wiros para cortar pastos',
        categoria: 'herramientas',
        descripcion: 'Wiros (alambre) especializados para cortadora de césped. Alambre de alta resistencia y durabilidad, diseñado específicamente para máquinas cortadoras de pasto. Ideal para mantenimiento de jardines y áreas verdes.',
        descripcionCorta: 'Alambre resistente para cortadoras de césped',
        precio: 7200.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.51_3d98a694.jpg" alt="Producto catálogo 02">'
    },
    {
        id: 7,
        nombre: 'Carretilla Truper',
        categoria: 'herramientas',
        descripcion: 'Carretilla marca Truper de alta calidad y resistencia. Ideal para transportar materiales de construcción, tierra, arena y escombros. Fabricada con materiales duraderos que soportan cargas pesadas. Rueda reforzada y estructura robusta para trabajos exigentes.',
        descripcionCorta: 'Carretilla resistente para materiales de construcción',
        precio: 1350.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.51_3e6a5e9a.jpg" alt="Producto catálogo 03">'
    },
    {
        id: 8,
        nombre: 'Motosierras',
        categoria: 'herramientas',
        descripcion: 'Motosierras profesionales de alta potencia para corte de madera y tala de árboles. Motor potente y eficiente, diseño ergonómico para comodidad durante el uso prolongado. Ideal para trabajos forestales, jardinería y construcción. Incluyen sistema de seguridad y cadena de corte de calidad.',
        descripcionCorta: 'Motosierras profesionales de alta potencia',
        precio: 2400.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.51_6e8cf919.jpg" alt="Producto catálogo 04">'
    },
    {
        id: 9,
        nombre: 'Soldadora wolkers',
        categoria: 'herramientas',
        descripcion: 'Soldadora marca Wolkers profesional de alto rendimiento. Equipo versátil para soldadura por arco eléctrico. Control de corriente ajustable, ideal para trabajos de metalurgia, construcción y reparaciones. Máquina confiable y duradera para proyectos profesionales.',
        descripcionCorta: 'Soldadora profesional de alto rendimiento',
        precio: 3600.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.51_c2a71fc2.jpg" alt="Producto catálogo 05">'
    },
    {
        id: 10,
        nombre: 'Alambre recocido',
        categoria: 'herramientas',
        descripcion: 'Alambre recocido de alta calidad, flexible y maleable. Ideal para trabajos de amarre, construcción, cerco y uniones. Alambre suave y fácil de manipular, perfecto para proyectos de construcción, jardinería y reparaciones generales. Disponible en diferentes calibres.',
        descripcionCorta: 'Alambre flexible ideal para amarre y construcción',
        precio: 27.00,
        porKilo: true,
        unidad: 'kg',
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.51_fab4a8c6.jpg" alt="Producto catálogo 06">'
    },
    {
        id: 11,
        nombre: 'Soldadura',
        categoria: 'herramientas',
        descripcion: 'Varillas de soldadura de alta calidad para trabajos de unión de metales. Material de soldadura profesional que garantiza uniones fuertes y duraderas. Ideal para trabajos de reparación, construcción y metalurgia. Disponible en diferentes tipos según el material a soldar.',
        descripcionCorta: 'Varillas de soldadura de alta calidad',
        precio: 70.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.52_0f83db24.jpg" alt="Producto catálogo 07">'
    },
    {
        id: 12,
        nombre: 'Pinzas para cortar cable',
        categoria: 'herramientas',
        descripcion: 'Pinzas cortacables profesionales de alta resistencia. Herramienta especializada para cortar cables eléctricos de diferentes calibres. Mango ergonómico y cuchillas afiladas de acero templado. Ideal para electricistas y trabajos de instalación eléctrica.',
        descripcionCorta: 'Pinzas profesionales para cortar cables',
        precio: 180.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.52_2d8d247b.jpg" alt="Producto catálogo 08">'
    },
    {
        id: 13,
        nombre: 'Caja de herramientas',
        categoria: 'herramientas',
        descripcion: 'Caja de herramientas resistente y organizada para almacenar y transportar herramientas. Estructura robusta con múltiples compartimentos y bandejas organizadoras. Ideal para mantener tus herramientas seguras y ordenadas. Perfecta para profesionales y aficionados al bricolaje.',
        descripcionCorta: 'Caja resistente para organizar herramientas',
        precio: 250.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.52_32226a43.jpg" alt="Producto catálogo 09">'
    },
    {
        id: 14,
        nombre: 'Letrero de no estacionarse',
        categoria: 'herramientas',
        descripcion: 'Letrero de señalización "Prohibido Estacionarse" de alta visibilidad. Material resistente a la intemperie con mensaje claro y visible. Ideal para seguridad, control de acceso y señalización en estacionamientos, propiedades privadas y áreas restringidas.',
        descripcionCorta: 'Letrero de señalización resistente a la intemperie',
        precio: 90.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.52_3c621aa7.jpg" alt="Producto catálogo 10">'
    },
    {
        id: 15,
        nombre: 'Pico Truper',
        categoria: 'herramientas',
        descripcion: 'Pico marca Truper de alta calidad y durabilidad. Herramienta esencial para excavación, rompimiento de tierra dura y trabajos de construcción. Mango ergonómico y cabeza de acero templado resistente. Ideal para trabajos de albañilería, jardinería y construcción.',
        descripcionCorta: 'Pico resistente para excavación y construcción',
        precio: 480.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.52_545ed2ae.jpg" alt="Producto catálogo 11">'
    },
    {
        id: 16,
        nombre: 'Palas Truper',
        categoria: 'herramientas',
        descripcion: 'Palas marca Truper de excelente calidad y resistencia. Herramienta versátil para cavar, mover tierra, arena y materiales de construcción. Mango ergonómico y hoja de acero resistente. Disponible en diferentes tamaños según tus necesidades de trabajo.',
        descripcionCorta: 'Palas resistentes para construcción y jardinería',
        precio: 320.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.52_ebc2bf42.jpg" alt="Producto catálogo 12">'
    },
    {
        id: 17,
        nombre: 'Tinaco iusa con base',
        categoria: 'materiales-construccion',
        descripcion: 'Tinaco marca IUSA con base incluida para almacenamiento de agua. Capacidad amplia y diseño resistente para uso doméstico. Material de calidad que mantiene el agua limpia y protegida. Base incluida para instalación segura. Ideal para sistemas de agua potable en hogares.',
        descripcionCorta: 'Tinaco con base para almacenamiento de agua',
        precio: 3350.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.53_7081627a.jpg" alt="Producto catálogo 13">'
    },
    {
        id: 18,
        nombre: 'Mangera de 1/2 truper',
        categoria: 'materiales-construccion',
        descripcion: 'Manguera de media pulgada (1/2") marca Truper de alta calidad. Resistente a la presión y condiciones climáticas. Ideal para sistemas de riego, conexiones de agua y trabajos de plomería. Material duradero que garantiza larga vida útil.',
        descripcionCorta: 'Manguera de 1/2" resistente y duradera',
        precio: 260.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.53_70f24c83.jpg" alt="Producto catálogo 14">'
    },
    {
        id: 19,
        nombre: 'Juego de matraca',
        categoria: 'herramientas',
        descripcion: 'Juego completo de matraca (llave de trinquete) con múltiples tamaños de sockets. Herramienta versátil para apretar y aflojar tornillos y tuercas. Incluye diferentes medidas para cubrir diversas necesidades. Ideal para mecánicos, técnicos y trabajos de reparación.',
        descripcionCorta: 'Juego completo de matraca con sockets',
        precio: 150.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.53_8742182d.jpg" alt="Producto catálogo 15">'
    },
    {
        id: 20,
        nombre: 'Bultos de cemento 50 kg',
        categoria: 'materiales-construccion',
        descripcion: 'Bultos de cemento de alta calidad para construcción. Material esencial para trabajos de albañilería, mezclas de concreto y proyectos de construcción. Cemento de excelente resistencia y durabilidad, garantizando estructuras sólidas y duraderas.',
        descripcionCorta: 'Cemento Monterrey para construcción',
        precio: 232.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.53_e8ea7b3f.jpg" alt="Producto catálogo 16">'
    },
    {
        id: 21,
        nombre: 'Esmeriladora de banco',
        categoria: 'herramientas',
        descripcion: 'Esmeriladora de banco profesional para trabajos de afilado, pulido y desbaste. Motor potente con base estable para trabajo seguro. Ideal para talleres, herrerías y trabajos de metalurgia. Incluye protección y discos abrasivos de calidad.',
        descripcionCorta: 'Esmeriladora de banco profesional para afilado',
        precio: 1250.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.53_f96e78e3.jpg" alt="Producto catálogo 17">'
    },
    {
        id: 22,
        nombre: 'Disco de corte makita',
        categoria: 'herramientas',
        descripcion: 'Discos de corte marca Makita de alta calidad y durabilidad. Diseñados para cortar materiales metálicos, concreto y mampostería. Disco abrasivo resistente que garantiza cortes precisos y limpios. Compatible con esmeriladoras y herramientas de corte.',
        descripcionCorta: 'Discos de corte de alta calidad para metales',
        precio: 45.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.54_09990fe7.jpg" alt="Producto catálogo 18">'
    },
    {
        id: 23,
        nombre: 'Tuberia pvc',
        categoria: 'materiales-construccion',
        descripcion: 'Tubería de PVC de alta calidad para instalaciones de plomería y sistemas de agua. Material resistente, ligero y duradero. Ideal para conducciones de agua potable, drenaje y sistemas de riego. Disponible en diferentes diámetros y longitudes.',
        descripcionCorta: 'Tubería PVC para instalaciones de plomería',
        precio: 190.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.54_de22ad31.jpg" alt="Producto catálogo 19">'
    },
    {
        id: 24,
        nombre: 'Careta de soldador',
        categoria: 'herramientas',
        descripcion: 'Careta de protección para soldador con visor oscuro ajustable. Protección completa para ojos y rostro durante trabajos de soldadura. Filtro de luz automático que protege contra radiación ultravioleta e infrarroja. Diseño ergonómico y cómodo para uso prolongado.',
        descripcionCorta: 'Careta de protección con visor ajustable',
        precio: 1800.00,
        stock: true,
        imagen: '<img src="Img/ProductosIMG/Imagen%20de%20WhatsApp%202025-11-17%20a%20las%2017.41.54_fe5d72ec.jpg" alt="Producto catálogo 20">'
    },
    {
        id: 25,
        nombre: 'Armex',
        categoria: 'materiales-construccion',
        descripcion: 'Malla electrosoldada Armex de alta calidad para refuerzo de concreto. Material esencial en construcción para losas, muros y elementos estructurales. Fabricada con acero de alta resistencia que garantiza durabilidad y seguridad en las construcciones.',
        descripcionCorta: 'Malla electrosoldada para refuerzo de concreto',
        precio: 450.00,
        stock: true,
        imagen: '🔨'
    },
    {
        id: 26,
        nombre: 'Varilla corrugada',
        categoria: 'materiales-construccion',
        descripcion: 'Varilla corrugada de acero de alta calidad para refuerzo estructural en construcción. Disponible en diferentes calibres según las necesidades del proyecto. Material esencial para la construcción de losas, vigas, columnas y muros de concreto reforzado.',
        descripcionCorta: 'Varilla de acero para refuerzo estructural',
        precio: 180.00,
        stock: true,
        imagen: '⚙️'
    },
    {
        id: 27,
        nombre: 'Cal',
        categoria: 'materiales-construccion',
        descripcion: 'Cal hidratada de alta calidad para construcción. Material esencial para preparación de mezclas de albañilería, repello y acabados. Excelente adherencia y trabajabilidad. Ideal para proyectos de construcción tradicionales y modernos.',
        descripcionCorta: 'Cal hidratada para mezclas de construcción',
        precio: 85.00,
        stock: true,
        imagen: '🧱'
    },
    {
        id: 28,
        nombre: 'Yeso',
        categoria: 'materiales-construccion',
        descripcion: 'Yeso de construcción de alta calidad para acabados y enjarres. Material ideal para acabados interiores y exteriores. Excelente trabajabilidad y acabado liso. Perfecto para proyectos de construcción y remodelación.',
        descripcionCorta: 'Yeso para acabados y enjarres',
        precio: 95.00,
        stock: true,
        imagen: '🏗️'
    },
    {
        id: 29,
        nombre: 'Cemento blanco',
        categoria: 'materiales-construccion',
        descripcion: 'Cemento blanco de alta calidad para acabados especiales y decorativos. Ideal para proyectos que requieren acabados blancos o coloreados. Perfecto para pisos, fachadas y elementos arquitectónicos decorativos.',
        descripcionCorta: 'Cemento blanco para acabados decorativos',
        precio: 280.00,
        stock: true,
        imagen: '⚪'
    },
    /*{
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
    }*/
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

    // Filtrar productos (sin materiales de construcción para el carousel principal)
    const productosFiltrados = productos.filter(p => p.categoria !== 'materiales-construccion');
    
    // Crear tarjetas de productos (duplicadas para efecto infinito)
    // Duplicamos 3 veces para tener suficiente contenido para el efecto infinito
    const productosDuplicados = [...productosFiltrados, ...productosFiltrados, ...productosFiltrados];
    
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
    const productosFiltrados = productos.filter(p => p.categoria !== 'materiales-construccion');
    const maxPosition = productosFiltrados.length * cardWidth;

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
    const productosFiltrados = productos.filter(p => p.categoria !== 'materiales-construccion');
    const maxPosition = productosFiltrados.length * cardWidth;

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

// Inicializar modal de ayuda (instrucciones)
function initHelpModal() {
    // Crear overlay/modal si no existe
    if (!document.getElementById('helpModalOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'helpModalOverlay';
        overlay.className = 'help-modal-overlay';
        overlay.innerHTML = `
            <div class="help-modal" role="dialog" aria-modal="true">
                <button class="close-help" aria-label="Cerrar">&times;</button>
                <h3>Cómo hacer tu pedido</h3>
                <ol>
                    <li>Añade los productos que necesites desde el <a href="catalogo.html">catálogo</a> o la página de detalle.</li>
                    <li>Para productos <strong>vendidos por kilo</strong> (ej. alambre recocido) indica la cantidad en <em>kg</em> (puedes usar decimales, p. ej. 0.5).</li>
                    <li>Revisa tu pedido en la página de <a href="hacer-pedido.html">Hacer Pedido</a> y confirma dirección y teléfono.</li>
                    <li>Envía el pedido: nos contactaremos para confirmar disponibilidad y método de pago.</li>
                    <li>Si requieres factura, completa el formulario de facturación en la sección de facturación.</li>
                </ol>
                <p class="form-nota">Ejemplo: Si necesitas medio kilo de alambre recocido, en la ventana del producto ingresa <strong>0.5</strong> y agrégalo al pedido.</p>
            </div>
        `;
        document.body.appendChild(overlay);

        // Listeners para cerrar
        overlay.querySelector('.close-help').addEventListener('click', () => toggleHelpModal(false));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) toggleHelpModal(false);
        });
    }

    // Asociar botones help en caso de que existan
    document.querySelectorAll('.help-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleHelpModal(true));
    });
}

function toggleHelpModal(show) {
    const overlay = document.getElementById('helpModalOverlay');
    if (!overlay) return;
    if (show) overlay.classList.add('show'); else overlay.classList.remove('show');
}

// Ejecutar initHelpModal al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
    initHelpModal();
});

// Toggle para mostrar/ocultar el bloque de facturación en la página de pedido
function toggleFacturacion() {
    const wrapper = document.getElementById('facturacionWrapper');
    if (!wrapper) return;
    wrapper.classList.toggle('active');
}

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

// Funciones para filtrar productos por categoría
function filtrarProductosPorCategoria(categoria) {
    if (!productos || productos.length === 0) return [];
    return productos.filter(producto => producto.categoria === categoria);
}

function obtenerProductosSinMaterialesConstruccion() {
    if (!productos || productos.length === 0) return [];
    return productos.filter(producto => producto.categoria !== 'materiales-construccion');
}

function obtenerProductoPorId(id) {
    if (!productos || productos.length === 0) return null;
    return productos.find(producto => producto.id === id);
}

// Sistema de carrito de pedidos
let carritoPedidos = [];

function obtenerCarrito() {
    const carritoGuardado = localStorage.getItem('carritoPedidos');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function guardarCarrito() {
    localStorage.setItem('carritoPedidos', JSON.stringify(carritoPedidos));
}

function agregarAlCarrito(productoId, cantidad = 1) {
    const producto = obtenerProductoPorId(productoId);
    if (!producto) {
        showMessage('Producto no encontrado', 'error');
        return false;
    }

    carritoPedidos = obtenerCarrito();
    const itemExistente = carritoPedidos.find(item => item.id === productoId);

    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carritoPedidos.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad,
            imagen: producto.imagen
        });
    }

    guardarCarrito();
    actualizarContadorCarrito();
    showMessage('Producto agregado al pedido', 'success');
    return true;
}

function eliminarDelCarrito(productoId) {
    carritoPedidos = obtenerCarrito();
    carritoPedidos = carritoPedidos.filter(item => item.id !== productoId);
    guardarCarrito();
    actualizarContadorCarrito();
    return true;
}

function actualizarCantidadCarrito(productoId, cantidad) {
    carritoPedidos = obtenerCarrito();
    const item = carritoPedidos.find(item => item.id === productoId);
    if (item) {
        if (cantidad <= 0) {
            eliminarDelCarrito(productoId);
        } else {
            item.cantidad = cantidad;
            guardarCarrito();
            actualizarContadorCarrito();
        }
    }
    return true;
}

function limpiarCarrito() {
    carritoPedidos = [];
    guardarCarrito();
    actualizarContadorCarrito();
}

function obtenerTotalCarrito() {
    carritoPedidos = obtenerCarrito();
    return carritoPedidos.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

function obtenerCantidadTotalCarrito() {
    carritoPedidos = obtenerCarrito();
    return carritoPedidos.reduce((total, item) => total + item.cantidad, 0);
}

function actualizarContadorCarrito() {
    const contador = document.getElementById('carrito-contador');
    if (contador) {
        const cantidad = obtenerCantidadTotalCarrito();
        contador.textContent = cantidad > 0 ? cantidad : '';
        contador.style.display = cantidad > 0 ? 'block' : 'none';
    }
}

// Renderizar productos en grid
function renderizarProductos(productosArray, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    if (!productosArray || productosArray.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
        return;
    }

    contenedor.innerHTML = productosArray.map(producto => `
        <div class="producto-card">
            <div class="producto-img">${producto.imagen || '🔨'}</div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcionCorta || producto.descripcion}</p>
                <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
                <span class="producto-unidad">${producto.porKilo ? 'Vendido por kilo (kg)' : ''}</span>
                <button class="btn-ver-detalle" onclick="verDetalle(${producto.id})">Ver Detalle</button>
                ${producto.porKilo ? `
                    <button class="btn-agregar-pedido" onclick="pedirKilosYAgregar(${producto.id})">Agregar al Pedido (kg)</button>
                ` : `
                    <button class="btn-agregar-pedido" onclick="agregarAlCarrito(${producto.id}, 1)">Agregar al Pedido</button>
                `}
            </div>
        </div>
    `).join('');
}

// Pedir cantidad en kilos al usuario y agregar al carrito
function pedirKilosYAgregar(productoId) {
    let input = prompt('Ingrese la cantidad en kilos (ej. 0.5 para medio kilo):', '1');
    if (input === null) return; // cancel
    input = input.replace(',', '.');
    const kilos = parseFloat(input);
    if (isNaN(kilos) || kilos <= 0) {
        alert('Por favor ingresa una cantidad válida en kilos.');
        return;
    }
    agregarAlCarrito(productoId, kilos);
    // Redirigir a la página de pedido para confirmar
    window.location.href = 'hacer-pedido.html';
}

// Función para enviar pedido (por ahora guarda en localStorage)
function enviarPedido(datosCliente) {
    carritoPedidos = obtenerCarrito();
    
    if (carritoPedidos.length === 0) {
        showMessage('El pedido está vacío', 'error');
        return false;
    }

    const pedido = {
        id: Date.now(),
        fecha: new Date().toISOString(),
        cliente: datosCliente,
        productos: carritoPedidos.map(item => ({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: item.cantidad
        })),
        total: obtenerTotalCarrito(),
        estado: 'pendiente'
    };

    // Guardar pedido en localStorage
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    // Limpiar carrito
    limpiarCarrito();

    // Guardar también para administración (lista de todos los pedidos)
    return true;
}

