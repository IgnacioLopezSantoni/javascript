const baseDeDatos = [{
    id: 1,
    nombre: 'Hamburguesa con cheddar',
    precio: 700,
    imagen: 'https://pbs.twimg.com/media/DylZJy9X4AM_OuA.jpg'
},
{
    id: 2,
    nombre: 'hamburguesa doble cheddar',
    precio: 850,
    imagen: 'https://www.supermercedes.com.ar/lanonnacocina/wp-content/uploads/2021/06/doble-con-cheddar.jpg'
},
{
    id: 3,
    nombre: 'Hamburguesa con cheddar y bacon',
    precio: 1000,
    imagen: 'https://www.infobae.com/new-resizer/gCEb5HYVl1-L5cBeIL-67HFHR_o=/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/24191941/hamburguesa-burgertify-2019.jpg'
},
{
    id: 4,
    nombre: 'lomito',
    precio: 1200,
    imagen: 'https://www.clarin.com/img/2021/07/26/el-lomito-uno-de-los___u-aUfp64d_640x361__1.jpg'
},
{
    id: 5,
    nombre: 'Papas con cheddar',
    precio: 450,
    imagen: 'https://img-global.cpcdn.com/recipes/21baa434dcfece47/1200x630cq70/photo.jpg'
},
{
    id: 6,
    nombre: 'Papas con cheddar y bacon',
    precio: 600,
    imagen: 'https://ver.rosario.gob.ar/media/cache/d7/17/d7177d59637b7f2681ff684693632210.png'
}

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
baseDeDatos.forEach((info) => {
    // Estructura
    const miNodo = document.createElement('div');
    miNodo.classList.add('card', 'col-sm-4');
    // Body
    const miNodoCardBody = document.createElement('div');
    miNodoCardBody.classList.add('card-body');
    // Titulo
    const miNodoTitle = document.createElement('h5');
    miNodoTitle.classList.add('card-title');
    miNodoTitle.textContent = info.nombre;
    // Imagen
    const miNodoImagen = document.createElement('img');
    miNodoImagen.classList.add('img-fluid');
    miNodoImagen.setAttribute('src', info.imagen);
    // Precio
    const miNodoPrecio = document.createElement('p');
    miNodoPrecio.classList.add('card-text');
    miNodoPrecio.textContent = `${info.precio}${divisa}`;
    // Boton 
    const miNodoBoton = document.createElement('button');
    miNodoBoton.classList.add('btn', 'btn-primary');
    miNodoBoton.textContent = '+';
    miNodoBoton.setAttribute('marcador', info.id);
    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
    // Insertamos
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);
});
}
