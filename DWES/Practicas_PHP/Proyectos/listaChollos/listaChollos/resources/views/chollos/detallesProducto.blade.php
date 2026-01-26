<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @extends('chollos/navbar')
</head>
<body>
    @section('content')
        
    <h1>{{ $chollo -> titulo }}</h1>
    <p>{{ $chollo -> descripcion }}</p>
    <p>precio sin descuento: {{ $chollo -> precio }}€</p>
    <p>precio con descuento: {{ $chollo -> precio_descuento }}€</p>
    <p>precio con descuento: {{ $chollo -> categoria->name}}</p>

    <button class=" bg-slate-700 p-2 rounded text-white hover:bg-slate-400 hover:text-black transition-all"> <a href="{{route('inicio')}}">Inicio</a></button>
    <button class=" bg-slate-700 p-2 rounded text-white hover:bg-slate-400 hover:text-black transition-all"> <a href="{{route('editar',['id' => $chollo->id])}}">Editar</a></button>
    
    @endsection
</body>
</html>