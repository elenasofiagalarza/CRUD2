<?php
    require 'conexion_usuarios.php';
    $id_usuario=$_REQUEST['mostrar']; 
     
    $datos=array();
    $bandera=0;
    $sp="exec SP_mostrar ";

    $consulta=sqlsrv_query($con,$sp);
    while($Row=sqlsrv_fetch_array($consulta))
    {
        $datos[]= array(
            'id_usuario'=>$Row['id_usuario'],
            'nombre'=>$Row['nombre'],
            'Apellido_Paterno'=>$Row['Apellido_Paterno'],
            'Apellido_Materno'=>$Row['Apellido_Materno'],
            'Usuario'=>$Row['Usuario'],
            'Contrasena'=>$Row['Contrasena'],
            'Fecha_Modificacion_Pass'=>$Row['Fecha_Modificacion_Pass']->format('d/m/Y'),
            'Fecha_Alta'=>$Row['Fecha_Alta']->format('d/m/Y'),
            'Tipo_Perfil'=>$Row['Tipo_Perfil'],

        );
    }
    // echo "</table>";
    echo json_encode($datos)
   

?>