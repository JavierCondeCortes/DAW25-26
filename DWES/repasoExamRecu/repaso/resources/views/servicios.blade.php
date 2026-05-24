<form action="{{ route('servicios.crear') }}" method="POST">
    @csrf
    <input type="text" name="nombre" autofocus>
    <input type="number" name="duracion_minutos">
    <input type="number" name="precio">
    <input type="checkbox" name="activo">
    <button type="submit">
        crear servicios
    </button>
</form>