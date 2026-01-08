<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alumno;
use App\Models\Materia;

class RelacionController extends Controller
{
    public function index(){
        $alumno = Alumno::find(1);
        $materia = Materia::find(2);

        return view('muchos', compact('alumno', 'materia')); 
    }
}
