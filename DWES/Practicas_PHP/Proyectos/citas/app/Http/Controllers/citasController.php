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
        $citas = Cita::with(['cliente', 'servicio'])->get();
        return view('citas.citas.lista_citas', compact('citas'));
    }

    public function crearCitas()
    {
        $clientes = Cliente::all();
        $citas = Cita::all();
        $servicios = Servicio::all();
        $users = User::all();
        return view('citas.citas.crear', compact('clientes', 'citas', 'servicios', 'users'));
    }

    public function crear(Request $request)
    {
        $cita = new Cita;

        $cita->id_cliente  = $request->id_cliente;
        $cita->id_servicio = $request->id_servicio;
        $cita->id_usuario  = $request->id_usuario;
        $cita->fecha       = $request->dia;
        $cita->hora        = $request->hora;
        $cita->activo      = $request->activo ?? 1;

        $cita->save();

        return redirect()->route('citas')->with('success', 'Cita creada correctamente');
    }

    public function formedit($id)
    {
        $cita = Cita::findOrFail($id);
        $clientes = Cliente::all();
        $citas = Cita::all();
        $servicios = Servicio::all();
        $users = User::all();
        return view('citas.citas.editar', compact('cita','clientes', 'citas', 'servicios', 'users'));
    }

    public function editar(Request $request, $id)
    {
        $cita = Cita::findOrFail($id);

        $cita->id_cliente  = $request->id_cliente;
        $cita->id_servicio = $request->id_servicio;
        $cita->id_usuario  = $request->id_usuario;
        $cita->fecha       = $request->dia;
        $cita->hora        = $request->hora;
        $cita->activo      = $request->activo ?? 1;

        $cita->save();

        return redirect()->route('citas')->with('success', 'Cita editada correctamente');
    }
}
