let controlClick = function(){
    const linkList = document.querySelectorAll('a');

    for (let i = 0; i < linkList.length; i++) {
        linkList[i].addEventListener('click', function(event){
            event.preventDefault();
            console.log(event.currentTarget.href);

            funcionChachi(event.currentTarget.href);
        })
    }
}

functionChachi(event.currentTarget.href) {
            let img = document.createElement("img");
            let nombre = document.createElement("p");
            let weight = document.createElement("p");
            let height = document.createElement("p");
            img.src = myJson.sprites.back_default;
            img.setAttribute("src", myJson.sprites.back_default);

            nombre.innerText = subPromesa.name;
            weight.innerText = subPromesa.weight;
            height.innerText = subPromesa.height;

            fila.appendChild(img);
            let celda3 = document.createElement('td');
            let celda4 = document.createElement('td');
            weight.innerText = myJson.weight;
            celda3.appendChild(weight);
            height.innerText = myJson.height;
            celda4.appendChild(height);
            fila.appendChild(celda3);
            fila.appendChild(celda4);
}

let pokemons;
var promesa = fetch('https://pokeapi.co/api/v2/pokemon/')
promesa.then(function(response){
    return response.json();
})
.then(function (myJson){
    console.log(myJson);
    pokemons = myJson.results;
    for (let i = 0; i < myJson.results.length; i++) {
        let pokemon = myJson.results[i];
        let fila = document.createElement("tr");
        let celda1 = document.createElement("a");
        let celda2 = document.createElement("td");

        celda1.href = pokemon.url;
        celda1.innerText = pokemon.name;
        //celda2.innerText = pokemon.url;

        fila.appendChild(celda1);
        fila.appendChild(celda2);

        let tableBody = document.querySelector(".table-body");
        tableBody.appendChild(fila);

        var subPromesa = fetch(pokemon.url);
        subPromesa.then(function(response){
            return response.json();
        })
        .then(function (myJson){
            console.log(myJson.sprites.back_default);
/*
            let img = document.createElement("img");
            let nombre = document.createElement("p");
            let weight = document.createElement("p");
            let height = document.createElement("p");
            img.src = myJson.sprites.back_default;
            img.setAttribute("src", myJson.sprites.back_default);

            nombre.innerText = subPromesa.name;
            weight.innerText = subPromesa.weight;
            height.innerText = subPromesa.height;

            fila.appendChild(img);
            let celda3 = document.createElement('td');
            let celda4 = document.createElement('td');
            weight.innerText = myJson.weight;
            celda3.appendChild(weight);
            height.innerText = myJson.height;
            celda4.appendChild(height);
            fila.appendChild(celda3);
            fila.appendChild(celda4);

*/
        });
    }
    
controlClick();
});



