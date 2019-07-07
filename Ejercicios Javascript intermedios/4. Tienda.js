class Tienda {
    constructor(nombre, productos, empleados, horario, clientes){
    this._nombre = nombre;
    this._productos = productos;
    this._empleados = empleados;
    this._horario = horario;
    this._clientes = clientes;
    }
}

class Persona {
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
}

class Dependiente {
    vender(){
        console.log("vendido");
    }
}
class Vigilante {
    echar(){
        console.log("¡Fuera ladrón!");
    }
}
class Encargado {
    verificarStock(){
        console.log("Ya tengo vuestro horario");
    }
}
class Empleado extends Persona{
    constructor(nombre, edad, tipo){
        super(nombre, edad);
        this._establecerTipo(tipo)
    }
    /*saludarAlCliente(){
        console.log("Bienvenido, ¿necesita que le ayude?");
    }
    venderAlClienteProducto(){
        console.log("Aquí tiene la camiseta, ¿se lo cobro?");
    }
    cobrarProducto(){
        console.log("Son 20 euros");
    }*/
    establecerTipo(){
        if ( tipo === "dependiente"){
            this._accion = new Dependiente();
        }
        if (tipo === "vigilante"){
            this._accion = new Vigilante();
        }
        if (tipo === "Encargado"){
            this._accion = new Encargado();
        }
    }
}

class Clientes extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    comprarCamiseta(){
        console.log("Quería una camiseta de color azul de la talla S, gracias");

    }
    pagarCamiseta(){
        console.log("¿Cuánto cuesta?");
    }
}

let miTienda = new Tienda("Zara","Ropa",5, "10:00 a 22:00");
miTienda._nombre();
let persona = new Persona("Akemi", 29);
persona._nombre();
let miEmpleado = new Empleado();
miEmpleado.saludarAlCliente();
miEmpleado.venderAlClienteProducto();
miEmpleado.cobrarProducto();
let miCliente = new Clientes();
micliente.comprarCamiseta();
micliente.pagarCamiseta();