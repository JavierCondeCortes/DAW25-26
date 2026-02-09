<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>crear citas</h1>
    <form action="">
        <select name="id_cliente" class="form-control">
            @foreach ($clientes as $cliente)
                <option value="{{ $cliente->id }}">
                    {{ $cliente->nombre }}
                </option>
            @endforeach

            <select name="id_servicio" class="form-control">
                @foreach ($servicios as $servicio)
                    <option value="{{ $servicio->id }}">
                        {{ $servicio->nombre }}
                    </option>
                @endforeach
            </select>

            <select name="id_usuario" class="form-control">
                @foreach ($users as $user)
                    <option value="{{ $user->id }}">
                        {{ $user->name }}
                    </option>
                @endforeach
            </select>


        </select>

    </form>
</body>

</html>
