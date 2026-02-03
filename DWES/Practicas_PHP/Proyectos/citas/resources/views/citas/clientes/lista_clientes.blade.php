<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>

<body>
    <div>
        @foreach ($clientes as $cliente)
            <div class=" my-2 text-white bg-slate-700 gap-2">
                <p>{{ $cliente->nombre }}</p>
                <p>{{ $cliente->email }}</p>
                <div>
                    <form action="{{ route('eliminar', $cliente->id) }}" method="post">
                        @method('DELETE')
                        @csrf
                        <input type="submit" value="Eliminar" class=" text-red-300 cursor-pointer">
                    </form>
                    <a href="{{route('editar',$cliente->id)}}" class=" text-blue-300">Editar</a>
                </div>
            </div>
        @endforeach
    </div>
    <a href="{{ route('page_crear') }}">crear</a>
</body>

</html>
