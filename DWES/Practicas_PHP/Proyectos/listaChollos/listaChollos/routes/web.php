<?php

use App\Http\Controllers\ApisController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\Categoria;
use App\Models\Chollo;
use App\Http\Controllers\ChollosController;


// -----------------------------
// PÁGINA PÚBLICA (SIN LOGIN)
// -----------------------------
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');


// -----------------------------
// DASHBOARD REDIRIGE A INICIO
// -----------------------------
Route::get('/dashboard', function () {
    return redirect()->route('inicio');
})->middleware(['auth', 'verified'])->name('dashboard');


// -----------------------------
// RUTAS QUE REQUIEREN LOGIN
// -----------------------------
Route::middleware('auth')->group(function () {

    // PERFIL
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // CERRAR SESIÓN
    Route::post('/cierreSesion', [ChollosController::class, 'logOut'])->name('cerrarSesion');


    // -----------------------------
    // INICIO (LISTA DE CHOLLOS)
    // -----------------------------
    Route::get('/', [ChollosController::class, 'index'])->name('inicio');


    // DESTACADOS
    Route::get('/destacados', function () {
        $categorias = Categoria::all();
        $chollos = Chollo::orderBy('puntuacion', 'desc')->paginate(8);
        return view('chollos.index', compact('categorias', 'chollos'));
    })->name('destacados');

    // NUEVOS
    Route::get('/nuevos', function () {
        $categorias = Categoria::all();
        $chollos = Chollo::orderBy('created_at', 'desc')->paginate(8);
        return view('chollos.index', compact('categorias', 'chollos'));
    })->name('nuevos');


    // DETALLES
    Route::get('/detalles/{id}', [ChollosController::class, 'detalles'])->name('detalles');


    // EDITAR CHOLLO
    Route::get('/chollos/{id}/editar', [ChollosController::class, 'editar'])->name('editar');
    Route::post('/chollos/{id}/actualizar', [ChollosController::class, 'actualizar'])->name('actualizar');


    // NUEVO CHOLLO
    Route::get('/nuevoForm', [ChollosController::class, 'newChollo'])->name('crearChollo');
    Route::post('/nuevoChollo', [ChollosController::class, 'nuevoChollo'])->name('chollos.nuevoChollo');


    // FILTRO POR CATEGORÍA
    Route::get('/filtro-categorias', [ChollosController::class, 'filtroCategorias'])->name('filtro.categorias');


    // ELIMINAR CHOLLO
    Route::get('/chollos/eliminar/{id}', [ChollosController::class, 'eliminarChollo'])->name('eliminar');


    // LISTA DE CATEGORÍAS
    Route::get('/categorias', [ChollosController::class, 'categorias'])->name('lista');

    // ELIMINAR CATEGORÍA
    Route::get('/categorias/eliminar/{id}', [ChollosController::class, 'removeCategorias'])->name('catElim');

    // CREAR CATEGORÍA
    Route::post('/categorias/crear', [ChollosController::class, 'createCategorias'])->name('catCreate');

    //API
    Route::get('api/chollos',[ApisController::class,'index']);
});

require __DIR__ . '/auth.php';
