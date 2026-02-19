<body>

    <nav>
        <a href={{ route('categorias') }}>categoria</a>
        <a href={{ route('peliculas') }}>peliculas</a>
        <a href={{ route('inicio') }}>inicio</a>
    </nav>

    <main>
        @yield('apartado')
    </main>
</body>