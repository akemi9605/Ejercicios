var valor = 0;


function introducirValor () {
    //al introducir un valor
    valor = prompt("Introduce un número");
    valor = parseFloat(valor);

}
function sumar () {
    let valor2 = prompt("Introduce otro valor");
    valor2 = parseFloat(valor2);
    valor = valor + valor2;
    console.log(valor);

}
function restar () {
    let valor2 = prompt("Introduce otro valor");
    valor2 = parseFloat(valor2);
    valor = valor - valor2;
    console.log(valor);

}
function multiplicar () {
    let valor2 = prompt("Introduce otro valor");
    valor2 = parseFloat(valor2);
    valor = valor * valor2;
    console.log(valor);
}

function dividir () {
    let valor2 = prompt("Introduce otro valor");
    valor2 = parseFloat(valor2);
    valor = valor / valor2;
    console.log(valor);

}
function resultado () {
    alert(valor);
}
