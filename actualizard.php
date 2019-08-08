<?php
    require 'conexion_datos.php';

   $Nombre_Completo=$_REQUEST['Nombre_Completo'];
   $Nombre_Completo = (string) $Nombre_Completo; 
   $Telefono_1=$_REQUEST['Telefono_1'];
   $Telefono_2=$_REQUEST['Telefono_2'];
   $Telefono_3=$_REQUEST['Telefono_3'];
   $Comentarios=$_REQUEST['Comentarios'];
   $Comentarios = (string) $Comentarios;
   $Fecha_Modificacion=$_REQUEST['Fecha_Modificacion'];
   $Respuesta_1=$_REQUEST['Respuesta_1'];
   $Respuesta_1=(string) $Respuesta_1;
   $Respuesta_2=$_REQUEST['Respuesta_2'];
   $Respuesta_2=(string) $Respuesta_2
   $Respuesta_3=$_REQUEST['Respuesta_3'];
   $Respuesta_3=(string) $Respuesta_3;
   $Id_usuario=$_REQUEST['Id_usuario'];
   $Folio=$_REQUEST['Folio'];
   $Folio=(string) $Folio;
   $Tipo_Perfil=$_REQUEST['Tipo_Perfil'];

    $actualizar=array();
    $sp="exec SP_ACTUALIZAR ";
    $var=$sp.$Nombre_Completo.",".$Telefono_1.",".$Telefono_2.",".$Telefono_3.",".$Comentarios.",".$Fecha_Modificacion.",".$Respuesta_1.",".$Respuesta_2.",".$Respuesta_3.",".$Id_usuario.",".$Folio.",".$Tipo_Perfil;
   
    
    $consulta=sqlsrv_query($con,$var);

    

    echo json_encode($actualizar)

?>