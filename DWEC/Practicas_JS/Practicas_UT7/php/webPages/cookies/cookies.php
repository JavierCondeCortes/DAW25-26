<?php 
setcookie('nombre1','pepe',strtotime('+30 days'));
setcookie('nombre2','luis',strtotime('+2 years'));
setcookie('nombre3','paco',time()+3600);
echo "cookies creadas";
?>