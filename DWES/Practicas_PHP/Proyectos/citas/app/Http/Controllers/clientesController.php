<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;


class clientesController extends Controller
{

    //crear clientes-----------------------------
    public function crear(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'email' => 'email',
            'telefono' => 'numeric',
            'lenght=9'
        ]);

        $clienteN = new Cliente;

        $clienteN->nombre = $request->nombre;
        $clienteN->email = $request->email;
        $clienteN->telefono = $request->telefono;
        $clienteN->activo = $request->activo ?? 0;

        $clienteN->save();

        return redirect()->route('serviciosCrear');
    }

    //editar cliente-------------------
    public function editado(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required',
            'email' => 'email',
            'telefono' => 'numeric',
            'lenght=9'
        ]);
        $clienteE = Cliente::findOrFail($id);

        $clienteE->nombre = $request->nombre;
        $clienteE->email = $request->email;
        $clienteE->telefono = $request->telefono;
        $clienteE->activo = $request->activo ?? 0;

        $clienteE->save();

        return redirect()->route('clientes');
    }

    //editar cliente (mostrar web)------------------
    public function editar($id)
    {
        $cliente = Cliente::findOrFail($id);
        return view('citas.clientes.editar', compact('cliente'));
    }

    //mostrar clientes----------------------------
    public function mostrar()
    {
        $clientes = Cliente::all();
        return view('citas.clientes.lista_clientes', compact('clientes'));
    }
    //eliminar cliente------------------------------
    public function eliminar($id)
    {
        $clienteEliminar = Cliente::findOrFail($id);
        $clienteEliminar->delete();
        return redirect()->route('clientes', compact('clienteEliminar'));
    }
}
