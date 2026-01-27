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

            <label for="image">imagen</label>
            <div class="mb-3">
                <div class="input-group">
                    <input type="file" class="form-control @error('image') is-invalid @enderror" id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/*" name="image"
                        onchange="document.getElementById('preview').src = window.URL.createObjectURL(this.files[0]);document.getElementById('preview').style.display = 'block';">
                </div>
            </div>
            <div class="mb-3">
                @error('image')
                    <div class="text-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <img id="preview" src="" alt="Image preview"
                    style="max-width: 300px; display: block; border: 1px solid #ccc; padding: 5px;display:none;">
            </div>

            <label for="categoria">categoria</label>
            <br>
            <select name="categoria_id" id="categoria">
                @foreach ($categorias as $categoria)
                    <option value="{{ $categoria->id }}">{{ $categoria->name }}</option>
                @endforeach
            </select>
            <br>
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
