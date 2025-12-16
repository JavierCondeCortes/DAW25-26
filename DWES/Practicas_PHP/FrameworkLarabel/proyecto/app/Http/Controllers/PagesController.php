<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Modelo;

class PagesController extends Controller
{
    public function modelos()
    {
        $modelos = Modelo::all();
        return view('modelos', compact('modelos'));
        return auth();
    }

    public function crear(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'string' => 'required'
        ]);

        $modeloNuevo = new Modelo;
        $modeloNuevo->id = $request->id;
        $modeloNuevo->string = $request->string;
        $modeloNuevo->entero = $request->entero;
        $modeloNuevo->save();

        return back()->with('mensaje', 'modelo agregado bn');
    }

    public function editar($id)
    {
        $modelo = Modelo::findOrFail($id);
        return view('editar', compact('modelo'));
    }

    public function actualizar(Request $request, $id)
    {
        $request->validate([
            'id' => 'required',
            'string' => 'required',
            'entero' => 'required',
        ]);

        $modeloActualizar = Modelo::findOrFail($id);
        $modeloActualizar->id = $request->id;
        $modeloActualizar->string = $request->string;
        $modeloActualizar->entero = $request->entero;
        $modeloActualizar->save();

        return back()->with('mensaje', 'modelo actualizado');
    }

    public function eliminar($id)
    {
        $modeloEliminar = Modelo::findOrFail($id);
        $modeloEliminar->delete();

        return back()->with('mensaje', 'modelo eliminado');
    }
}
