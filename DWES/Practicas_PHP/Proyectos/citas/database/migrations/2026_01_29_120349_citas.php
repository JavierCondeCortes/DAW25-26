<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->id();

            $table->foreignId('id_usuario')
                ->constrained('users')
                ->onDelete('cascade');

            $table->foreignId('id_cliente')
                ->constrained('clientes')
                ->onDelete('cascade');

            $table->foreignId('id_servicio')
                ->constrained('servicios')
                ->onDelete('cascade');

            $table->date('fecha');
            $table->time('hora');
            $table->boolean('activo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
};
