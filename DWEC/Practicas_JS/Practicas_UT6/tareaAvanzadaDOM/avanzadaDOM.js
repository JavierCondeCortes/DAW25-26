//seleccion de color
let seleccionColor = document.querySelectorAll('#paleta td');
seleccionColor.forEach(paleta => {
    paleta.addEventListener('click', function (event) {
        if (event.target.closest('#paleta td')) {
            seleccionColor.forEach(color => {
                color.classList.remove('seleccionado');
            });
            event.target.classList.add('seleccionado');
        }
    });
});


//creacion de matriz
x = 30;
y = 30;

let matriz = document.getElementById('zonadibujo');
let tabla = document.createElement('table')
matriz.appendChild(tabla);

for (let i = 0; i < x; i++) {
    let casillaV = document.createElement('tr');
    tabla.appendChild(casillaV);
    for (let f = 0; f < y; f++) {
        let casillaH = document.createElement('td');
        casillaH.addEventListener('mousemove', function (event){
            
        })
        casillaH.setAttribute('style', 'border: 1px solid black;');
        casillaV.appendChild(casillaH);
    }
}

//estado de pincel
let pincelEstado = document.getElementById('#pincel');
matriz.document.addEventListener('click', function(event){
    if(pincelEstado == false){
        pincelEstado.textContent ='activado';
    }
});

