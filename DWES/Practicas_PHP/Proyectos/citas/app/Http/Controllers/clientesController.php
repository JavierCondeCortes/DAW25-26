<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use PhpParser\Node\Expr\FuncCall;

class clientesController extends Controller
{

    //crear clientes-----------------------------
    public function crear(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'email' => 'email',
            'telefono' => 'numeric'
        ]);

        $clienteN = new Cliente;

        $clienteN->nombre = $request->nombre;
        $clienteN->email = $request->email;
        $clienteN->telefono = $request->telefono;
        $clienteN->activo = $request->activo ?? 0;

        $clienteN->save();

        return redirect()->route('clientes');
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
        return redirect()->route('clientes',compact('clienteEliminar'));
    }
    
    //editar cliente
    public function editar ($id){
        $cliente = Cliente::findOrFail($id);
        return view('citas.clientes.editar');
    }
}
