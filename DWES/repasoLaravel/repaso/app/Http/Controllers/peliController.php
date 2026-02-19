<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Pelicula;
use Illuminate\Http\Request;

class peliController extends Controller
{
    public function peliculas()
    {
        $pel = Pelicula::all();
        return view('peli.peliculas', compact('pel'));
    }

    public function editPelicula($id){
        $peli= Pelicula::findOrFail($id);
        $cat = Categoria::all();
        return view('peli.formEditPeli',compact('peli','cat'));
    }

    public function editarPelicula(Request $request,$id){
        $editPeli=Pelicula::findOrFail($id);

        $request -> validate([
            'titulo'=>'Required',
            'director'=>'Required|min:10|max:50',
            'anio'=>'Required|numeric|min:1',
            'genero'=>'Required',
            'disponible'=>'nullable',
            'categoria_id'=>'Required'
        ]);

        $editPeli-> titulo = $request ->titulo;
        $editPeli-> director = $request ->director;
        $editPeli-> anio = $request ->anio;
        $editPeli-> genero = $request ->genero;
        $editPeli-> disponible = $request ->disponible ? 0 : 1;
        $editPeli-> categoria_id = $request ->categoria_id;

        $editPeli->save();

        return redirect()->route('peliculas')->with('mensaje','pelicula editada');
    }

    public function newPeli(){
        $cat = Categoria::all();
        return view('peli.formCrearPeli',compact('cat'));
    }

    public function crearPeli(Request $request){

        $newPeli= new Pelicula;

        $request -> validate([
            'titulo'=>'Required',
            'director'=>'Required|min:10|max:50',
            'anio'=>'Required|numeric|min:1',
            'genero'=>'Required',
            'disponible'=>'nullable',
            'categoria_id'=>'Required'
        ]);

        $newPeli-> titulo = $request ->titulo;
        $newPeli-> director = $request ->director;
        $newPeli-> anio = $request ->anio;
        $newPeli-> genero = $request ->genero;
        $newPeli-> disponible = $request ->disponible ? 0 : 1;
        $newPeli-> categoria_id = $request ->categoria_id;

        $newPeli->save();

        return redirect()->route('peliculas')->with('mensaje','pelicula creada');
    }

}
