<?php

use App\Http\Controllers\municipiosController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventoController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/eventos', [EventoController::class, 'index']);
Route::get('/municipios', [municipiosController::class, 'index']);
