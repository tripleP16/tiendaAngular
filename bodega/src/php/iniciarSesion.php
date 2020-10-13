<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    require('conectorBD.php');
    error_reporting(0);
    session_start();
    $json = file_get_contents('php://input', true);
    $params = json_decode($json);
    $con = new ConectorBD('localhost', 'user_prueba', '123456P');
    if($con->initConexion('bodega') == 'OK'){
        if ($params !=null){
            $usuarios = $con->iniciarSesion($params->email); 
            $usuario = $usuarios->fetch_assoc();
            if ($usuario == null){
                $response['mensaje'] = "El email ingresado no se encuentra registrado";
                $response['resultado']="Not ok";
            }else{
                if(password_verify($params->password, $usuario['contrasena'])){
                    
                    $_SESSION['id'] = $usuario['id'];
                    $response['user']= $usuario['id'];
                    $response['resultado']="OK";
                }else{
                    $response['mensaje'] = "La contraseña es incorrecta";
                    $response['resultado']="Not ok";
                }
                
            }
            
        }else{
            $response['mensaje'] = 'Hubo un error en el login';
            $response['resultado']="Not ok";
        }
    }else{
        $response['mensaje'] = 'Hubo un error en la conexion con la base de datos';
        $response['resultado']="Not ok";
    }
    
  

    echo json_encode($response);
    
?>