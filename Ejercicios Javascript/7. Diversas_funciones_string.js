 //Esta función recibe un string y devuelve el string inverso
var frase = "Me llamo Akemi";

function stringInverso(miFrase){
   var miArray = miFrase.split('');
   var resultado = "";

   for(var i = miFrase.length - 1; i >= 0; i--){
    var letra = miFrase[i];
    resultado = resultado + letra;
   }

   console.log(resultado);
}

stringInverso(frase);


// Esta función debe recibir un string y devolverlo con todas sus letras mayúscula
var frase = "MellamoAkemi";

   function stringMayuscula(miFrase){
       var miArray = miFrase.split('');
       resultado = "";

   var len = miFrase.length;
   var fraseMayuscula = "";

   console.log(len);

   for(var i = 0; i < len; i++){
       fraseMayuscula = fraseMayuscula + frase[i].toUpperCase();
   }
   console.log(fraseMayuscula);
}

stringMayuscula(frase);