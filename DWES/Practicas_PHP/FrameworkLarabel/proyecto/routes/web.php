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


//Parametro

Route::get('cliente/{id?}', function($id = 1){
    return 'cliente con el id: '. $id;
})-> where('id', '[0-9]+'); //solo acepta numeros y no letras

//vista + variables
Route::view('pepinillo','si',['id' => 333, 'nombre' => 'manolo']);