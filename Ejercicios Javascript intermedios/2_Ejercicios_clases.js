class Calculadora {
    constructor(){
        this._resultado = [];
    }
    sumar(primerValor,segundoValor){
        var resultado = parseInt(primerValor) + parseInt(segundoValor);
        this.acumular(resultado);
        return this._resultado; 
    }
    restar(primerValor,segundoValor){
        var resultado = parseInt(primerValor) - parseInt(segundoValor);
        this.acumular(resultado);
        return this._resultado;
    }
    dividir(primerValor,segundoValor){
        var resultado = parseInt(primerValor) / parseInt(segundoValor);
        this.acumular(resultado);
        return this._resultado;
    }
    multiplicar(primerValor,segundoValor){
        var resultado = parseInt(primerValor) * parseInt(segundoValor);
        this.acumular(resultado);
        return this._resultado;
    }
    potencia(primerValor,segundoValor){
        var resultado = parseInt(primerValor) ** parseInt(segundoValor);
        this.acumular(resultado);
        return this._resultado;
    }
    acumular(valor){
        this._resultado.push(valor);
        this.getResultado();
    }
    getResultado (){
        console.log(this._resultado);
    }
    limpiar(){
        console.log(this._resultado = []);
    }
}

/*
//calculadora es la clase y micalculadora es un objeto
var miCalculadora = new Calculadora();
console.log(miCalculadora);
miCalculadora.sumar(4,5);
miCalculadora.restar(13,9);
miCalculadora.dividir(3,7);
miCalculadora.multiplicar(5,8);
miCalculadora.potencia(6,9);
miCalculadora.getResultado();
miCalculadora.limpiar();
*/

//Ejercicio 2
class Cutronga extends Calculadora {
    constructor(){
        super();
    }

    sumar() {
        var valor = this.preguntaValor();
        super.sumar(valor[0],valor[1]);
    }

    restar() {
        var valor = this.preguntaValor();
        super.restar(valor[0],valor[1]);
    }

    multiplicar(){
        var valor = this.preguntaValor();
        super.multiplicar(valor[0],valor[1]);
    }

    dividir(){
        var valor = this.preguntaValor();
        super.dividir(valor[0],valor[1]);
    }

    potencia(){
        var valor = this.preguntaValor();
        super.potencia(valor[0],valor[1]);
    }

    preguntaValor(){
        var valorPrimero = prompt("Mete el primer valor");
        var valorSegundo = prompt("Mete el segundo valor");
        return [valorPrimero,valorSegundo];
    }

    getResultado (){
        alert(this._resultado);
    }
}


var miCalculadoraCutronga = new Cutronga();
miCalculadoraCutronga.sumar();
miCalculadoraCutronga.restar();
miCalculadoraCutronga.dividir();
miCalculadoraCutronga.multiplicar();
miCalculadoraCutronga.potencia();
