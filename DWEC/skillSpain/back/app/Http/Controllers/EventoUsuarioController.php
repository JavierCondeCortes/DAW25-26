<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\EventoUsuario;

class EventoUsuarioController extends Controller
{
    /**
     * Inscribir al usuario autenticado en un evento
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_evento' => 'required|integer|exists:eventos,id'
        ]);

        $user = $request->user();

        // Evitar inscripciones duplicadas
        $existe = EventoUsuario::where('id_users', $user->id)
            ->where('id_evento', $request->id_evento)
            ->first();

        if ($existe) {
            return response()->json([
                'message' => 'Ya estás inscrito en este evento'
            ], 409);
        }

        // Crear inscripción
        $inscripcion = EventoUsuario::create([
            'id_users' => $user->id,
            'id_evento' => $request->id_evento
        ]);

        return response()->json([
            'message' => 'Inscripción realizada con éxito',
            'data' => $inscripcion
        ], 201);
    }

    /**
     * Obtener todos los eventos a los que el usuario está inscrito
     */
    public function misInscripciones(Request $request)
{
    $user = $request->user(); // usuario logeado

    $inscripciones = EventoUsuario::where('id_usuario', $user->id)
        ->with('evento') // cargar datos del evento
        ->get();

    return response()->json($inscripciones);
}

}
