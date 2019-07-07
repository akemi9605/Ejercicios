class Zoologico {
    constructor(nombre, ubicacion, aforomaximo, horario, area){
        this._nombre = nombre;
        this._ubicacion = ubicacion;
        this._aforomaximo = aforomaximo;
        this._horario = horario;
        this._area = area;
}
    addArea(areas){
        this._area.push(areas);
    }
}

class Area {
    constructor(nombrearea, descripcion, animales) {
        this._nombrearea = nombrearea;
        this._descripcion = descripcion;
        this._animales = animales;
    }
}

class Animal {
    constructor(nombreanimal, nacimiento, salud, origen, tipo) {
        this._nombreanimal = nombreanimal;
        this._nacimiento = nacimiento;
        this._salud = salud;
        this._origen = origen;
        this._tipo = tipo;
    }
}



var zooMadrid = new Zoo("Aquopolis", "Madrid", 30000, "9 a 22");
var zooBarcelona = new Zoo("Animalia", "Barcelona", 25000, "9 a 23");


var animalesArea1 = [];
var animalesArea2 = [];
var animalesArea3 = [];

var oso = new Animal("Oso", "2012", "97", "Alemania");
var aguila = new Animal("Aguila", "2015", "99", "Portugal");
var cuervo = new Animal("Cuervo", "2010", "80", "EEUU");
var tortuga = new Animal("Tortuga", "2001", "100", "Brasil");
var lobo = new Animal("Lobo", "2003", "98", "Rusia");

//Guardar en Areas

animalesArea1.push(oso, lobo);
animalesArea2.push(aguila, cuervo);
animalesArea3.push(tortuga);


let mamiferos = new Area("Mamiferos", "Los mamiferos viven en esta area" , animalesArea1);
let aves = new Area("Aves", "Las aves viven en esta area" , animalesArea2);
let reptiles = new Area("Reptiles" , "Los reptiles viven en esta area", animalesArea3);

var areas = [];
areas.push(mamiferos);
areas.push(aves);
areas.push(reptiles);

// Añado las areas a los zoo
zooMadrid.addArea(mamiferos);
zooMadrid.addArea(aves);
zooMadrid.addArea(reptiles);