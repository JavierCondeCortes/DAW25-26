<?php
if (!isset($_COOKIE["idioma"])) {
    if (isset($_GET["languaje"])) {
        setcookie("idioma", $_GET["languaje"], time() + 60 * 60 * 24 * 7);
        header("Location: " . $_SERVER["PHP_SELF"]);
        exit;
    }
    ?>
    <form action="" method="get">
        <label for="">choose your character</label>
        <label>
            <input type="radio" name="languaje" value="english" id="english">Inglés
        </label>
        <label>
            <input type="radio" name="languaje" value="spanish" id="spanish" checked>Español
        </label>
        <button type="submit">Enviar respuesta</button>
    </form>
    <?php
} else { ?>
    <?php if($_COOKIE["idioma"] == "english") :?>
        <h1>HELLO FRIEND</h1>
    <?php  else :?>
        <h1>HOLA AMEGO</h1>
    <?php endif ;?>
<?php } ?>
