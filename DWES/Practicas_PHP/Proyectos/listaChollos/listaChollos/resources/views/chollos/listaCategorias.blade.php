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
        <div class=" border-red-100 rounded-sm w-[40vw] h-[40vh] mx-auto my-auto ">
            <table>
                <tr class=" font-bold">
                    <td>ID:</td>
                    <td>Nombre:</td>
                </tr>
                @foreach ($categorias as $categoria)
                    <tr>
                        <td>{{ $categoria->id }}</td>
                        <td>{{ $categoria->name }}</td>
                    </tr>
                @endforeach
            </table>
        </div>
    </body>

@endsection

</html>
