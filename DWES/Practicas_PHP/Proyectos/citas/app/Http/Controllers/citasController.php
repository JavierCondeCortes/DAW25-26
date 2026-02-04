<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use App\Models\Cliente;

class citasController extends Controller
{
    public function citas(){
        $clientes = Cliente::all();
        $citas = Cita::all();
        return view('citas.citas.lista_citas',compact('citas','clientes'));
    }
}
