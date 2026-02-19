<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('inicio');

Route::get('nav',function(){
    return view('nav');
});

Route::get('/peliculas',[peliController::class,'peliculas'])->name('peliculas');
Route::get('/categorias',[controlador::class,'categorias'])->name('categorias');

Route::get('categorias/crear',[controlador::class,'formCat'])->name('formCat');
Route::post('categorias/creado',[controlador::class,'crearCat'])->name('crearCat');

Route::get('categorias/editar/{id}',[controlador::class, 'formEditCat'])->name('formEditCat');
Route::put('categorias/editado/{id}',[controlador::class, 'editarCat'])->name('editarCat');

Route::delete('categorias/eliminar/{id}',[controlador::class,'delCat'])->name('delCat');


Route::get('pelicula/editar/{id}',[peliController::class, 'editPelicula'])->name('editarPeli');
Route::put('peliculas/editado/{id}',[peliController::class,'editarPelicula'])->name('editarPelicula');

Route::get('peliculas/crear',[peliController::class,'newPeli'])->name('newPeli');
Route::post('pelicula/creada',[peliController::class,'crearPeli'])->name('crearPeli');