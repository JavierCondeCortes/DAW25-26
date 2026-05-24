<?php

namespace App\Http\Controllers;

use App\Models\cliente;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    public function crear(Request $request){
        $clienteNuevo = new Cliente();
        
    $request->merge([
        'activo' => $request->has('activo') ? true : false,
    ]);

        $validated = $request->validate([
        'nombre'   => 'required|string|max:255', // Stop execution if this is null
        'correo'   => 'required|email',
        'telefono' => 'nullable|string',
        'activo'   => 'boolean'
    ]);

    // 2. Save the validated data
    Cliente::create($validated);

    return redirect()->back()->with('success', 'Cliente creado con éxito');
    }

    public function formcrear() {
        return view('clientes');
    }
    
}
