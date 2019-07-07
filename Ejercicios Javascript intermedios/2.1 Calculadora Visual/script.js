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

//Ejercicio 2 parte 2
class Visual extends Calculadora {
    constructor(){
        super();
        this.valor = [,];
    }
    sumar() {
        this.preguntaValor();
        super.sumar(this.valor[0],this.valor[1]);
        this.showResultado();
    }
    restar() {
        this.preguntaValor();
        super.restar(this.valor[0],this.valor[1]);
        this.showResultado();
    }
    multiplicar(){
        this.preguntaValor();
        super.multiplicar(this.valor[0],this.valor[1]);
        this.showResultado();
    }
    dividir(){
        this.preguntaValor();
        super.dividir(this.valor[0],this.valor[1])
        this.showResultado();
    }
    potencia(){
        this.preguntaValor();
        super.potencia(this.valor[0],this.valor[1])
        this.showResultado();
    }
    preguntaValor(){
        this.valor[0] = document.getElementById("valorPrimero").value;
        this.valor[1] = document.getElementById("valorSegundo").value;
    }
    showResultado(){
        document.getElementById("resultado").value = this._resultado;
    }
}

var miCalculadoraVisual = new Visual();
