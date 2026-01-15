<?php 
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;
    use App\Models\Chollo;

    class Categoria extends Model{
        public function chollos(){
            return $this -> hasMany(Chollo::class);
        }
    }

?>