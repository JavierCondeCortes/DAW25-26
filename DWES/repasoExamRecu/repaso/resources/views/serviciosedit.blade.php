<form action="{{ route('servicios.editar',  $servicio -> id) }}" method="POST">
    @method('PUT');
    @csrf
    @error('nombre')
        <div class="alert danger"> nombre erroneo</div>
    @enderror
    @error('precio')
        <div class="alert danger"> precio erroneo</div>
    @enderror
    @error('duracion_minutos')
        <div class="alert danger"> duracion minutos erroneo</div>
    @enderror
    @error('activo')
        <div class="alert danger"> activo erroneo</div>
    @enderror
    <input type="text" name="nombre" value="{{ old('nombre', $servicio->nombre) }}" autofocus>
    <input type="number" name="duracion_minutos" value="{{ old('duracion_minutos', $servicio->duracion_minutos) }}">
    <input type="number" name="precio" value="{{ old('precio', $servicio->precio) }}">
    <input type="checkbox" name="activo" {{ old('activo', $servicio->activo) ? 'checked' : '' }}>
    <button type="submit">
        actgualizar servicios
    </button>
</form>