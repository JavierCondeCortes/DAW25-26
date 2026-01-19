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
            <a href="{{route('inicio')}}">Inicio</a>
            <a href="">Nuevos</a>
            <a href="">Destacados</a>
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
