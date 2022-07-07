let producto = '';
let total = 0;

function comprar() {

    while (producto != '8') {
        producto = prompt(`¿Que desea comprar? Ingrese su eleccion.\n 1.Hamburguesa con cheddar $700.\n 2. Hamburguesa con doble cheddar $850.\n 3. Hamburguesa con cheddar y bacon $ 1100.\n 4.Hamburguesa vegetariana $ 850.\n 5. Papas con cheddar $ 450.\n 6. Papas con cheddar y bacon $ 550.\n 7. Papas con cheddar,bacon y verdeo $ 600.\n 8. Finalizar compra`);

        switch (producto) {
            case '1':
                total += 700;
                console.log(`su compra es de: ${total}`);
                break;
            case '2':
                total += 850;
                alert(`su compra es de: ${total}`);
                break;
            case '3':
                total += 1100;
                alert(`su compra es de: ${total}`);
                break;
            case '4':
                total += 850;
                alert(`su compra es de: ${total}`);
                break;
            case '5':
                total += 450;
                alert(`su compra es de: ${total}`);
                break;
            case '6':
                total += 550;
                alert(`su compra es de: ${total}`);
                break;
            case '7':
                total += 600;
                alert(`su compra es de: ${total}`);
                break;
            case '8':
                alert(`gracias por su maravillosa compra, el total es: ${total}`);
                break;
        }
    }



}


comprar();


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaProductos = [{
        nombre: "Hamburguesa cheddar y bacon",
        precio: 1100
    },
    {
        nombre: "Papas con cheddar",
        precio: 550
    },
    {
        nombre: "Coca Cola",
        precio: 300
    }

];

const agregarProd = () => {
    let nombre = prompt("Nombre del producto");
    let precio = parseFloat(prompt("Nombre del producto"));
    let prod = new Producto(nombre, precio);
    listaProductos.push(prod);
    console.log(listaProductos);
}


for (let producto of listaProductos) {
    console.log(`Este producto es ${producto.nombre} y su precio es ${producto.precio}`);
}