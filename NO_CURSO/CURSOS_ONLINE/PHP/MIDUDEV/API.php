<?php 
const API_URL = "https://whenisthenextmcufilm.com/api";
#inicializacion de la nueva appi
$ch = curl_init(API_URL);
//inidcar que queremos recibir el resultado de la peticion
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
/*ejecutar la peticion*/
$result = curl_exec($ch);

//una alternativa seria usar file_get_contents

$data = json_decode($result,true);
curl_close($ch);
?>

<pre>
    <?=var_dump($data);?>
</pre>

<img src="<?= $data["poster_url"]; ?>" alt="">
<p><?=$data["title"]; ?></p>