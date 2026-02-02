<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servicio;

class serviciosController extends Controller
{
    //lista servicios--------------
    public function lista (){
        $servicios = Servicio::all();
        return view('citas.servicios.lista_servicios',compact('servicios'));
    }

    //crear servicios---------------
    public function crear(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'duracion_minutos' => 'required|numeric',
            'precio' => 'required|numeric',
        ]);

        $servicioN = new Servicio;

        $servicioN->nombre = $request->nombre;
        $servicioN->duracion_minutos = $request->duracion_minutos;
        $servicioN->precio = $request->precio;
        $servicioN->activo = $request->activo ? 1 : 0;

        $servicioN->save();
        return redirect()->route('servicios');
    }


    //editar servicios -----------------------------------

    public function editar($id){
        $servicioE = Servicio::findOrFail($id);
        return view('citas.servicios.editar',compact('servicioE'));
    }

    public function editado(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required',
            'duracion_minutos' => 'required|numeric',
            'precio' => 'required|numeric',
        ]);

        $servicioN = Servicio::findOrFail($id);

        $servicioN->nombre = $request->nombre;
        $servicioN->duracion_minutos = $request->duracion_minutos;
        $servicioN->precio = $request->precio;
        $servicioN->activo = $request->activo ? 1 : 0;

        $servicioN->save();
        return redirect()->route('servicios');
    }
}
