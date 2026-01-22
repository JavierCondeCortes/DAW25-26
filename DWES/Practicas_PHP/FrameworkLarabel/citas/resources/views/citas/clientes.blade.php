<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')

</head>

<body>
    <h1 class="text-center text-5xl font-bold">Lista de usuarios</h1>
    <table class=" bg-gray-700 w-[80vw] text-center mx-auto rounded-2xl">
        <tr class=" text-white">
            <th>nombre</th>
            <th>email</th>
            <th>telefono</th>
        </tr>
        @foreach ($clientes as $cliente)
            <tr class="even:bg-slate-300 odd:bg-slate-100">
                <td>
                    {{ $cliente->nombre }}
                </td>
                <td>
                    {{ $cliente->email }}
                </td>
                <td>
                    {{ $cliente->telefono }}
                </td>
            </tr>
        @endforeach
    </table>
</body>

</html>
