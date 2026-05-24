<form action="{{ route('servicios.eliminar', $servicio) }}" method="POST">
    @method('DELETE')
    @csrf
    <button type="submit">eliminar</button>
</form>