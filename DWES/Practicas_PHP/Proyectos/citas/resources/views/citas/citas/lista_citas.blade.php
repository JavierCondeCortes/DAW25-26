<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <a href="{{ route('crearCitas') }}">crear</a>
    <h1>lista citas</h1>
    <div>

        @foreach ($citas as $cita)
            <div>
                {{ $cita->cliente->nombre }} /
                {{ $cita->servicio->nombre }} /
                {{ $cita->fecha }} /
                {{ $cita->hora }}
                <button><a href="{{route('formEditar', $cita->id)}}">Editar</a></button>
                <button><a href="">Eliminar</a></button>
                <button><a href="">Cancelar</a></button>
            </div>
        @endforeach
    </div>
</body>

</html>
