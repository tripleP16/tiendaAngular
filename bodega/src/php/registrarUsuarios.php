<?php
    require('conectorBD.php');
    $con = new ConectorBD('localhost', 'user_prueba', '123456P');
    if($con->initConexion('bodega') == 'OK'){
        $con->insertCliente('f@gmail.com', '12345678');
        $con->insertCliente('p@gmail.com', 'ABCDEFGHIJK');
        echo 'Usuarios Creados';
    }else {
        echo 'Error ';
    }
?>