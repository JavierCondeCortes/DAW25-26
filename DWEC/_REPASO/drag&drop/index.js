
let contenedor = document.getElementById("contenedor");
contenedor.style.display = "flex";
contenedor.style.gap = "5px";

//declaracion de contenedores
for(let i=0;i<10;i++){
    let caja = document.createElement("div");
    caja.style.height = "50px"
    caja.style.width = "50px"
    caja.style.border = "1px solid black"
    caja.style.backgroundColor = "orange";
    caja.draggable = true

    //numero aleatorio
    caja.textContent = Math.floor(Math.random()*99);

    //aplicar eventos a las cajas
    caja.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    caja.addEventListener("dragstart",function(e){
        e.dataTransfer.setData("text/plain", this.textContent);
        caja.style.backgroundColor = "red";
        caja.id="origin";
    })
    caja.addEventListener("dragend",function(){
        caja.style.backgroundColor = "orange";
        caja.id="";
    })
    caja.addEventListener("drop",function(e){
        e.preventDefault()
        let datosArrastrados = e.dataTransfer.getData("text/plain");
        //coger datos de esta caja
        let textoToOrigin = caja.textContent;
        //poner datos de la caja origen
        caja.innerHTML = datosArrastrados;
        //poner dato en la caja origen
        let origen = document.getElementById("origin");
        origen.textContent = textoToOrigin;
    })

    //poner las cajas en body
    contenedor.appendChild(caja);
}
