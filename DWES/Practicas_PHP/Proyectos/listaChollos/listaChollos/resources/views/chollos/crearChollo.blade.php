<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
    @extends('chollos/navbar')
</head>

@section('content')

    <body>
        <form action="">
            <h1 class=" text-3xl font-bold">Crear Chollo</h1>

            <label for="titulo">titulo</label>
            <input type="text" name="titulo" id="titulo">

            <label for="descripcion">descripcion</label>
            <input type="text" name="descripcion" id="descripcion">

            <label for="url">url</label>
            <input type="file" name="url" id="url">

            <label for="categoria">categoria</label>
            <input type="number" name="categoria" id="categoria">

            <label for="puntuacion">puntuacion</label>
            <input type="number" name="puntuacion" id="puntuacion">

            <label for="precio">precio de mercado</label>
            <input type="number" name="precio" id="precio">
            
            <label for="precioDescuento">precio descuento</label>
            <input type="number" name="precioDescuento" id="precioDescuento">

            <input type="submit" value="Agregar" name="agregar">
        </form>
    </body>

@endsection

</html>
