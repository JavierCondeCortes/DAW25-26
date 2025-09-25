<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="./Tarea2Php.php" method="post"
        enctype="multipart/form-data">

        <label>nombre:
            <input type="text" name="nombre"></label><br>
        <label>apellido:
            <input type="text" name="apellido"></label><br>
        <label>telefono:
            <input type="text" name="telefono"></label><br>

            <br>

        <label>subir documento</label>
            <br>
            <input type="file" name="documento">


        <label>select uor favorite option</label>
                <br>
            <label >pizza
                <input type="radio" name="comida" value="pizza">
            </label>
                <br>
            <label >hamburger
                <input type="radio" name="comida" value="hamburger">
            </label>
                <br>
            <label >pechuga
                <input type="radio" name="comida" value="pechuga">
            </label>
                <br>
            <label >fish and chips
                <input type="radio" name="comida" value="fish and chips">
            </label>

                <br>

            <label>Deportes favoritos</label>
                <br>
                <label>Futbol
                    <input type="checkbox" name="Deportes[]" value="Futbol">
                </label>
                    <br>
                <label>Tenis
                    <input type="checkbox" name="Deportes[]" value="Tenis">
                </label>
                    <br>
                <label>Gaming
                    <input type="checkbox" name="Deportes[]" value="Gaming">
                </label>
                    <br>
                <label>zzz
                    <input type="checkbox" name="Deportes[]" value="zzz">
                </label>

                <br>
        
        <button type="submit" name="enviar">Enviar</button>
        
    </form>


</body>
</html>