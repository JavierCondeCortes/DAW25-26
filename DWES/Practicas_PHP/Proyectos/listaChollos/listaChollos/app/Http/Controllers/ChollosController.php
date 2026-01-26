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

    public function eliminarChollo($id){
        $eliminar = Chollo::findOrFail($id);
        $eliminar -> delete();

        return redirect()->route('inicio')-> with('mensaje','Chollo Eliminado');
    }
    public function nuevoChollo(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'url' => 'nullable|file|mimes:jpg,jpeg,png,webp',
            'categoria_id' => 'required|integer',
            'puntuacion' => 'required|integer|min:0|max:10',
            'precio' => 'required|numeric|min:0',
            'precio_descuento' => 'required|numeric|min:0',
            'disponible' => 'required|boolean',
        ]);


        $nuevoChollo = new Chollo;
        $nuevoChollo->titulo = $request->titulo;
        $nuevoChollo->descripcion  = $request->descripcion;
        $nuevoChollo->url = $request->url;
        $nuevoChollo->categoria_id = $request->categoria_id;
        $nuevoChollo->puntuacion = $request->puntuacion;
        $nuevoChollo->precio = $request->precio;
        $nuevoChollo->precio_descuento = $request->precio_descuento;
        $nuevoChollo->disponible = $request->disponible;

        if($nuevoChollo->save()){}

        return redirect()->route('inicio') -> with('mensaje', 'agregado exitoso');
    }

    public function editar($id)
    {
        $chollo = Chollo::findOrFail($id);
        return view('chollos.editarChollo', compact('chollo'));
    }
    public function actualizar(Request $request, $id)
    {
        $chollo = Chollo::findOrFail($id);

        $chollo->titulo = $request->titulo;
        $chollo->descripcion = $request->descripcion;
        $chollo->categoria_id = $request->categoria_id;
        $chollo->puntuacion = $request->puntuacion;
        $chollo->precio = $request->precio;
        $chollo->precio_descuento = $request->precio_descuento;
        $chollo->disponible = $request->disponible;

        // Si hay nueva imagen
        if ($request->hasFile('url')) {
            $chollo->url = $request->file('url')->store('chollos', 'public');
        }

        $chollo->save();
        
        return redirect()->route('inicio')->with('success', 'Chollo actualizado');
    }

    //eliminar categorias
    public function removeCategorias($id){
        $catEliminar = Categoria::findOrFail($id);
        $catEliminar -> delete();

        return redirect()->route('lista')-> with('catEstado','Categoria Eliminada');
    }

    //crear categorias
    public function createCategorias(Request $request){

        $request -> validate([
            'name'=>'required'
        ]);

        $nuevaCategoria = new Categoria;
        $nuevaCategoria -> name = $request -> name;

        $nuevaCategoria -> save();

        return redirect()->route('lista')->with('catEstado','Categoria Creada');
    }

    public function categorias(){
        $categorias = Categoria::withCount('chollos')->get();
        
        return view('chollos.listaCategorias', compact('categorias'));
    }
}
