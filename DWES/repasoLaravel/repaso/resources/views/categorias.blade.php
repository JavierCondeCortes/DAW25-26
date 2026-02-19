@extends('nav')

@section('apartado')
    <h2>listado de categorias</h2>

    @if (session('mensaje'))
        <div>
            {{ session('mensaje') }}
        </div>


    @endif

    <table>
        <tr>
            <td>nombre</td>
            <td>descripcion</td>
        </tr>
        @foreach ($cat as $categoria)
            <tr>
                <td>{{$categoria->nombre}}</td>
                <td>{{ $categoria->descripcion }}</td>
                <td><a href="{{ route('formEditCat', $categoria) }}">editar</a></td>
                <td>
                    <form action="{{ route('delCat',$categoria->id) }}" method="post">
                        @method('DELETE')    
                        @csrf
                        <button class="btn btn-danger" type="submit">eliminar</button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>

    <h2>formulario para agregar peliculas</h2>
    <a href="{{ route('formCat') }}">formulario</a>
@endsection