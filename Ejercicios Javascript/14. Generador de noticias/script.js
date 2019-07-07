function crearNoticia(){
    var article = document.createElement("article");
    var newElemh1 = document.createElement("h1");
    var newElemimg = document.createElement("img");
    var newElemautor = document.createElement("p")
    var newElemparraf = document.createElement("p");

    article.className = "article-izq";
    newElemh1.className = "article-izq__title";
    newElemautor.className = "article-izq__autor";
    newElemimg.className = "article-izq__image";
    newElemparraf.className = "article-izq__parraf";

    //busca
    var inputTitle = document.getElementById("titulo");
    var inputUrl = document.getElementById("url");
    var inputAutor = document.getElementById("autor");
    var inputParraf = document.getElementById("parraf");
    //reemplaza
    newElemh1.innerText = inputTitle.value;
    newElemimg.src = inputUrl.value;
    newElemautor.innerText = inputAutor.value;
    newElemparraf.innerText = inputParraf.value;

    article.appendChild(newElemh1);
    article.appendChild(newElemimg);
    article.appendChild(newElemautor);
    article.appendChild(newElemparraf);


    var noticias = document.querySelector("section.noticias");
    noticias.appendChild(article);
    var noticias = document.querySelector("section.noticias");
    noticias.appendChild(article);
    var noticias = document.querySelector("section.noticias");
    noticias.appendChild(article);
    var noticias = document.querySelector("section.noticias");
    noticias.appendChild(article);
}
