<?php 


?>

<form action="" method="get">
    <label for="nombre">nombre</label>
    <input type="text" id="nombre" name="nombre">
    <label for="contraseña">contraseña</label>
    <input type="password" id="contraseña" name=""contraseña>

    <label for="estudios">estudios</label>
    <label><input type="checkbox" name="estudios[]" value="mates">mates</label>
    <label><input type="checkbox" name="estudios[]" value="lengua">lengia</label>
    <label><input type="checkbox" name="estudios[]" value="fisica">fisica</label>
    <label><input type="checkbox" name="estudios[]" value="geografia">geografia</label>

    <label for="preferencia">optativa</label>
    <label><input type="radio" name="optativa" value="si">si</label>
    <label><input type="radio" name="optativa" value="no">no</label>
</form>