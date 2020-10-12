<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require('conectorBD.php');
$con = new ConectorBD('localhost', 'user_prueba', '123456P');
if($con->initConexion('bodega') == 'OK'){
    $productos = $con->obtenerBodega();
    $i = 0;
    while($producto = $productos->fetch_assoc()){
        $response['productos'][$i]['id'] = $producto['id'];
        $response['productos'][$i]['titulo'] = $producto['titulo'];
        $response['productos'][$i]['cantidad'] = $producto['cantidad'];
        $response['productos'][$i]['src'] = $producto['imagen'];
        $response['productos'][$i]['precio'] = $producto['precio'];
        $i++;
    }

}

echo json_encode($response);
?>