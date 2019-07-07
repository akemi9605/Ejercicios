var letraDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

var numero = prompt("Introduce tu número de DNI");

function generarDniConLetra (numero) {
	if (!isNaN(numero)) {
		var resto = numero % 23;
		console.log(numero + letraDni[resto]);
	}
	else {
		alert("Debes introducir un valor númerico")
	}

	if (numero.length == 8) {
		var resto = numero % 23;
		console.log(numero + letraDni[resto]);
	}

	else {
		alert("Debes introducir un número de 8 dígitos");
	
	}
	var i= 0;
	for (i= 0; i <= 8; i++)
	if (numero.length > 8; var primero = numero.shift()) {
		var primero = 0;
	}
	}

console.log(generarDniConLetra(numero));