<form action="{{ route('clientes.crear') }}" method="POST">
    @csrf
    <input type="text" name="nombre" autofocus>
    <input type="email" name="correo">
    <input type="tel" name="telefono">
    <input type="checkbox" name="activo">
    <button type="submit">
        crear cliente
    </button>
</form>