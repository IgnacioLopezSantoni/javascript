document.addEventListener('DOMContentLoaded', () => {

 
    const baseDeDatos = [{
            id: 1,
            nombre: 'Hamburguesa con cheddar',
            precio: 700,
            imagen: 'https://www.clarin.com/img/2022/05/27/la-hamburguesa-mucho-mas-que___0HXb0UR0v_200x230__1.jpg'
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
    const miLocalStorage = window.localStorage;


    function renderizarProductos() {
        baseDeDatos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', añadirProductoAlCarrito);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }


    function añadirProductoAlCarrito(evento) {

        carrito.push(evento.target.getAttribute('marcador'))
        
            Swal.fire('Has agragado este producto al carrito')
      
        renderizarCarrito();

        guardarCarritoEnLocalStorage();
    }


    function renderizarCarrito() {

        DOMcarrito.textContent = '';

        const carritoSinDuplicados = [...new Set(carrito)];


        carritoSinDuplicados.forEach((item) => {

            const miItem = baseDeDatos.filter((itemBaseDatos) => {

                return itemBaseDatos.id === parseInt(item);
            });

            const numeroUnidadesItem = carrito.reduce((total, itemId) => {

                return itemId === item ? total += 1 : total;
            }, 0);

            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent =
                `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });

        DOMtotal.textContent = calcularTotal();
    }




    function borrarItemCarrito(evento) {

        const id = evento.target.dataset.item;

        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });

        renderizarCarrito();

        guardarCarritoEnLocalStorage();
        
    }


    function calcularTotal() {

        return carrito.reduce((total, item) => {

            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }


    function vaciarCarrito() {

        carrito = [];

        renderizarCarrito();

        localStorage.clear();
        
            Swal.fire('Has eliminado los productos del carrito')
       
        
    }

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {

        if (miLocalStorage.getItem('carrito') !== null) {

            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }


    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});
