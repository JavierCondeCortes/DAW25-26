<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Mi Web')</title>

    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>
<body>
    <nav></nav>

    <main class="p-6">
        @yield('content')
    </main>
</body>
</html>