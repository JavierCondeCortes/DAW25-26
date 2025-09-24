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
                for($num=1 ; $num<=100 ; $num++){
                    if($num%2==0){
                        echo "<td>".$num."</td>";
                    }
                }

            ?>
        </tr>
    </table>
</body>
</html>