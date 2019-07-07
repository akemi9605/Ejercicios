//Haz una función que pida al usuario introducir notas (prompt), 
//hasta que escriba FIN. en ese momento deberá calcular la media de todas las notas, 
//imprimirlo y también su equivalente en lenguaje:

function calcularMedia () {
	//introducir notas hasta que escriba la palabra FIN
	var notas = [];
	while ( mensaje != "fin") {
		var mensaje = prompt("Introduce tu nota");
		mensaje = mensaje.toLowerCase();
	
	if ( mensaje != "fin") {
		mensaje = parseFloat(mensaje);
		if (mensaje <= 10) {
		notas.push(mensaje);
		console.log(notas);
		} else {
		alert("Introduce un número del 0 al 10");
	}
	}
	}
		//calcular media: suma de notas 
		var media = 0;
		for (var i = 0; i < notas.length; i++) {
			var media = media + notas[i];
			console.log(media);
		}
		var resultado = media/notas.length;
		console.log(resultado);
		//cantidad notas y mostrar
		//mostrar si es suficiente, matricula...
		if ( resultado < 5) {
			console.log("¡Has suspendido, estudia más!");
		}
		else if (resultado < 6) {
			console.log("Has sacado un suficiente, ¡esfuerzate más!");
		}
		else if (resultado < 7) {
			console.log("Has sacado un bien");
		}
		else if  (resultado < 8) {
			console.log("Has sacado un notable");
		}
		else if (resultado < 9) {
			console.log("Has sacado un sobresaliente, enhorabuena");
		}
		else if (resultado == 10) {
			console.log ("¡Has sacado matricula!¡Eres un máquina!");
		}
}

calcularMedia();