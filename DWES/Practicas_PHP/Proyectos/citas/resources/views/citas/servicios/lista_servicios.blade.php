<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <a href="{{ route('serviciosCrear') }}">Crear Servicio</a>
    <div>
        @foreach ($servicios as $servicio)
            <div>
                <span>nombre:{{ $servicio->nombre }}</span>
                <span>duracion:{{ $servicio->duracion_minutos }} minutos</span>
                <span>precio:{{ $servicio->precio }}€</span>
                <div>
                    <a href="{{route('serv_editar', $servicio->id)}}">Editar</a>
                    <button><a href="">Deshabilitar</a></button>
                </div>
            </div>
        @endforeach
    </div>
</body>

</html>
