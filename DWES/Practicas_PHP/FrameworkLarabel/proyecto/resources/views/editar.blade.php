
@section('apartado')
    @if (session('mensaje'))
        <div class="alert alert-success">{{ session('mensaje') }}</div>
    @endif

    <form action="{{ route('modelos.actualizar', $modelo->id) }}" method="post">
        @method('PUT')
        @csrf


        @error('id')
            <div class="alert alert-danger">El id es obligatorio</div>
        @enderror

        @error('string')
            <div class="alert alert-danger">El string es obligatorio</div>
        @enderror

        <input type="text" name="id" class="form-control mb-2" value="{{ $modelo->id }}" placeholder="id" autofocus>

        <input type="text" name="string" class="form-control mb-2" value="{{ $modelo->string }}" placeholder="string">

        <input type="number" name="entero" class="form-control mb-2" value="{{ $modelo->entero }}" placeholder="entero">

        <button class="btn btn-primary btn-block" type="submit">
            Guardar Cambios
        </button>
    </form>
@endsection
