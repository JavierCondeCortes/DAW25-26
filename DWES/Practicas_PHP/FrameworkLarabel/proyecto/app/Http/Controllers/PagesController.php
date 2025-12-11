<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Modelo;


class PagesController extends Controller
{
    public function modelos()
    {
        $modelos = Modelo::all();
        return view('modelos', compact('modelos'));
    }
}
