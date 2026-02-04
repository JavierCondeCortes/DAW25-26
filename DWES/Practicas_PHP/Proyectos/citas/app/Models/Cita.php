<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    public function clientes(){
        return $this -> belongsTo(Cliente::class);
    }
    public function servicios(){
        return $this -> belongsTo(Servicio::class);
    }
}
