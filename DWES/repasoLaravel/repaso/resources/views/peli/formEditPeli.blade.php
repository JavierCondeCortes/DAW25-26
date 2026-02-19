@extends('nav')

@section('apartado')
    <form action="{{ route('editarPelicula',$peli) }}" method="post">
        @csrf
        @method('PUT')
        <label for="">titulo</label>
        <input type="text" name="titulo" value="{{ $peli->titulo }}">
        @error('titulo')
            {{ $message }}
        @enderror
        <label for="">director</label>
        <input type="text" name="director" value="{{ $peli->director }}">
        @error('director')
            {{ $message }}
        @enderror
        <label for="">año</label>
        <input type="text" name="anio" value="{{ $peli->anio }}">
        @error('anio')
            {{ $message }}
        @enderror
        <label for="">genero</label>
        <input type="text" name="genero" value="{{ $peli->genero }}">
        @error('genero')
            {{ $message }}
        @enderror
        <label for="">disponibilidad</label>
        <input type="checkbox" name="disponible" {{ $peli->disponible ? 'checked' : ''}} >
        <label for="">categoria</label>
        <select name="categoria_id">
            @foreach ($cat as $categoria)
                <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
            @endforeach
        </select>
        <button type="submit">editar</button>
    </form>
@endsection