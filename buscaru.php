<?php
    require 'conexion_usuarios.php';

   
   $nombre=$_REQUEST['nombre'];
   $nombre = (string) $nombre;
   //$respuesta=0;//no hay error
   $array="";
// if($nombre==""){
//     $respuesta=1;//no ingreso nombre
   
// }else{

    $buscar=array();
    $sp="exec SP_BUSCAR ";
    $var=$sp.$nombre;
    $consulta=sqlsrv_query($con,$var);
    
    while($Row=sqlsrv_fetch_array($consulta))
    {
        
        $buscar[]= array(
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
    // if($buscar==null){
    //    // $respuesta=2;//el usuario no existe en la BD
    //     // echo "no se encuentra en la base de datos";
    //     // echo"<script type=\"text/javascript\">alert('Lo estamos redireccionando'); </script>";
    //     echo" alert('El usuario no tiene fecha de alta Asignada');";
        
    // }
    // else{
        echo json_encode($buscar);
    // }

            
           

    // $buscar = array(
    //     'array'=>$array,
    //     'respuesta'=>$respuesta
    // );

    

?>