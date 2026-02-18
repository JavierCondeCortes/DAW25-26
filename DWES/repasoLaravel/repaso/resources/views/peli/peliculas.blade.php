@extends('nav')

@section('apartado')
    <table>
        <tr>
            <td>titulo</td>
            <td>Director</td>
            <td>categoria</td>
        </tr>
        @foreach ($pel as $pelicula)
            <tr>
                <td>{{ $pelicula->titulo }}</td>
                <td>{{ $pelicula->director }}</td>
                <td>{{ $pelicula->categoria->nombre }}</td>
                <td><a href="{{ route('editarPeli',$pelicula) }}">editar</a></td>
            </tr>
        @endforeach
    </table>

    @if (session('mensaje'))
        {{ session('mensaje') }}
    @endif
    <a href="{{ route('newPeli') }}">nueva pelicula</a>
@endsection