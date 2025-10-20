<?php 

try{
$conn = new PDO ("mysql:host=localhost;dbname=dwes", "root", "");
$conn ->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
    die("conexion fallida") . $e->getMessage;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="" method="post">

        <label for="UsuarioContraseña">Usuario/Correo</label>
            <input type="text" name="UserEmail" id="UsuarioContraseña">
            
        <label for="contraseña">Contraseña</label>
            <input type="password" name="password" id="contraseña">

        <button type="submit">Iniciar Sesion</button>
    </form>

</body>
</html>

<?php 

if(isset($_POST['UserEmail'])){
    if(isset($_POST['password'])){

    // SELECT Usuario,Contraseña FROM infousers WHERE Usuario = "Concor" AND Contraseña = "ConcorMine"
        $sql = 'SELECT Usuario,Contraseña 
            FROM infousers 
            WHERE Usuario = :Usuario AND Contraseña = :Contraseña';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Usuario', $_POST["UserEmail"]);
    $stmt->bindParam(':Contraseña', $_POST["password"]);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);


    }else{
        echo"error al introducir la contraseña";
    }
}else{
    echo"error al introducir el nombre u correo";
}

?>