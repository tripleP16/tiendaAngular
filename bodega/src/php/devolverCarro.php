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
        $response['productos'][$i]['productoId'] = $producto['productos_id'];
        $response['productos'][$i]['cantidadTotal'] = $producto['cantidad_total'];
        $response['productos'][$i]['total_producto'] = $producto['total_producto'];
        $response['productos'][$i]['precio']= $producto['precio']; 
        $response['productos'][$i]['imagen']=$producto['imagen'];
        $response['productos'][$i]['titulo']=$producto['titulo'];
        $i++;
    }

}
echo json_encode($response);
?>