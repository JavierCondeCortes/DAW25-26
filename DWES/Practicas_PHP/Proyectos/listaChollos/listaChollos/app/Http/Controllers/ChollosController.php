<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Models\Chollo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class ChollosController extends Controller
{
    public function logOut()
    {
        Auth::logout();
        return redirect()->route('inicio');
    }

    public function index()
    {
        $categorias = Http::get('http://127.0.0.1:8000/api/categorias')->json();  
        $chollos = Http::get('http://127.0.0.1:8000/api/chollos')->json();
        // $categorias = Categoria::all(); 
        // $chollos = Chollo::paginate(8);

        return view('chollos.index', compact('categorias', 'chollos'));
    }

    public function detalles($id)
    {
        $chollo = Chollo::findOrFail($id);
        return view('chollos.detallesProducto', compact('chollo'));
    }

    public function eliminarChollo($id)
    {
        $eliminar = Chollo::findOrFail($id);
        $eliminar->delete();

        return redirect()->route('inicio')->with('mensaje', 'Chollo Eliminado');
    }

    public function newChollo()
    {
        $categorias = Categoria::all();
        return view('chollos.crearChollo', compact('categorias'));
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
        $nuevoChollo->categoria_id = $request->categoria_id;
        $nuevoChollo->puntuacion = $request->puntuacion;
        $nuevoChollo->precio = $request->precio;
        $nuevoChollo->precio_descuento = $request->precio_descuento;
        $nuevoChollo->disponible = $request->disponible;

        if ($request->hasFile('url')) {
            $nombreOriginal = $request->url->getClientOriginalName();
            $request->url->move(public_path('uploads'), $nombreOriginal);
            $nuevoChollo->url = 'uploads/' . $nombreOriginal;
        }

        $nuevoChollo->save();

        return redirect()->route('inicio')->with('mensaje', 'agregado exitoso');
    }

    public function filtroCategorias(Request $request)
    {
        $categorias = Categoria::all();

        if (!$request->categoria_id) {
            $chollos = Chollo::paginate(8);
        } else {
            $chollos = Chollo::where('categoria_id', $request->categoria_id)->paginate(8);
        }

        return view('chollos.index', compact('categorias', 'chollos'));
    }

    public function editar($id)
    {
        $categorias = Categoria::all();
        $chollo = Chollo::findOrFail($id);
        return view('chollos.editarChollo', compact('chollo', 'categorias'));
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

        if ($request->hasFile('url')) {
            $nombreOriginal = $request->url->getClientOriginalName();
            $request->url->move(public_path('uploads'), $nombreOriginal);
            $chollo->url = 'uploads/' . $nombreOriginal;
        }

        $chollo->save();

        return redirect()->route('inicio')->with('success', 'Chollo actualizado');
    }

    public function removeCategorias($id)
    {
        $catEliminar = Categoria::findOrFail($id);
        $catEliminar->delete();

        return redirect()->route('lista')->with('catEstado', 'Categoria Eliminada');
    }

    public function createCategorias(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $nuevaCategoria = new Categoria;
        $nuevaCategoria->name = $request->name;
        $nuevaCategoria->save();

        return redirect()->route('lista')->with('catEstado', 'Categoria Creada');
    }

    public function categorias()
    {
        $categorias = Categoria::withCount('chollos')->get();
        return view('chollos.listaCategorias', compact('categorias'));
    }
}
