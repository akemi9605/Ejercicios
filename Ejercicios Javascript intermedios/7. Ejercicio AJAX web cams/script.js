function makeRequest(){
    let httpRequest = new XMLHttpRequest(); 

    function handleResponse(response) {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let webCams = JSON.parse(httpRequest.responseText);

                for (let i = 0; i < webCams.length; i++) {
                    let webCam = webCams[i];
                    let fila = document.createElement('tr');
                    let celda1 = document.createElement('td');
                    let celda2 = document.createElement('td');
                    let celda3 = document.createElement('td');
                    let celda4 = document.createElement('td');
                    let celda5 = document.createElement('td');
                    let enlace = document.createElement('a');
                    enlace.href = webCam.url;
                    enlace.innerText = 'Ver video';
                    enlace.target = '_blank';
                    celda1.innerText = webCam.latitude;
                    celda2.appendChild(enlace);
                    celda3.innerText = webCam.type;
                    celda4.innerText = webCam.name;
                    celda5.innerText = webCam.longitude;
                    
                    fila.appendChild(celda1);
                    fila.appendChild(celda2);
                    fila.appendChild(celda3);
                    fila.appendChild(celda4);
                    fila.appendChild(celda5);

                    let tableBody = document.querySelector(".main__pokemon-detail");
                    tableBody.appendChild(fila);
                }
                
            } else {
                alert("There was an error");
            }
        }
    }

    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open("GET","https://api.oceandrivers.com/v1.0/getWebCams/");
    httpRequest.send();
}

makeRequest();