<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require('conectorBD.php');
$json = file_get_contents('php://input', true);
$params = json_decode($json);
$con = new ConectorBD('localhost', 'user_prueba', '123456P');

if($con->initConexion('bodega') == 'OK' && $params !=null){
    $productos = $con->obtenerCarroDeCompras($params->id);
    $i = 0; 
    while($producto = $productos->fetch_assoc()){
        $con->pagar($params->id,$producto['productos_id']);
        
        $i++;
    }

    $con->limpiarCarro($params->id);

}