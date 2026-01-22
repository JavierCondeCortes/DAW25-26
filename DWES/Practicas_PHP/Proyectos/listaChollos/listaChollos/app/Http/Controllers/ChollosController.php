<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Models\Chollo;


class ChollosController extends Controller
{
    public function detalles($id)
    {
        $chollo = Chollo::findOrFail($id);
        return view('chollos.detallesProducto', compact('chollo'));
    }

    public function nuevoChollo(Request $request){
        $nuevoChollo = new Chollo;
            $nuevoChollo -> titulo = $request -> titulo;
            $nuevoChollo -> descripcion  -> $request -> descripcion;
            $nuevoChollo -> url ->$request->url;
            $nuevoChollo -> categoria_id ->$request->categoria_id;
            $nuevoChollo -> puntuacion ->$request->puntuacion;
            $nuevoChollo -> precio ->$request->precio;
            $nuevoChollo -> precio_descuento ->$request->precio_descuento;

            $nuevoChollo -> save();

            return redirect()->route('chollos.index');

    }
}

