<?php

use App\Http\Controllers\municipiosController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\EventoUsuarioController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/eventos', [EventoController::class, 'index']);
Route::get('/municipios', [municipiosController::class, 'index']);

Route::middleware('auth:sanctum')->post('/inscribirse', [EventoUsuarioController::class, 'store']); 
Route::middleware('auth:sanctum')->get('/mis-inscripciones', [EventoUsuarioController::class, 'misInscripciones']);


Route::get('/eventos/{id}', [eventoController::class, 'show']); 
Route::middleware('auth:sanctum')->post('/eventos/{id}', [eventoController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/eventos/{id}', [eventoController::class, 'destroy']);
