

<?php echo "hola mundo"?>
<?= "hola mundo"?>

<?php 
    $name = "Javier"; 
    $isDev = false;
    $age = 20;
    $ageBool = (bool) 11;

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