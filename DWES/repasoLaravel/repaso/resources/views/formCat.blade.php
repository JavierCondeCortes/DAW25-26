@extends('nav')

@section('apartado')

<form action="{{ route('crearCat') }}" method="post">
    @csrf
    <label for="">nombre</label>
    <input type="text" name="nombre" >

    <label for="">descripcion</label>
    <input type="text" name="descripcion" >
    <input type="submit" value="crear">
</form>
@endsection