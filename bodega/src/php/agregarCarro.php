<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require('conectorBD.php');
    $json = file_get_contents('php://input', true);
    $params = json_decode($json);
    $con = new ConectorBD('localhost', 'user_prueba', '123456P');
    
    if($con->initConexion('bodega') == 'OK' && $params !=null){
        $con->agregarCarro($params->id_user, $params->id, $params->cantCarro);
        $response['resultado'] ="OK";
    }else{
        $response['resultado']="Not ok";
    }

    echo json_encode($response);
?>