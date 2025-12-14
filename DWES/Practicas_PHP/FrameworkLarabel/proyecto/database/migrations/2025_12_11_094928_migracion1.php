<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('cursos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('descripcion');
            $table->integer('precio');
            $table->timestamps();
        });

        Schema::create('estudiantes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('email');
            $table->timestamps();
        });

        Schema::create('inscripcion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('curso_id')->constrained('cursos');
            $table->foreignId('estudiante_id')->constrained('estudiantes');
            $table->timestamp('inscripcion');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inscripcion');
        Schema::dropIfExists('estudiantes');
        Schema::dropIfExists('cursos');
    }
};
