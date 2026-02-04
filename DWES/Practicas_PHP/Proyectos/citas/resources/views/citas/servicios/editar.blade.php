<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="{{route('formServEditar',$servicio ->id)}}" method="get">
        @csrf
        <label for="nombre">nombre</label>
        <input type="text" id="nombre" name="nombre" value="{{$servicio->nombre}}">
        <label for="duracion_minutos">duracion</label>
        <input type="number" id="duracion_minutos" name="duracion_minutos" value="{{$servicio->duracion_minutos}}">
        <label for="precio">precio</label>
        <input type="number" id="precio" name="precio" value="{{$servicio ->precio}}">
        <label for="activo">activo</label>
        <input type="checkbox" id="activo" name="activo" >
        <input type="submit" value="editar">
    </form>
</body>
</html>