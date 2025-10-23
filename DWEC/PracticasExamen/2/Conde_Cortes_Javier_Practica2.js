let Libro = ([{
    Nombre: "Jorge el curioso",
    Color: "verde",
    Autor: "Stevan Ocon",
    NPaginas: 110,
    Editorial: "Angular",
    Forrado: true,
    UrlCover: "https:/JorgeElCurioso",
    Comprar: function() {
        console.log(`Libros de aventura del autor ${this.Autor} comprado`);
    },
    toString: function() {
        console.log(`${this.Nombre}-${this.Autor}(${this.NPaginas})**${this.Forrado}`);
    }
}, {
    Nombre: "F1",
    Color: "azul",
    Autor: "Fernando Alonso",
    NPaginas: 33,
    Editorial: "Renault",
    Forrado: true,
    UrlCover: "https:/APorLa33",
    Comprar: function() {
        console.log(`Libros de aventura del autor ${this.Autor} comprado`);
    },
    toString: function() {
        console.log(`${this.Nombre}-${this.Autor}(${this.NPaginas})**${this.Forrado}`);
    }
}, {
    Nombre: "Lagartijas",
    Color: "amarillo",
    Autor: "A.J.Perez",
    NPaginas: 53,
    Editorial: "Casa",
    Forrado: false,
    UrlCover: "https:/Lagartija",
    Comprar: function() {
        console.log(`Libros de aventura del autor ${this.Autor} comprado`);
    },
    toString: function() {
        console.log(`${this.Nombre}-${this.Autor}(${this.NPaginas})**${this.Forrado}`);
    }
}, {
    Nombre: "Pcs",
    Color: "naranja",
    Autor: "PCcom",
    NPaginas: 200,
    Editorial: "PCcom",
    Forrado: false,
    UrlCover: "https:/PCcomLibro",
    Comprar: function() {
        console.log(`Libros de aventura del autor ${this.Autor} comprado`);
    },
    toString: function() {
        console.log(`${this.Nombre}-${this.Autor}(${this.NPaginas})**${this.Forrado}`);
    }
}
])

//1
console.log("----Ejercicio1----")
for(let i=0; i<Libro.length ;i++){
    console.log("------ Comprar ------");
    Libro[i].Comprar();
    console.log("------ ToString ------");
    Libro[i].toString();
}

//2
console.log("----ejercicio 2----");
for (const libroBiblio of Libro) {
    const BIBLIOTECA = [libroBiblio.Nombre, libroBiblio.Autor, libroBiblio.Editorial];
    console.log(BIBLIOTECA);
}

//3
console.log("----ejercicio 3----");
for (const EditorialBuscada of Libro) {
    console.log(EditorialBuscada.Editorial);
}

//4
console.log("----ejercicio 4----");
let checkPages = () => Libro.NPaginas > 150 ? console.log("tru") : console.log("false");
// let checkLibros = () => Libro.Nombre =

//No me da, creo que ya se donde fallo y es practicamente en objetos, pero del todo