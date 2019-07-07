var carrito = [];

var productoEjemplo = {
    nombre: "Camiseta",
    cantidad: 3,
    precio: 10
};

function addProduct(){
    // Article que contendra el nuevo producto
    var producto = document.createElement("article");

    // Imagen del producto
    var productoImagen = document.createElement("img");
    var urlImagenProducto = document.getElementById("productoimg").value;
    productoImagen.src = urlImagenProducto;

    // Añadimos como hijo del Article la imagen
    producto.appendChild(productoImagen);

    // Cantidad del producto
    var productoCantidad = document.createElement("p");
    var cantidadValue = document.getElementById("cantidad").value;
    productoCantidad.innerText = cantidadValue;

    // Añadimos como hijo del Article la la cantidad del producto
    producto.appendChild(productoCantidad);

    // Nombre del producto
    var productoNombre = document.createElement("p");
    var nombreValue = document.getElementById("productoNombre").value;
    productoNombre.innerText = nombreValue;

    // Añadimos como hijo del Article la la nombre del producto
    producto.appendChild(productoNombre);

    // Precio del producto
    var precioProducto = document.createElement("h2");
    var precioValue = document.getElementById("precio").value;
    precioProducto.innerText = precioValue;
    producto.appendChild(precioProducto);

    // Añadimos a la cesta el nuevo producto
    var cesta = document.querySelector(".cesta");
    cesta.appendChild(producto);



    // ALMACENO
    var producto = {
        nombre: nombreValue,
        cantidad: parseInt(cantidadValue),
        precio: parseFloat(precioValue)
    };

    carrito.push(producto);
    
    console.log(carrito);

    drawTotalProducts();
    drawTotalPrice();
}

function drawTotalProducts () {
    let totalNumber = document.querySelector(".total__number");

    let totalProducts = 0;
    for(let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        totalProducts = totalProducts + producto.cantidad;
    }

    totalNumber.innerText = "Total productos: " + totalProducts;
}

function drawTotalPrice() {
    let totalPriceTag = document.querySelector(".total__price");

    let totalPrice = 0;
    for(let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        totalPrice = totalPrice + (producto.precio * producto.cantidad);
    }

    totalPriceTag.innerText = "Total precio: " + totalPrice;
}