<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class clientesController extends Controller
{
    public function clientes(){
        $clientes = Cliente::all();
        return view('citas.clientes',compact('clientes'));
    }
}
