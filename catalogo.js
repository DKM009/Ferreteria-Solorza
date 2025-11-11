// Cargar y mostrar productos en el catálogo
function loadCatalogo() {
    const catalogoGrid = document.getElementById('catalogoGrid');
    if (!catalogoGrid) return;

    // Obtener productos del localStorage o usar los datos por defecto
    let productos = [];
    const productosStorage = localStorage.getItem('productos');
    
    if (productosStorage) {
        productos = JSON.parse(productosStorage);
    } else {
        // Si no hay en localStorage, usar los datos del script.js
        productos = [
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
                descripcion: 'Barras de acero para construcción',
                precio: 380.00,
                stock: true,
                imagen: '⚙️'
            },
            {
                id: 3,
                nombre: 'Herramientas Manuales',
                descripcion: 'Llaves, martillos, destornilladores y más',
                precio: 250.00,
                stock: true,
                imagen: '🔧'
            },
            {
                id: 4,
                nombre: 'Pinturas y Acabados',
                descripcion: 'Pinturas de calidad para interiores y exteriores',
                precio: 320.00,
                stock: true,
                imagen: '🎨'
            },
            {
                id: 5,
                nombre: 'WD 40',
                descripcion: 'Lubricante multiusos',
                precio: 180.00,
                stock: true,
                imagen: '💧'
            },
            {
                id: 6,
                nombre: 'Tuberías',
                descripcion: 'Tuberías de diferentes materiales y medidas',
                precio: 420.00,
                stock: true,
                imagen: '🔩'
            },
            {
                id: 7,
                nombre: 'Cables',
                descripcion: 'Cables eléctricos de diversas especificaciones',
                precio: 150.00,
                stock: true,
                imagen: '⚡'
            },
            {
                id: 8,
                nombre: 'Interruptores',
                descripcion: 'Interruptores y apagadores eléctricos',
                precio: 95.00,
                stock: true,
                imagen: '🔌'
            },
            {
                id: 9,
                nombre: 'Lámparas',
                descripcion: 'Lámparas e iluminación para el hogar',
                precio: 280.00,
                stock: true,
                imagen: '💡'
            },
            {
                id: 10,
                nombre: 'Equipos de Seguridad',
                descripcion: 'Cascos, guantes, lentes de seguridad y más',
                precio: 350.00,
                stock: true,
                imagen: '🛡️'
            }
        ];
    }

    // Limpiar grid
    catalogoGrid.innerHTML = '';

    // Crear tarjetas de productos
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="producto-img">${producto.imagen}</div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcionCorta || producto.descripcion}</p>
                <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
                <div class="stock-info">
                    <span class="${producto.stock ? 'in-stock' : 'out-of-stock'}">
                        ${producto.stock ? '✓ En stock' : '✗ Sin stock'}
                    </span>
                </div>
                <button class="btn-ver-detalle" onclick="verDetalle(${producto.id})">Ver Detalle</button>
            </div>
        `;
        catalogoGrid.appendChild(card);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadCatalogo();
});

