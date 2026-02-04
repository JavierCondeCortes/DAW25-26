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
            'duracion_minutos' => 'required|numeric|min:1',
            'precio' => 'required|numeric|min:1',
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
        $servicio = Servicio::findOrFail($id);
        return view('citas.servicios.editar',compact('servicio'));
    }

    public function editado(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required',
            'duracion_minutos' => 'required|numeric|min:1',
            'precio' => 'required|numeric|min:1',
        ]);

        $servicioN = Servicio::findOrFail($id);

        $servicioN->nombre = $request->nombre;
        $servicioN->duracion_minutos = $request->duracion_minutos;
        $servicioN->precio = $request->precio;
        $servicioN->activo = $request->activo ? 1 : 0;

        $servicioN->save();
        return redirect()->route('servicios');
    }

        public function deshabilitar(Request $request, $id)
    {

        $servicioN = Servicio::findOrFail($id);

        $servicioN->activo = 0;

        $servicioN->save();
        return redirect()->route('servicios');
    }
}
