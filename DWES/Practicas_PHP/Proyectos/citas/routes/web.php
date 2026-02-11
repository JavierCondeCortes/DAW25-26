<?php

use App\Http\Controllers\clientesController;
use App\Http\Controllers\serviciosController;
use App\Http\Controllers\citasController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

// });

    //CLIENTES-----------------------------------------

    //funcion ir a crear
    Route::get('crear', function () {
        return view('citas.clientes.crear');
    })->name('page_crear');

    //funcion crear
    Route::post('crear_form', [clientesController::class, 'crear'])->name('crearform');

    //funcion editar
    Route::post('editar/{id}', [clientesController::class, 'editado'])->name('editado');

    //funcion mostrar
    Route::get('clientes', [clientesController::class, 'mostrar'])->name('clientes');

    // funcion eliminar
    Route::delete('eliminar/{id}', [clientesController::class, 'eliminar'])->name('eliminar');

    // funcion editar
    Route::get('editar/{id}', [clientesController::class, 'editar'])->name('editar');




    //SERVICIOS----------------------------------------

    //lista servicios------------------º
    Route::get('servicios', [serviciosController::class, 'lista'])->name('servicios');

    //Crear Servicios--------------------

    Route::get('servicios/crear', function () {
        return view('citas.servicios.crear');
    })->name('serviciosCrear');

    Route::post('servicios/servicio_creado', [serviciosController::class, 'crear'])->name('formServCreate');

    //editar servicios-----------------------------
    Route::get('servicios/editar/{id}', [serviciosController::class, 'editar'])
        ->name('serv_editar');

    route::get('servicios/editado/{id}', [serviciosController::class, 'editado'])->name('formServEditar');

    route::get('servicios/deshabilitar/{id}', [serviciosController::class, 'deshabilitar'])->name('deshabilitar');





    //CITAS-------------------------------------------
    Route::get('citas', [citasController::class, 'citas'])->name('citas');
    //creear
    Route::get('crearCitas', [citasController::class, 'crearCitas'])->name('crearCitas');
    Route::post('citaCreada', [citasController::class, 'crear'])->name('citaCreada');

    //editar
    Route::get('citas/editar/{id}',[citasController::class,'formedit'])->name('formEditar');
    Route::put('citas/editado/{id}',[citasController::class, 'editar'])->name('editarCita');
});
// en el caso de que no funcione el auth comentar la linea 86 y descomentar la linea 32



require __DIR__ . '/auth.php';
