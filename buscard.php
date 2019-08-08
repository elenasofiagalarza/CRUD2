<?php
    require 'conexion_datos.php';

   
   $Nombre_Completo=$_REQUEST['Nombre_Completo'];
   $Nombre_Completo = (string) $Nombre_Completo;
    $buscar=array();
    $sp="exec SP_BUSCAR ";
    $var=$sp.$Nombre_Completo;
   

    $consulta=sqlsrv_query($con,$var);

    while($Row=sqlsrv_fetch_array($consulta))
    {
        $buscar[]= array(
            'Nombre_completo'=>$Row['Nombre_completo'],
            'Telefonot_1'=>$Row['Telefonot_1'],
            'Telefonot_2'=>$Row['Telefonot_2'],
            'Telefonot_3'=>$Row['Telefonot_3'],
            'Comentarios'=>$Row['Comentarios'],
            'Fecha_Modificacion'=>$Row['Fecha_Modificacion'],
            'Respuestat_1'=>$Row['Respuestat_1']->format('d/m/Y'),
            'Respuestat_2'=>$Row['Respuestat_2']->format('d/m/Y'),
            'Respuestat_3'=>$Row['Respuestat_3'],
            'ID_usuario'=>$Row['ID_usuario'],
            'Folio'=>$Row['Folio']
            'Tipo_Perfil'=>$Row['Tipo_Perfil']
        );
    }

    echo json_encode($buscar)

?>