<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="./formulario.blade.php">formulario</a>
    <a href="./editar.blade.php">editar</a>

    <div>
        <div>
            <h3>Alumno {{$alumno -> nombre}} materias:</h3>
            <table>
                <thead>
                    <th>Materias</th>
                </thead>
                <tbody>
                    @foreach ($alumno -> materias as $registro)
                        <tr>
                            <td>
                                {{$registro -> nombre}}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>


</body>
</html>