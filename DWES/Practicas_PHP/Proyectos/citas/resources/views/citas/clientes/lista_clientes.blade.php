<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>

<body class=" ">
    <div class=" flex gap-1">
        @foreach ($clientes as $cliente)
        <div class=" flex flex-col h-28 w-[25%] bg-slate-700 text-white pl-2 rounded-lg">
            <p>{{ $cliente->nombre }}</p>
            <p>{{ $cliente->email }}</p>
            <form class=" flex-grow content-center" action="{{ route('eliminar',$cliente->id) }}" method="post">
                @method('DELETE')
                @csrf
                <input type="submit" value="Eliminar" class=" bg-red-500 text-white rounded-lg p-2">
            </form>
            <button type="submit" class=" bg-blue-500 text-white rounded-lg p-2" href="">Editar</button>
        </div>
        @endforeach
    </div>
    <a href="{{ route('page_crear') }}">crear</a>
</body>

</html>