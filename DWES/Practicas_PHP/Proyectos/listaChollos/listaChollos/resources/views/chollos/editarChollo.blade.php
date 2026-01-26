<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
</head>

@extends('chollos/navbar')
@section('content')

    <body>
        <form action="{{route('actualizar', $chollo->id)}}" method="POST" enctype="multipart/form-data">
            @csrf
            <h1 class=" text-3xl font-bold">Editar Chollo</h1>

            <label for="titulo">titulo</label>
            <input type="text" name="titulo" id="titulo" value="{{$chollo->titulo}}">

            <label for="descripcion">descripcion</label>
            <input type="text" name="descripcion" id="descripcion" value="{{$chollo->descripcion}}">

            <label for="url">url</label>
            <input type="file" name="url" id="url" value="{{$chollo->url}}">

            <label for="categoria">categoria</label>
            <input type="number" name="categoria_id" id="categoria" value="{{$chollo->categoria_id}}">

            <label for="puntuacion">puntuacion</label>
            <input type="number" name="puntuacion" id="puntuacion" value="{{$chollo->puntuacion}}">

            <label for="precio">precio de mercado</label>
            <input type="number" name="precio" id="precio" value="{{$chollo->precio}}">
            
            <label for="precioDescuento">precio descuento</label>
            <input type="number" name="precio_descuento" id="precioDescuento" value="{{$chollo->precio_descuento}}">

            <label for="disponible">disponible</label>
            <input type="number" name="disponible" id="disponible" value="{{$chollo->disponible}}">

            <input type="submit" value="editar" name="editar">
            <a href="{{ route('inicio') }}" class="boton">regresar</a>
        </form>
    </body>

@endsection

</html>
