@extends('nav')

@section('apartado')
    <form action="{{ route('crearPeli',) }}" method="post">
        @csrf
        <label for="">titulo</label>
        <input type="text" name="titulo">
        @error('titulo')
            {{ $message }}
        @enderror
        <label for="">director</label>
        <input type="text" name="director">
        @error('director')
            {{ $message }}
        @enderror
        <label for="">año</label>
        <input type="text" name="anio">
        @error('anio')
            {{ $message }}
        @enderror
        <label for="">genero</label>
        <input type="text" name="genero">
        @error('genero')
            {{ $message }}
        @enderror
        <label for="">disponibilidad</label>
        <input type="checkbox" name="disponible" >
        <label for="">categoria</label>
        <select name="categoria_id">
            @foreach ($cat as $categoria)
                <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
            @endforeach
        </select>
        <button type="submit">crear</button>
    </form>
@endsection