# Ferretería Solorza - Sitio Web

Sitio web para Ferretería Solorza desarrollado con HTML, CSS y JavaScript.

## Características

- ✅ Página principal con carousel de productos animado (movimiento continuo tipo "tren")
- ✅ Catálogo completo de productos
- ✅ Página de detalle de producto con información completa
- ✅ Información de la empresa
- ✅ Sección de contactos
- ✅ Ubicación con mapa
- ✅ Secciones para promociones y materiales (listas para agregar imágenes)
- ✅ Botón flotante de soporte para llamadas
- ✅ Diseño responsive (adaptable a móviles, tablets y desktop)
- ✅ Navegación suave entre secciones

## Estructura del Proyecto

```
.
├── index.html              # Página principal
├── catalogo.html           # Página de catálogo de productos
├── detalle-producto.html   # Página de detalle de producto
├── styles.css              # Estilos CSS
├── script.js               # JavaScript principal (carousel y funcionalidades)
├── catalogo.js             # JavaScript para el catálogo
├── detalle-producto.js     # JavaScript para el detalle de producto
└── README.md               # Este archivo
```

## Cómo Usar

1. Abre el archivo `index.html` en tu navegador web
2. Navega por las diferentes secciones usando el menú
3. Explora los productos en el carousel
4. Haz clic en "Ver Detalle" para ver información completa de un producto
5. Haz clic en "Ver Todos los Productos" para ver el catálogo completo

## Productos Incluidos

1. Armex
2. Acero
3. Herramientas Manuales
4. Pinturas y Acabados
5. WD 40
6. Tuberías
7. Cables
8. Interruptores
9. Lámparas
10. Equipos de Seguridad

## Información de Contacto

- **Teléfono:** 618 154 1786
- **Email:** info@ferreteriasolorza.com
- **Ubicación:** Calle 5 de Febrero, Zona Centro, Vicente Guerrero, Durango

## Características Técnicas

### Carousel de Productos
- Movimiento continuo automático (efecto "tren")
- Botones de navegación manual
- Pausa automática al hacer hover
- Efecto infinito (los productos vuelven a aparecer)

### Página de Detalle
- Información completa del producto
- Precio unitario
- Estado de stock
- Botón para agregar al carrito (funcionalidad básica)

### Diseño Responsive
- Adaptable a diferentes tamaños de pantalla
- Menú hamburguesa en dispositivos móviles
- Grid flexible para productos y materiales

## Personalización

### Agregar Imágenes de Promociones
Para agregar imágenes de promociones, reemplaza el contenido de `.promocion-placeholder` en `index.html` con elementos `<img>`:

```html
<div class="promocion-card">
    <img src="ruta/a/imagen.jpg" alt="Promoción">
</div>
```

### Agregar Imágenes de Materiales
Similar a las promociones, reemplaza el contenido de `.material-placeholder` con imágenes:

```html
<div class="material-card">
    <img src="ruta/a/imagen.jpg" alt="Material">
</div>
```

### Modificar Productos
Los productos se encuentran definidos en `script.js`. Puedes modificar:
- Nombre
- Descripción
- Precio
- Estado de stock
- Imagen (emojis o puedes cambiar a URLs de imágenes)

## Notas para la Evaluación

Este proyecto cumple con los requisitos de evaluación:

1. ✅ **Catálogo de productos** - Página completa con todos los productos
2. ✅ **Detalle del producto** - Información completa (nombre, descripción, precio, stock, botón agregar al carrito)
3. ✅ **Investigación de usuarios** - Información real de la empresa
4. ✅ **Usabilidad** - Navegación clara, colores consistentes, iconos coherentes
5. ✅ **Contenido real** - Datos reales de Ferretería Solorza
6. ✅ **Experiencia de usuario** - Mensajes claros, retroalimentación visual
7. ✅ **Retroalimentación interactiva** - Indicadores de posición, mensajes de éxito/error

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript (ES6+)
- Font Awesome (iconos)
- Google Maps (iframe para ubicación)

## Navegadores Soportados

- Chrome (recomendado)
- Firefox
- Safari
- Edge

## Autor

Desarrollado para Ferretería Solorza

---

© 2024 Ferretería Solorza. Todos los derechos reservados.

