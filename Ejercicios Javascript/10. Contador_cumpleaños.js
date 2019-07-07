function edad (){
	año = prompt("¿En que año naciste?");
	mes = prompt("¿En que mes naciste?");
	dia = prompt("¿En que día naciste?");
	var fechaActual = new Date().getTime();
	console.log(fechaActual);
	var fechaNacimiento = new Date(dia+"-"+mes+"-"+año).getTime();
	console.log(fechaNacimiento);
	var diff = fechaActual - fechaNacimiento;
	diff = diff.toLocaleDateString();
	return diff;
}
edad();
//otra version

function getEdad(fNac, fActual = (new Date())) {
  var diff = (fActual - fNac) / (365 * 24 * 60 * 60 * 1000);
  return Math.floor(diff);
}

año = prompt("¿En que año naciste?");
mes = prompt("¿En que mes naciste?");
dia = prompt("¿En que día naciste?");

var fechaNacimiento = new Date(mes+"-"+dia+"-"+año).getTime();
const edad = getEdad(fechaNacimiento);

console.log(edad);
