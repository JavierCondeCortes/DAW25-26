<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\Categoria;
use App\Models\Chollo;
use App\Http\Controllers\ChollosController;
use App\Http\Controllers\ImageController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return route('inicio');
})->middleware(['auth', 'verified'])->name('dashboard');


//todo lo que esta es que tiene que estar autenticado
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //cerrar sesion
    Route::post('/cierreSesion', [ChollosController::class, 'logOut'])->name('cerrarSesion');

    //trabajo

    Route::get('/', function () {
        $chollos = Chollo::paginate(8);
        return view('chollos.index', compact('chollos'));
    })->name('inicio');

    //destacados order by puntuacion desc
    Route::get('/destacados', function () {
        $chollos = Chollo::orderBy('puntuacion', 'desc')->paginate(8);
        return view('chollos.index', compact('chollos'));
    })->name('destacados');

    //nuevos order by date_created
    Route::get('/nuevos', function () {
        $chollos = Chollo::orderBy('created_at', 'desc')->paginate(8);
        return view('chollos.index', compact('chollos'));
    })->name('nuevos');

    Route::get('detalles/{id?}', [ChollosController::class, 'detalles'])->name('detalles');

    //mostrar formulario
    Route::get('/chollos/{id}/editar', [ChollosController::class, 'editar'])->name('editar');
    //actualizacion
    Route::post('/chollos/{id}/actualizar', [ChollosController::class, 'actualizar'])->name('actualizar');
    
    // Mostrar formulario
    Route::get('/nuevoForm', [ChollosController::class, 'newChollo'])->name('crearChollo');
        
        // Guardar formulario
    Route::post('/nuevoChollo', [ChollosController::class, 'nuevoChollo'])->name('chollos.nuevoChollo');

    //eliminar chollos
    Route::get('/chollos/eliminar/{id}', [ChollosController::class, 'eliminarChollo'])->name('eliminar');

    //muestra categorias
    Route::get('/categorias', [ChollosController::class, 'categorias'])->name('lista');

    //Eliminar  categoria
    Route::get('/categorias/eliminar/{id}', [ChollosController::class, 'removeCategorias'])->name('catElim');

    //crear categoria
    Route::post('/categorias/crear', [ChollosController::class, 'createCategorias'])->name('catCreate');

    //imagenes
    Route::post('/image-upload', [ChollosController::class, 'postImage'])->name('post.image');
});
require __DIR__ . '/auth.php';
