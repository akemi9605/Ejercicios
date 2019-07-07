var arrayDeTest1 = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];
var arrayDeTest2 = ["Blanka", "Zangief", "Chun Li", "Guile"];
var arrayDeTest3 = ["Red", "Blue", "Green"];

function buscarStringMasLargo(arrayEnElQueBuscar) {
  var resultado = 0;

  for (var i = 0; i < arrayEnElQueBuscar.length; i++) {
    if (arrayEnElQueBuscar[i].length > resultado) {
      resultado = arrayEnElQueBuscar[i].length;
    }
  }

  return resultado;
}

function calcularMedia() {
  var resultadoArrayTest1 = buscarStringMasLargo(arrayDeTest1);
  var resultadoArrayTest2 = buscarStringMasLargo(arrayDeTest2);
  var resultadoArrayTest3 = buscarStringMasLargo(arrayDeTest3);

  var media = (resultadoArrayTest1 + resultadoArrayTest2 + resultadoArrayTest3) / 3;
  console.log("La media es " + Math.trunc(media));
}

calcularMedia();