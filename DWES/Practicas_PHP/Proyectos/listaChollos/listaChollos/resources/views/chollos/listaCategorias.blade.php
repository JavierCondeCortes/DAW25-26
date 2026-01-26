<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @extends('chollos/navbar')
</head>

@section('content')

    <body class=" h-[100vh]">
        @if (session('catEliminada'))
            <p>{{ session('catEliminada') }}</p>
        @endif
        <div class=" border-red-100 rounded-sm w-[40vw] h-[40vh] mx-auto my-auto ">
            <table>
                <tr class=" font-bold">
                    <td>ID:</td>
                    <td>Nombre:</td>
                    <td>Cantidad:</td>
                    <td>Accion:</td>
                </tr>
                @foreach ($categorias as $categoria)
                    <tr>
                        <td>{{ $categoria->id }}</td>
                        <td>{{ $categoria->name }}</td>
                        <td>{{ $categoria->chollos_count }}</td>
                        <td><button><a href="{{ route('catElim', $categoria->id) }}">Emininar</a></button></td>
                    </tr>
                @endforeach
            </table>
            <h2 class=" font-bold mt-5">Agregar nueva categoria</h2>
            <form action="{{ route('catCreate') }}" method="POST" class="flex">
                @csrf
                <input type="text" name="name" class="mr-3">
                <button type="submit">Crear</button>
            </form>
        </div>
    </body>

@endsection

</html>