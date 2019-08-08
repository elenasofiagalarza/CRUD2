<?php
    require 'conexion_usuarios.php';

   $id_usuario=$_REQUEST['id_usuario']; 
   $nombre=$_REQUEST['nombre'];
   $nombre = (string) $nombre;
   $Apellido_Paterno=$_REQUEST['Apellido_Paterno'];
   $Apellido_Paterno=(string) $Apellido_Paterno;
   $Apellido_Materno=$_REQUEST['Apellido_Materno'];
   $Apellido_Materno=(string) $Apellido_Materno; 
   $Usuario=$_REQUEST['Usuario'];
   $Usuario = (string) $Usuario;
   $Contrasena=$_REQUEST['Contrasena'];
   $Contrasena=(string) $Contrasena;
   $Fecha_Modificacion_Pass=$_REQUEST['Fecha_Modificacion_Pass'];
//    $Fecha_Modificacion_Pass=(object) $Fecha_Modificacion_Pass;
   $Fecha_Alta=$_REQUEST['Fecha_Alta'];
//    $Fecha_Alta=(object) $Fecha_Alta;
   $Tipo_Perfil=$_REQUEST['Tipo_Perfil'];

    $actualizar=array();
    $sp="exec SP_ACTUALIZAR ";
    $var=$sp.$id_usuario.",".$nombre.",".$Apellido_Paterno.",".$Apellido_Materno.",".$Usuario.",".$Contrasena.",".$Fecha_Modificacion_Pass.",".$Fecha_Alta.",".$Tipo_Perfil;
   
    
    $consulta=sqlsrv_query($con,$var);

    

    echo json_encode($actualizar)

?>