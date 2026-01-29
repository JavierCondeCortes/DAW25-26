@extends('chollos.navbar')

@section('content')

<h1 class="with-full text-center text-7xl bg-gray-600 text-white pb-6">Lista de chollos</h1>

<a href="{{ route('crearChollo') }}" class="boton">crear chollo</a>

{{-- FORMULARIO DE FILTRO --}}
<form action="{{ route('filtro.categorias') }}" method="get">
    <select name="categoria_id" id="categoria" onchange="this.form.submit()">
        <option value="">Todas las categorías</option>

        @foreach ($categorias as $categoria)
            <option value="{{ $categoria->id }}"
                {{ request('categoria_id') == $categoria->id ? 'selected' : '' }}>
                {{ $categoria->name }}
            </option>
        @endforeach
    </select>
</form>

{{-- LISTADO DE CHOLLOS --}}
<div class="flex flex-wrap">
    @foreach ($chollos as $chollo)
        <div class="border border-black bg-slate-200 rounded-xl m-10 w-1/5 h-[50vh] p-4 flex flex-col justify-between">

            <div class="w-full h-[33%] overflow-hidden">
                <img src="{{ asset($chollo->url) }}" alt="" class="w-full h-full object-cover">
            </div>

            <p class="text-center font-bold text-2xl">
                {{ $chollo->titulo }}
            </p>

            <p>puntuacion: {{ $chollo->puntuacion }}</p>

            <p class="flex-shrink overflow-hidden">
                {{ $chollo->descripcion }}
            </p>

            <div class="text-center font-semibold flex justify-around align-middle">
                <p class="basis-0">
                    Precio: {{ $chollo->precio }} €
                </p>
                <p class="bg-gray-400 p-2 px-6 rounded-xl basis-0">
                    <a href="{{ route('detalles', ['id' => $chollo->id]) }}">detalles</a>
                </p>
            </div>
        </div>
    @endforeach
</div>

{{-- PAGINACIÓN --}}
{{ $chollos->links() }}

@endsection
