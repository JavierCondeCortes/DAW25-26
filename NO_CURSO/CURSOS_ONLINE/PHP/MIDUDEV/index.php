<?php echo "hola mundo" ?>
<?= "hola mundo" ?>

<?php
$name = "Javier";
$isDev = false;
$age = 20;
$ageBool = (bool) 11;

$isOld = $age > 40;

if ($isOld) {
    echo "eres viego";
} elseif (!$isDev) {
    echo "eres un puñetero gay";
} else {
    echo "eres joven";
}
;
?>

<?php if ($isOld): ?>
    <h2>eres viego</h2>
<?php elseif (!$isDev): ?>
    <h2>eres jilipollas</h2>
<?php else: ?>
    <h2>eres joven</h2>
<?php endif; ?>

<?php $outputAge= $isOld
    ? 'eres viejo'
    : 'eres joven';
?>


<?php 
$outputAge = match($age){
    0,1,2 => "eres un babe $name",
    3,4,5,6,7,8,9,10 => "eres un joven $name",
    11,12,13,14,15,16,17 => "eres un adolescente $name",
    default => "estas muerto?",
}
?>
<?php 
$outputAge = match(true){
    $age<2 => "eres un babe $name",
    $age<10 => "eres un joven $name",
    $age === 18 => "puedes votar",
    $age<19 => "eres un adolescente $name",
    default => "estas muerto?",
}
?>
<?php 

$bestLanguajes = ["PHP","JAVA","PYTHON",1,2];
$bestLanguajes[] = "JAVASCRIPT";
$bestLanguajes[3] = "SOLARIS";
?>

<h2><?= $bestLanguajes[3] ?></h2>

<ul>
    <?php foreach ($bestLanguajes as $Languajes) : ?>
        <li><?= $Languajes ?></li>
    <?php endforeach; ?>
</ul>

<ul>
    <?php foreach ($bestLanguajes as $key => $LanguaGes) : ?>
        <li><?= $key ." ".$LanguaGes ?></li>
    <?php endforeach; ?>
</ul>


<?php 
$person =[
    "name" => "javier",
    "edad" => "20",
    "isDev" => true,
    "Languajes" => ["PHP","JS","PYTHON","HTML"],
];

$person["name"] = "pedro";
$person["Languajes"][] = "JAVA";
?>


<?php

$output = "Hola $name con una edad de $edad";

define('IMG_AVATAR', '');

define ('NOMBRE', 'JAVIER');

?>



<h1>
    <?= $output; ?>
</h1>




<?php

var_dump($name);
var_dump($isDev);
var_dump($age);

gettype($name);
gettype($isDev);
gettype($age);

is_string($name);
is_bool($isDev);
is_int($age);

$newAge = $age + '1';

?>
