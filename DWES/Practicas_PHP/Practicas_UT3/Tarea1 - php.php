<?php 

    if(isset($_POST["enviar"])){

        if(isset($_POST["fruta"])){
            echo "fruta fav: ".$_POST["fruta"];
        }else{
            require("./Tarea1FormularioFrutaFav.php");
            echo"a";
        }

    }else{
        require("./Tarea1FormularioFrutaFav.php");
        echo"b";
    }

?>