<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//trabajo
use App\Models\Chollo;
use App\Http\Controllers\ChollosController;
use App\Http\Controllers\PagesController;
use App\Models\Categoria;

Route::get('/', function () {
    $chollos = Chollo::paginate(8);
    return view('chollos.index', compact('chollos'));
})->name('inicio');

Route::get('detalles/{id?}',[ChollosController::class, 'detalles'])->name('detalles');

//mostrar formulario
Route::get('/chollos/{id}/editar', [ChollosController::class, 'editar'])->name('editar');
//actualizacion
Route::post('/chollos/{id}/actualizar', [ChollosController::class, 'actualizar'])->name('actualizar');

// Mostrar formulario
Route::get('/nuevoForm', function () {
    return view('chollos.crearChollo');
})->name('crearChollo');

// Guardar formulario
Route::post('/nuevoChollo', [ChollosController::class, 'nuevoChollo'])->name('chollos.nuevoChollo');

//eliminar chollos
Route::get('/chollos/eliminar/{id}',[ChollosController::class,'eliminarChollo'])->name('eliminar');

//muestra categorias
Route::get('/categorias', [ChollosController::class, 'categorias'])->name('lista');

//Eliminar  categoria
Route::get('/categorias/eliminar/{id}',[ChollosController::class, 'removeCategorias'])->name('catElim');

//crear categoria
Route::post('/categorias/crear', [ChollosController::class, 'createCategorias'])->name('catCreate');

require __DIR__ . '/auth.php';
