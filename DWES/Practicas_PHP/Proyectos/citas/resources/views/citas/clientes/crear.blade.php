<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{ route('crearform') }}" method="post">
        @csrf
        @error('nombre')
            <p>el nombre es obligatorio</p>
        @enderror
        @error('email')
            <p>el correo no cumple las condiciones o existe</p>
        @enderror
        @error('telefono')
            <p>el telefono no cumple con con la cantidad de numeros</p>
        @enderror

        <label for="">nombre</label>
        <input type="text" name="nombre" id="nombre">
        <label for="">email</label>
        <input type="text" name="email" id="email">
        <label for="">telefono</label>
        <input type="text" name="telefono" id="telefono">
        <label for="">activado</label>
        <input type="checkbox" name="activado" id="activado">
        <input type="submit" value="enviar">
    </form>
</body>
</html>