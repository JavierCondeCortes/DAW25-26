<?php

use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Alias

Route::get('/', function () {
    return view('si');
}) -> name('principal'); //sirve para usarlo en ambito de vista (a href)

Route::view('datos','si');

Route::get('/form', function () {
    return view('formulario');
});
Route::get('editar/{id}', function () {
    return view('editar');
});

//Parametro

Route::get('cliente/{id?}', function($id = 1){
    return 'cliente con el id: '. $id;
})-> where('id', '[0-9]+'); //solo acepta numeros y no letras

//vista + variables
Route::view('pepinillo','si',['id' => 333, 'nombre' => 'manolo']);

//obtencion de datos a la web
use App\Http\Controllers\PagesController;
Route::get('modelos',[PagesController::class, 'modelos']);

//agregar
Route::post('modelos', [PagesController::class, 'crear']) -> name('modelos.crear');
Route::get('/modelos/crear', [PagesController::class, 'formulario']) -> name('modelos.formulario');
Route::get('/modelos', [PagesController::class, 'crear']) -> name('modelos.crear');

//modifica
Route::get('editar/{id}',[PagesController::class, 'editar']) -> name('modelos.editar');
Route::put('editar/{id}',[PagesController::class, 'actualizar']) -> name('modelos.actualizar');

//eliminar
Route::delete('eliminar/{id}',[PagesController::class, 'eliminar']) ->name('modelos.eliminar');

?>