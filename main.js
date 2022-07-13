let producto = '';
let total = 0;
let listaProductos = [];
let carrito = [];
let prod;

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto('1', 'Hamburguesa con cheddar', 700)
const producto2 = new Producto('2', 'Hamburguesa con doble cheddar', 850)
const producto3 = new Producto('3', 'Hamburguesa con cheddar y bacon', 1100)
const producto4 = new Producto('4', 'Hamburguesa vegetariana', 850)
const producto5 = new Producto('5', 'Papas con cheddar', 450)
const producto6 = new Producto('6', 'Papas con cheddar y bacon', 550)
const producto7 = new Producto('7', 'Lomito completo', 1000)

listaProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7)

function armarLista() {
    let mensaje = '¿Que desea comprar? Ingrese su eleccion.'

    for (const producto of listaProductos) {
        let numero = listaProductos.indexOf(producto) + 1
        mensaje += `\n ${numero}. ${producto.nombre} $${producto.precio}`
    }

    mensaje += `\n ${listaProductos.length + 1}. Finalizar compra`
    return mensaje
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
    } while(idSeleccionado !== '8')
}

comprar()