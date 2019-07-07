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
    saludar(){
        console.log("Hola mi nombre es:${this._nombre} y tengo ${this._edad}")
    }
}

class Empleados extends Persona {
    constructor(dependiente, vigilante, encargado){
        super();
        this._dependiente = dependiente;
        this._vigilante = vigilante;
        this._encargado = encargado;
    }
}

class Clientes extends Persona {
    constructor(cliente, clienteproveedor){
        super();
        this._cliente = cliente;
        this._clienteproveedor = clienteproveedor;
    }
}



let miTienda = new Tienda();
let misEmpleados = new Empleados();
let misClientes = new Clientes();
let persona = new Persona("Akemi",29);
persona.saludar();