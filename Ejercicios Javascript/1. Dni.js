var letraDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

var numero = prompt("Introduce tu número de DNI");

function generarDniConLetra (numero) {
	var resto = numero % 23;
	console.log(numero + letraDni[resto]);
}

generarDniConLetra(numero);