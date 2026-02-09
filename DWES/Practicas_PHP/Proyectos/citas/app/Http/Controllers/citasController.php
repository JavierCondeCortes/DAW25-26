<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use App\Models\Cliente;
use App\Models\Servicio;
use App\Models\User;

class citasController extends Controller
{
    public function citas()
    {
        $clientes = Cliente::all();
        $citas = Cita::all();
        return view('citas.citas.lista_citas', compact('citas', 'clientes'));
    }

    public function crearCitas(){
        return view('citas.citas.crear');
    }

    public function crear(Request $request)
    {
        $cita = new Cita;

        $cita->id_cliente  = $request->id_cliente;
        $cita->id_servicio = $request->id_servicio;
        $cita->id_user     = $request->id_user;
        $cita->activo      = $request->activo ?? 0;

        $cita->save();

        return redirect()->back()->with('success', 'Cita creada correctamente');
    }
}
