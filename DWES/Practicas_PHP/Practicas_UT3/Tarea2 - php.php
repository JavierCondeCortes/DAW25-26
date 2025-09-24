<?php 

if(isset($_POST["enviar"])){
    $errores = [];
    if(empty($_POST["nombre" || "apellido" || "telefono"])){
        $errores[] = "faltan datos por rellenar";
    }
    if(count($errores)>0){
        echo "errores encontrados" ."<br>";
        foreach($errores as $error){
            echo $error . "<br>";
        }
    }else{
        echo $_POST["nombre"]." ".$_POST["apellido"]." ".$_POST["telefono"];
    }
    
}else{
    require "./Tarea2FormularioPersona.php";
}

?>