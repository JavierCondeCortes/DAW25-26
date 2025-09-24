<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <?php 
                $numRandom = rand(1,100);
            
                for($Multiplicador=1 ; $Multiplicador<=10 ; $Multiplicador++){
                    echo "<td>".$numRandom*$Multiplicador."</td>";
                }
            ?>
        </tr>
    </table>
</body>
</html>