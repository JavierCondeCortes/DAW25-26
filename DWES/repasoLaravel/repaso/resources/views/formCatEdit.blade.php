@extends('nav')

@section('apartado')

<form action="{{ route('editarCat',$categoria->id) }}" method="post">
    @method('PUT');
    @csrf
    <label for="">nombre</label>
    <input type="text" name="nombre" value="{{ $categoria->nombre }}">

    <label for="">descripcion</label>
    <input type="text" name="descripcion" value="{{ $categoria->descripcion }}" >
    <input type="submit" value="editar">
</form>
@endsection