<?php

use App\Http\Controllers\clientesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\serviciosController;
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

    });
    Route::get('/clientes', [ClientesController::class, 'formcrear'])->name('clientes.formcrear');
    Route::post('/clientescrear',[clientesController::class,'crear'])->name('clientes.crear');
    Route::get('/servicios/{id}', [serviciosController::class, 'formeditar'])->name('servicios.formeditar');
    Route::put('/servicioseditar/{id}',[serviciosController::class,'editar'])->name('servicios.editar');
    Route::get('/serviciosformeliminar/{id}',[serviciosController::class,'formeliminar'])->name('servicios.formeliminar');
    Route::delete('/servicioseliminar/{id}',[serviciosController::class,'eliminar'])->name('servicios.eliminar');
    Route::get('/servicios', [serviciosController::class, 'formcrear'])->name('servicios.formcrear');
    Route::post('/servicioscrear',[serviciosController::class,'crear'])->name('servicios.crear');

require __DIR__.'/auth.php';
