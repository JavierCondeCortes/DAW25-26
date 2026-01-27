<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Mi Web')</title>

    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>

<body class="h-[100vh]">
    <div class=" bg-slate-900 py-5">
        <nav class=" w-1/2 text-white flex justify-around mx-auto">
            <a href="{{ route('inicio') }}">Inicio</a>
            <a href="{{ route('nuevos') }}">Nuevos</a>
            <a href="{{ route('destacados') }}">Destacados</a>
            <form action="{{ route('cerrarSesion') }}" method="POST" class="inline">
                @csrf
                <button type="submit" class="text-red-500 hover:underline bg-transparent border-none cursor-pointer">
                    Cerrar sesión
                </button>
            </form>


        </nav>
    </div>

    <main class="p-6">
        @yield('content')
    </main>


    <footer class=" bg-slate-900 py-5">
        <p class=" w-1/2 text-white flex justify-around mx-auto">
            &copy; Chollos 2026
        </p>
    </footer>
</body>

</html>
