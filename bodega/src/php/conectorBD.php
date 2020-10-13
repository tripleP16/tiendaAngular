<?php
class conectorBD{
    private $host;
    private $user;
    private $password;
    private $conexion;

    function __construct($host, $user, $password){
      $this->host = $host;
      $this->user = $user;
      $this->password = $password;
    }

    function ejecutarQuery($query){
        return $this->conexion->query($query);
      }

    function initConexion($nombre_db){
      $this->conexion = new mysqli($this->host, $this->user, $this->password, $nombre_db);
      if ($this->conexion->connect_error) {
        return "Error:" . $this->conexion->connect_error;
      }else {
        return "OK";
      }
    }

    function insertCliente($email, $password){
        $insert = $this->conexion->prepare('INSERT INTO usuarios (email, contrasena) VALUES(?,?)');
        $insert->bind_param("ss", $email , password_hash($password, PASSWORD_DEFAULT)); 
        $insert->execute();  
  
    }

    function iniciarSesion($email){
        $select = $this->conexion->prepare('SELECT * FROM usuarios WHERE email = ?'); 
        $select->bind_param("s", $email); 
        $select->execute();
        $result = $select->get_result();
        return $result ;
    }

    function obtenerBodega(){
      $select = $this->conexion->prepare('SELECT * FROM productos'); 
      $select->execute();
      $result = $select->get_result();
      return $result ;
    }

    function agregarCarro($usuario_id, $producto_id, $cantidad){
      $insert = $this->conexion->prepare('INSERT INTO carrito (usuarios_id,productos_id,cantidad) VALUES(?,?,?)'); 
      $insert->bind_param("iii", $usuario_id, $producto_id, $cantidad); 
      $insert->execute();
    }
    
  
}
?>