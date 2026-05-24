<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class servicio extends Model
{
    public $timestamps = false;
    protected $fillable = ['nombre', 'duracion_minutos', 'precio', 'activo'];
    public function cita(){
        return $this->belongsTo(cita::class);
    }
}
