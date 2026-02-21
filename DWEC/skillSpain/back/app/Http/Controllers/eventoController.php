<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;

class eventoController extends Controller
{
    /**
     * Mostrar todos los eventos
     */
    public function index()
    {
        return Evento::all();
    }

    /**
     * Crear un nuevo evento (si lo necesitas más adelante)
     */
    public function store(Request $request)
    {
        $evento = Evento::create($request->all());

        return response()->json([
            'message' => 'Evento creado correctamente',
            'data' => $evento
        ], 201);
    }

    /**
     * Mostrar un evento concreto
     */
    public function show(string $id)
    {
        $evento = Evento::find($id);

        if (!$evento) {
            return response()->json(['message' => 'Evento no encontrado'], 404);
        }

        return $evento;
    }

    /**
     * Editar un evento (solo admin)
     */
    public function update(Request $request, $id)
    {
        $evento = Evento::find($id);

        if (!$evento) {
            return response()->json(['message' => 'Evento no encontrado'], 404);
        }

        // Actualizar campos básicos
        $evento->nombre = $request->nombre;
        $evento->descripcion = $request->descripcion;
        $evento->fecha = $request->fecha;

        // Si viene una imagen nueva, la guardamos
        if ($request->hasFile('urlImage')) {

            // Borrar imagen anterior si existe
            if ($evento->urlImage && \Storage::exists('public/' . $evento->urlImage)) {
                \Storage::delete('public/' . $evento->urlImage);
            }

            // Guardar nueva imagen
            $path = $request->file('urlImage')->store('eventos', 'public');
            $evento->urlImage = $path;
        }

        $evento->save();

        return response()->json([
            'message' => 'Evento actualizado correctamente',
            'data' => $evento
        ]);
    }

    /**
     * Eliminar un evento (solo admin)
     */
    public function destroy(string $id)
    {
        $evento = Evento::find($id);

        if (!$evento) {
            return response()->json(['message' => 'Evento no encontrado'], 404);
        }

        $evento->delete();

        return response()->json(['message' => 'Evento eliminado correctamente']);
    }
}
