<header>
    <a href="/citas">citas</a>
    <a href="/clientes">clientes</a>
    <a href="/servicios">servicios</a>

    
    <form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit">Cerrar sesión</button>
</form>
<!-- no me dio tiempo a implementarlo -->
</header>