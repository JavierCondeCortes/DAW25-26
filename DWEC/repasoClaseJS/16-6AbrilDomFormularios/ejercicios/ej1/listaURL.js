const Url = ["javiercondecortes.com","youtube.com","amazon.es"];

const bodys = document.getElementsByTagName("body")[0];
const lista = document.createElement("ul");

bodys.appendChild(lista);
// document.body.appendChild(lista);

Url.forEach(url => {
    const item = document.createElement("li");
    const iurl = document.createElement("a");

    iurl.href = "https://"+url;
    iurl.textContent = "https://"+url;

    item.appendChild(iurl);
    lista.appendChild(item);
});
