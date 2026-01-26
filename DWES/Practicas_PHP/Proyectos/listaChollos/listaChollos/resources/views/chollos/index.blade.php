<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
    @extends('chollos/navbar')
</head>

@section('content')
    <body>
        <h1 class="with-full text-center text-7xl bg-gray-600 text-white pb-6">Lista de chollos</h1>
        <a href="{{ route('crearChollo') }}" class="boton">crear chollo</a>
        @if (@session('mensaje'))
            <p class=" text-green-400">{{session('mensaje')}}</p>
        @endif
        <div class=" flex flex-wrap">
            @foreach ($chollos as $chollo)
                <div class="border border-black bg-slate-200 rounded-xl m-10 w-1/5 h-[50vh] p-4 flex flex-col justify-between">
                    <p class="w-full h-[33%] overflow-hidden text-ellipsis">

                    </p>

                    <p class="text-center font-bold text-2xl">
                        {{ $chollo->titulo }}
                    </p>

                    <p class=" flex-shrink overflow-hidden">
                        {{ $chollo->descripcion }}
                    </p>

                    <div class="text-center font-semibold flex justify-around align-middle">
                        <p class=" basis-0">
                            Precio: {{ $chollo->precio }} €
                        </p>
                        <p class=" bg-gray-400 p-2 px-6 rounded-xl basis-0">
                            <a href="{{ route('detalles', ['id' => $chollo->id]) }}">detalles</a>
                        </p>
                    </div>
                </div>
                @endforeach
            </div>
            {{ $chollos->links() }}
    </body>
@endsection

</html>