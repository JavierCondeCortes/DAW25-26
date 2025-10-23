let libro = ([{
	Nombre: "Jorge el curioso",
	Color: "verde",
	Autor: "Stevan Ocon",
	NPaginas: 110,
	Editorial: "Angular",
	Forrado: true,
	urlCover: "https:/JorgeElCurioso",
	Comprar: function() {
		console.log(`libros de aventura del autor ${this.Autor} comprado`);
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
	urlCover: "https:/APorLa33",
	Comprar: function() {
		console.log(`libros de aventura del autor ${this.Autor} comprado`);
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
	urlCover: "https:/Lagartija",
	Comprar: function() {
		console.log(`libros de aventura del autor ${this.Autor} comprado`);
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
	urlCover: "https:/PCcomlibro",
	Comprar: function() {
		console.log(`libros de aventura del autor ${this.Autor} comprado`);
	},
	toString: function() {
		console.log(`${this.Nombre}-${this.Autor}(${this.NPaginas})**${this.Forrado}`);
	}
}
])

//1
console.log("----Ejercicio1----")
for(let i=0; i<libro.length ;i++){
	console.log("------ Comprar ------");
	libro[i].Comprar();
	console.log("------ ToString ------");
	libro[i].toString();
}

//2
console.log("----ejercicio 2----");
let fBiblioteca = () => {for (const {Nombre,Autor,Editorial} of libro) {
	const biblioteca = [Nombre, Autor, Editorial];
	console.log(biblioteca);
	}
}
fBiblioteca();

//3
console.log("----ejercicio 3----");
for (const EditorialBuscada of libro) {
	console.log(EditorialBuscada.Editorial);
}

//4 // Iteración For...of y Desestructuracion https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring 
console.log("----ejercicio 4----");
console.log("--verificacion CheckPages--");
for (const {NPaginas:pag, Nombre:titulo} of libro) {
	const checkPages = () => pag > 150 ? console.log(`el libro ${titulo} es de estado true`) : console.log(`el libro ${titulo} es de estado false`);
	checkPages();
}

console.log("--verificacion CheckLibro--");
let tituloBuscado = "Lagartijas";
let checkLibro = (busqueda) =>{ 
	for (const {Nombre:titulo} of libro) {
		busqueda === titulo ? console.log("nice") : console.log("bad");
	}	
}
checkLibro(tituloBuscado);

