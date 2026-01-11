<form action="{{ route('modelos.crear') }}" method="post">
    @csrf

    <input type="number" name="id" placeholder="id" value="{{ old('id') }}">
    <input type="text" name="string" placeholder="texto" value="{{ old('text') }}">
    <input type="number" name="entero" placeholder="numero" value="{{ old('number') }}">

    <button class="btn btn-primary btn-block" type="submit">
        crear nuevo modelo
    </button>
</form>

@if (@session('mensaje'))
    <div class="mensaje-nota-creada">
        {{ session('mensaje') }}
    </div>
@endif

@error('id')
    <div class="alert alert-danger">
        no olvides rellenar id
    </div>
@enderror


