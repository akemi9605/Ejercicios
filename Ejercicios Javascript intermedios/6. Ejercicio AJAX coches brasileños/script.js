function makeRequest(){
    let httpRequest = new XMLHttpRequest(); 

    function handleResponse(response) {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let coches = JSON.parse(httpRequest.responseText);

                for (let i = 0; i < coches.length; i++) {
                    let coche = coches[i];
                    let fila = document.createElement('tr');
                    let celda1 = document.createElement('td');
                    let celda2 = document.createElement('td');
                    celda1.innerText = coche.codigo;
                    celda2.innerText = coche.nome;
                    
                    fila.append(celda1);
                    fila.append(celda2);

                    let tableBody = document.querySelector(".table-body");
                    tableBody.appendChild(fila);
                }
                
            } else {
                alert("There was an error");
            }
        }
    }

    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET','https://parallelum.com.br/fipe/api/v1/carros/marcas');
    httpRequest.send();
}

makeRequest();