// Cargar y mostrar detalle del producto
function loadProductoDetalle() {
    const productoDetalle = document.getElementById('productoDetalle');
    if (!productoDetalle) return;

    // Obtener el ID del producto seleccionado
    const productoId = parseInt(localStorage.getItem('productoSeleccionado')) || 1;

    // Obtener productos del localStorage
    let productos = [];
    const productosStorage = localStorage.getItem('productos');
    
    if (productosStorage) {
        productos = JSON.parse(productosStorage);
    } else {
        // Si no hay en localStorage, usar los datos por defecto
        productos = [
            {
                id: 1,
                nombre: 'Armex',
                descripcion: 'Material de construcción versátil y resistente, ideal para trabajos de albañilería y construcción. El Armex es un material esencial en cualquier proyecto de construcción, conocido por su durabilidad y versatilidad.',
                precio: 450.00,
                stock: true,
                imagen: '🔨'
            },
            {
                id: 2,
                nombre: 'Acero',
                descripcion: 'Barras de acero para construcción de alta calidad. Perfectas para estructuras de concreto reforzado, con diferentes calibres disponibles según tus necesidades de construcción.',
                precio: 380.00,
                stock: true,
                imagen: '⚙️'
            },
            {
                id: 3,
                nombre: 'Herramientas Manuales',
                descripcion: 'Set completo de herramientas manuales incluyendo llaves, martillos, destornilladores, alicates y más. Herramientas de calidad profesional para todos tus proyectos de reparación y construcción.',
                precio: 250.00,
                stock: true,
                imagen: '🔧'
            },
            {
                id: 4,
                nombre: 'Pinturas y Acabados',
                descripcion: 'Pinturas de calidad para interiores y exteriores. Disponible en una amplia gama de colores y acabados. Pintura resistente al agua, rayos UV y con excelente cubrimiento.',
                precio: 320.00,
                stock: true,
                imagen: '🎨'
            },
            {
                id: 5,
                nombre: 'WD 40',
                descripcion: 'Lubricante multiusos de alta calidad. Ideal para eliminar óxido, lubricar piezas metálicas, proteger contra la corrosión y facilitar el desmontaje de piezas atascadas.',
                precio: 180.00,
                stock: true,
                imagen: '💧'
            },
            {
                id: 6,
                nombre: 'Tuberías',
                descripcion: 'Tuberías de diferentes materiales (PVC, cobre, galvanizado) y medidas. Perfectas para instalaciones de plomería, riego y sistemas de agua. Disponibles en varios diámetros.',
                precio: 420.00,
                stock: true,
                imagen: '🔩'
            },
            {
                id: 7,
                nombre: 'Cables',
                descripcion: 'Cables eléctricos de diversas especificaciones y calibres. Cables de cobre de alta conductividad, con diferentes tipos de aislamiento según la aplicación. Cumple con normas de seguridad.',
                precio: 150.00,
                stock: true,
                imagen: '⚡'
            },
            {
                id: 8,
                nombre: 'Interruptores',
                descripcion: 'Interruptores y apagadores eléctricos de calidad. Disponibles en diferentes estilos y acabados. Fácil instalación y compatible con diferentes sistemas eléctricos.',
                precio: 95.00,
                stock: true,
                imagen: '🔌'
            },
            {
                id: 9,
                nombre: 'Lámparas',
                descripcion: 'Lámparas e iluminación para el hogar. Disponible en diferentes estilos, tamaños y tecnologías (LED, incandescente, fluorescente). Perfectas para iluminar cualquier espacio.',
                precio: 280.00,
                stock: true,
                imagen: '💡'
            },
            {
                id: 10,
                nombre: 'Equipos de Seguridad',
                descripcion: 'Equipo de seguridad completo incluyendo cascos, guantes, lentes de seguridad, chalecos reflectantes y más. Protección esencial para trabajos de construcción y reparación.',
                precio: 350.00,
                stock: true,
                imagen: '🛡️'
            }
        ];
    }

    // Buscar el producto por ID
    const producto = productos.find(p => p.id === productoId);

    if (!producto) {
        productoDetalle.innerHTML = `
            <div class="mensaje error mostrar">
                Producto no encontrado. <a href="catalogo.html">Volver al catálogo</a>
            </div>
        `;
        return;
    }

    // Mostrar detalle del producto
    productoDetalle.innerHTML = `
        <div class="producto-detalle-img">${producto.imagen}</div>
        <div class="producto-detalle-info">
            <h1>${producto.nombre}</h1>
            <div class="precio">$${producto.precio.toFixed(2)} MXN</div>
            <div class="descripcion">
                <p>${producto.descripcion}</p>
            </div>
            <div class="stock-info">
                <i class="fas ${producto.stock ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span class="${producto.stock ? 'in-stock' : 'out-of-stock'}">
                    ${producto.stock ? 'Disponible en stock' : 'Sin stock disponible'}
                </span>
            </div>
            <button 
                class="btn-agregar-carrito" 
                onclick="agregarAlCarrito(${producto.id})"
                ${!producto.stock ? 'disabled' : ''}
            >
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
            <div id="mensajeCarrito"></div>
            <div style="margin-top: 20px;">
                <a href="catalogo.html" class="btn-secondary">
                    <i class="fas fa-arrow-left"></i> Volver al Catálogo
                </a>
            </div>
        </div>
    `;
}

// Función para agregar al carrito
function agregarAlCarrito(productoId) {
    // Obtener productos del localStorage
    let productos = [];
    const productosStorage = localStorage.getItem('productos');
    
    if (productosStorage) {
        productos = JSON.parse(productosStorage);
    }

    // Buscar el producto
    const producto = productos.find(p => p.id === productoId);

    if (!producto) {
        showMessage('Producto no encontrado', 'error');
        return;
    }

    if (!producto.stock) {
        showMessage('Este producto no está disponible en stock', 'error');
        return;
    }

    // Obtener carrito del localStorage
    let carrito = [];
    const carritoStorage = localStorage.getItem('carrito');
    
    if (carritoStorage) {
        carrito = JSON.parse(carritoStorage);
    }

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(item => item.id === productoId);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
            imagen: producto.imagen
        });
    }

    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar mensaje de éxito
    showMessage('Producto agregado al carrito exitosamente', 'exito');

    // Actualizar botón (opcional: deshabilitar temporalmente)
    const btn = document.querySelector('.btn-agregar-carrito');
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Agregado';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }
}

// Mostrar mensaje de retroalimentación
function showMessage(mensaje, tipo) {
    const mensajeDiv = document.getElementById('mensajeCarrito');
    if (!mensajeDiv) return;

    mensajeDiv.innerHTML = `<div class="mensaje ${tipo} mostrar">${mensaje}</div>`;
    
    setTimeout(() => {
        mensajeDiv.innerHTML = '';
    }, 3000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadProductoDetalle();
});

