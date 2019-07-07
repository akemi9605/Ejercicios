var frases = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];
var resultado = {
	longitud: 0,
	laFraseMasLarga: ""
}
	for ( var i = 0; i < frases.length; i++ ) {
		console.log("En esta vuelta i vale" + i)
		if (frases[i].length > resultado.longitud) {
			resultado.longitud = frases[i].length;
			resultado.laFraseMasLarga = frases[i];
			console.log(resultado.longitud);
}
}
