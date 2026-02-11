<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    public function users(){
        return $this -> belgongsToMay(User::class);
    }
    public function municipios(){
        return $this -> belongsTo(Municipio::class);
    }
}
