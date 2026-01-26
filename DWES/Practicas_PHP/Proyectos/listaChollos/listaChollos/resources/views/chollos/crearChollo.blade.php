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

        @if ($errors->any())
            <div class="bg-red-200 text-red-800 p-3 rounded mb-4">
                <ul class="list-disc pl-5">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif


        <form action="{{ route('chollos.nuevoChollo') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <h1 class=" text-3xl font-bold">Crear Chollo</h1>

            <label for="titulo">titulo</label>
            <input type="text" name="titulo" id="titulo">

            <label for="descripcion">descripcion</label>
            <input type="text" name="descripcion" id="descripcion">

            <label for="url">url</label>
            <input type="file" name="url" id="url">

            <label for="categoria">categoria</label>
            <input type="number" name="categoria_id" id="categoria">

            <label for="puntuacion">puntuacion</label>
            <input type="number" name="puntuacion" id="puntuacion">

            <label for="precio">precio de mercado</label>
            <input type="number" name="precio" id="precio">

            <label for="precioDescuento">precio descuento</label>
            <input type="number" name="precio_descuento" id="precioDescuento">

            <label for="disponible">disponible</label>
            <input type="number" name="disponible" id="disponible">

            <input type="submit" value="Agregar" name="agregar">
            <a href="{{ route('inicio') }}" class="boton">regresar</a>
        </form>
    </body>

@endsection

</html>
