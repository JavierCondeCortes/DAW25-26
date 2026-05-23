const texto = document.getElementsByTagName("p")[0];
//establecer valor a x elemento
// texto.textContent = "<h1>siuuu</h1>"; //<h1>siuuu</h1>
texto.innerHTML = "<h1>siuuu</h1>"; // siuuu en mayusculas

// obtener el valor de x elemento
alert(texto.innerHTML); //<h1>siuuu</h1>
