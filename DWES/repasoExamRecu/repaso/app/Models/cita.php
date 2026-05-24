<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cita extends Model
{
    public function usuarios(){
        return $this-> hasMany(usuario::class);
    }
    public function clientes(){
        return $this-> hasMany(cliente::class);
    }
    public function servicios(){
        return $this-> hasMany(servicio::class);
    }
}
