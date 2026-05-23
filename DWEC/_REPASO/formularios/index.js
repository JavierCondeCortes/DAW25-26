//obtencion datos formulario

let fo = document.forms[0];
let contenedor = document.getElementById("contenedor")

fo.addEventListener("submit",function(e){
    e.preventDefault();
    let nombre= fo['nombre'].value;
    let apellido= fo['apellido'].value;
    let tel= fo['tel'].value;
    let gustos= fo['gustos'].value;
    let ceck= Array.from(fo['ceck']).filter(input => input.checked).map(input => input.value);
    let competicion= fo['competicion'].value;

    let fila = document.createElement("div");
    contenedor.append(fila);

    let cName = document.createElement("span");
    cName.textContent = nombre;
    contenedor.append(cName)

    let cLastName = document.createElement("span");
    cLastName.textContent = apellido;
    contenedor.append(cLastName)
    
    let cTel = document.createElement("span");
    cTel.textContent = tel;
    contenedor.append(cTel)
    
    let cGusto = document.createElement("span");
    cGusto.textContent = gustos;
    contenedor.append(cGusto)
    
    let cCeck = document.createElement("span");
    cCeck.textContent = ceck;
    contenedor.append(cCeck)
    
    let cCompeticion = document.createElement("span");
    cCompeticion.textContent = competicion;
    contenedor.append(cCompeticion)
    

    console.log(nombre);
    console.log(apellido);
    console.log(tel);
    console.log(gustos);
    console.log(ceck);
    console.log(competicion);
});

