class Empresa {
    constructor(name, catchPhrase, bs){
        this._name = name;
        this._catchPhrase = catchPhrase;
        this._bs = bs;
    }
    draw(){
        document.querySelector("#nombreEmpresa").innerText = this._name;
        document.querySelector("#fraseEmpresa").innerText = this._catchPhrase;
        document.querySelector("#negocioEmpresa").innerText = this._bs;
    }
}
class Direccion {
    constructor(street, suite, city, zipcode, lat, lng){
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
        this._lat = lat;
        this._lng = lng;
    
    }
    draw(){
        document.querySelector("#nombrecalle").innerText = this._street;
        document.querySelector("#suiteDireccion").innerText = this._suite;
        document.querySelector("#nombreCiudad").innerText = this._city;
        document.querySelector("#zipcode").innerText = this._zipcode;
        document.querySelector("#Latitud").innerText = this._lat;
        document.querySelector("#Longitud").innerText = this._lng;
    }
}
class Usuario {
    constructor(name, username, email, company, address){
        this._name = name;
        this._username = username;
        this._email = email;
        this._company = company;
        this._address = address;
    }
    init(){
        this.draw();
    }

    draw(){
        console.log("El nombre es:" + this._name);
        //OTRA OPCION MAS RAPIDA
        let fila = document.createElement("tr");
        let contenidofila = `
        <td>${this._name}</td>
        <td>${this._username}</td>
        <td>${this._email}</td>
        <td><button id="verDireccion" class="">VER</button></td>
        <td><button id="verEmpresa" class="">VER</button></td>
        `;
        fila.innerHTML = contenidofila;
        fila.querySelector("#verDireccion").addEventListener("click", () =>{
            this._company.draw();
        });
        fila.querySelector("#verEmpresa").addEventListener("click", () =>{
            this._address.draw();
        });
        let tableBody = document.querySelector("#table-body");
        tableBody.appendChild(fila);


         
    }

    showCompany(){

    }

    showAddress(){

    }

}



class Agenda {
    constructor(){
        this._users = [];
    }

    searchUsers(){
        //busca un usuario y te lo devuelve

    }
    
    addUsers(usuario){
        //añade un usuario a la agenda
        this._users.push(usuario);
    }

    fillDataApi(){
        //rellenar con datos de la api, hace una peticion, se trae los usuarios y los añade a la agenda
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response){
            return response.json();
        })
        .then((data) =>{
            for( let userData of data){
                let direccion = new Direccion(userData.address.street, userData.address.suite, userData.address.city, userData.address.zipcode, userData.address.geo.lat, userData.address.geo.lng)
                let empresa = new Empresa(userData.company.name, userData.company.catchPhrase, userData.company.bs)
                this.addUsers(new Usuario(userData.name, userData.username, userData.email, direccion, empresa));
            }
                this.howManyUsers();
        });
    }
    howManyUsers(){
        console.log(this._users.length);
    }

    drawListUsers(){
        for(let user of this._users){
            user.draw();
        }
    }

}

let miAgenda = new Agenda();
miAgenda.fillDataApi();
miAgenda.howManyUsers();
setTimeout(() => miAgenda.drawListUsers(),2000);

