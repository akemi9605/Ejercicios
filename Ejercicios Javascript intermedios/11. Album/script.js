class Album {
    constructor(userId, id, title){
        this._userId = userId;
        this._id = id;
        this._title = title;
    }
    drawAlbumRow() {
        let albumData = document.querySelector(".albumData");
        let newAlbumRow = document.createElement("tr");
        let newAlbumUserId = document.createElement("td");
        newAlbumUserId.innerText = this._userId;
        newAlbumRow.appendChild(newAlbumUserId);
        let newAlbumId = document.createElement("td");
        newAlbumId.innerText = this._id;
        newAlbumRow.appendChild(newAlbumId);
        let newAlbumTitle = document.createElement("td");
        newAlbumTitle.innerText = this._title;
        newAlbumRow.appendChild(newAlbumTitle);
        let newAlbumButton = document.createElement("td");
        let newAlbumButtonObject = document.createElement("button");
        newAlbumButtonObject.innerText = "Ver album";
        newAlbumButtonObject.addEventListener("click", () => this.fetchPhotos());
        newAlbumButton.appendChild(newAlbumButtonObject);
        newAlbumRow.appendChild(newAlbumButton);
        albumData.appendChild(newAlbumRow);
    }
    fetchPhotos() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                return response.json();
            })
            .then((photosResponse) => {
                this.handlePhotosResponse(photosResponse);
            });
    }
    handlePhotosResponse(photoJson) {
        let albumFotos = document.querySelector(".albumPhotos");
        while (albumFotos.firstChild) {
            albumFotos.removeChild(albumFotos.firstChild);
        }
        let albumTitle = document.createElement("h3");
        albumTitle.innerText = "Album Photos " + this._id;
        albumFotos.appendChild(albumTitle);
        for (const iterator of photoJson) {
            if(iterator.albumId === this._id){
                let albumPhoto = document.createElement("img");
                albumPhoto.src = iterator.thumbnailUrl;
                albumPhoto.alt = "Album photo " + iterator.albumId;
                albumFotos.appendChild(albumPhoto);
            }
        }
    }
}
class AppClass{
    constructor(){
        this._albums = [];
    }
    init(){
        this.fetchDataFromApi();
    }
    fetchDataFromApi(){
        const albumApiUrl = "https://jsonplaceholder.typicode.com/albums";
        fetch(albumApiUrl)
            .then((response) => {
                return response.json();
            })
            .then((albumResponse) => {
                this.handleAlbumResponse(albumResponse);
            });
    }
    handleAlbumResponse(myJson){
        this._albums = [];
        for (const iterator of myJson) {
            let albumObj = new Album(iterator.userId, iterator.id, iterator.title);
            this._albums.push(albumObj);
        }
        this.drawAllAlbums();
    }
    drawAllAlbums() {
        // Vacíamos la tabla
        let table = document.querySelector(".albumData");
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
        // Pintamos los albums
        for (const iterator of this._albums) {
            iterator.drawAlbumRow();
        }
    }
}

const miAppClass = new AppClass();
miAppClass.init();