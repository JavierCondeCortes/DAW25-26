<?php

namespace App\Http\Controllers;

use App\Models\Servicio;
use Illuminate\Http\Request;

class ServiciosController extends Controller
{
    public function crear(Request $request){
        
    $request->merge([
        'activo' => $request->has('activo') ? true : false,
    ]);

        $validated = $request->validate([
        'nombre'   => 'required|string|max:255', // Stop execution if this is null
        'duracion_minutos'   => 'required|integer|min:1',
        'precio' => 'nullable|Integer|min:1',
        'activo'   => 'boolean'
    ]);

    // 2. Save the validated data
    Servicio::create($validated);

    return redirect()->back()->with('success', 'Cliente creado con éxito');
    }

    public function formcrear() {
        return view('servicios');
    }

    public function formeditar($id) {
        $servicio = Servicio::findOrFail($id);
        return view('serviciosedit', compact('servicio'));
    }

    public function editar(Request $request, $id){
        $servicio = Servicio::findOrFail($id);
    $request->merge([
        'activo' => $request->has('activo') ? true : false,
    ]);

        $validated = $request->validate([
        'nombre'   => 'required|string|max:255', // Stop execution if this is null
        'duracion_minutos'   => 'required|integer|min:1',
        'precio' => 'nullable|Integer|min:1',
        'activo'   => 'boolean'
    ]);

    // 2. update the validated data
    $servicio->update($validated);

    return redirect()->back()->with('success', 'Cliente creado con éxito');
    }

    public function formeliminar($id) {
        $servicio = Servicio::findOrFail($id);
        return view('servicioseliminar', compact('servicio'));
    }

    public function eliminar($id) {
        $servicio = Servicio::findOrFail($id);
        $servicio -> delete();
        return view('servicios');
    }
}
