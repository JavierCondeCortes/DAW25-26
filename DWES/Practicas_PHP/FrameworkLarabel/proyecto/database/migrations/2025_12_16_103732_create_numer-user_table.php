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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nombre');
            $table->integer('edad')->check('entero >= 12');
        });
        Schema::create('telefono', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('marca');
            $table->integer('numero');
            
            $table->foreignId('usuario_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persona');
        Schema::dropIfExists('telefono');
    }
};
