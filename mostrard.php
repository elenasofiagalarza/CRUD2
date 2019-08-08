<?php
    require 'conexion_datos.php';
    
    $mostrar=$_REQUEST['mostrar']; 
    $datos=array();

    $sp="exec SP_mostrar ";

    $consulta=sqlsrv_query($con,$sp);

    while($Row=sqlsrv_fetch_array($consulta))
    {
        $datos[]= array(
            // 'id_usuario'=>$Row['id_usuario'],
            // 'nombre'=>$Row['Telefono_1'],
            // 'Apellido_Paterno'=>$Row['Telefono_2'],
            // 'Apellido_Materno'=>$Row['Telefono_3'],
            // 'Comentarios'=>$Row['Comentarios'],
            // 'Fecha_Modificacion'=>$Row['Fecha_Modificacion']->format('d/m/Y'),
            // 'Respuesta_1'=>$Row['Respuesta_1'],
            // 'Respuesta_2'=>$Row['Respuesta_2'],
            // 'Respuesta_3'=>$Row['Respuesta_3'],
            // 'ID_usuario'=>$Row['ID_usuario'],
            // 'Folio'=>$Row['Folio'],
            // 'Tipo_Perfil'=>$Row['Tipo_Perfil']
            

        );
    }

    echo json_encode($datos)
   

?>