<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventoUsuario extends Model
{
    protected $table = 'eventos_usuario';

    protected $fillable = [
        'id_users',
        'id_evento'
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'id_evento');
    }

}
