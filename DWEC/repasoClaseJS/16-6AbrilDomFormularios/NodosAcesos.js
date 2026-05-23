//appendChild de un titulo anidada de tagname

const parrafo = document.createElement('h1');

parrafo.textContent = "HOLAA MUNDOO";
parrafo.style.color = "blue";
parrafo.style.backgroundColor = "red";

const contenedor = document.getElementsByTagName("body")[0];

contenedor.appendChild(parrafo);

//appendChild de una lista anidada a un id

const lista = document.createElement("ul");
lista.style.listStyle = "none";

const it1 = document.createElement("li");
it1.textContent = "it1";
const it2 = document.createElement("li");
it2.textContent = "it2";
const it3 = document.createElement("li");
it3.textContent = "it3";

const bodyContenedor = document.getElementById("body");

bodyContenedor.appendChild(lista);
lista.appendChild(it1);
lista.appendChild(it2);
lista.appendChild(it3);

