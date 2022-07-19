let producto = '';
let total = 0;
let listaProductos = [];
let carrito = [];
let prod;

class Producto {
    constructor(id, nombre, precio, imagen ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

function armarLista() {
    let mensaje = '¿Que desea comprar? Ingrese su eleccion.'

    for (const producto of listaProductos) {
        let numero = listaProductos.indexOf(producto) + 1
        mensaje += `\n ${numero}. ${producto.nombre} $${producto.precio}`
    }

    mensaje += `\n ${listaProductos.length + 1}. Finalizar compra`
    return mensaje
}

function renderizarCards() {
    const cardContainer = document.getElementById('card-container')
    for (const producto of listaProductos) {
        cardContainer.innerHTML += `
        <div class="card card-product" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top imagen-producto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.precio}.</p>
                <button class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        `
    }
}

function comprar() {
    let idSeleccionado;
    do {
        idSeleccionado = prompt(armarLista());
        let productoSeleccionado = listaProductos.find(p => p.id === idSeleccionado);
        console.log('productoSeleccionado', productoSeleccionado);
        if (productoSeleccionado !== undefined) {
            carrito.push(productoSeleccionado)
            console.log('carrito', carrito)
        }
    } while (idSeleccionado !== '8')
}

const producto1 = new Producto('1', 'Hamburguesa con cheddar', 700,'https://www.clarin.com/img/2022/05/27/la-hamburguesa-mucho-mas-que___0HXb0UR0v_1200x630__1.jpg' )
const producto2 = new Producto('2', 'Hamburguesa con doble cheddar', 850, 'https://cdnvos.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/hoppiness_1590082734.jpeg')
const producto3 = new Producto('3', 'Hamburguesa con cheddar y bacon', 1100,'https://lowells.com.ar/wp-content/uploads/2020/04/Mar-05-140835-1024x683.jpg')
const producto4 = new Producto('4', 'Hamburguesa vegetariana', 850,'https://assets.unileversolutions.com/recipes-v2/211056.jpg')
const producto5 = new Producto('5', 'Papas con cheddar', 450,'https://rojoynegro.com.ar/pedidos/wp-content/uploads/2020/10/1137453-1598976356395.jpg')
const producto6 = new Producto('6', 'Papas con cheddar y bacon', 550,'https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/05/papas-francesas-con-tocineta-y-salsa-de-queso.png?width=1200&enable=upscale.jpg')
const producto7 = new Producto('7', 'Lomito completo', 1000,'https://www.lavoz.com.ar/resizer/68pEes0sUCY0IsFc6oGaWOOHGgM=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/NBVO37CBVBBO3O6VIBS32LWIVE.jpg')

listaProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7)

renderizarCards()
comprar()