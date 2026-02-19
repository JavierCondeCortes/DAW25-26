<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Pelicula;
use Illuminate\Http\Request;

class controlador extends Controller
{
    public function categorias()
    {
        $cat = Categoria::all();
        return view('categorias', compact('cat'));
    }




    public function formCat()
    {
        return view('formCat');
    }
    public function crearCat(Request $request)
    {
        $newCat = new Categoria;

        $newCat->nombre = $request->nombre;
        $newCat->descripcion = $request->descripcion;

        $newCat->save();

        return redirect()->route('categorias')->with('mensaje', 'categoria agregada');
    }

    public function formEditCat($id)
    {
        $categoria = Categoria::findOrFail($id);

        return view('formCatEdit', compact('categoria'));
    }

    public function editarCat(Request $request, $id)
    {

        $editCat = Categoria::findOrFail($id);

        $editCat->nombre = $request->nombre;
        $editCat->descripcion = $request->descripcion;

        $editCat->save();

        return redirect()->route('categorias')->with('mensaje', 'categoria actualizada');
    }

    public function delCat($id){
        $categoria = Categoria::findOrFail($id);
        $categoria->delete();

    return redirect()->route('categorias')->with('mensaje', 'categoria eliminada');

    }
}
