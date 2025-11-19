<?php 
    if(!isset($_COOKIE["login"])){
        setcookie($login,"pepinillo",time()+60*5);
    }
?>