<?php
    require 'conexion_datos.php';

   $borrar=$_REQUEST['borrar'];

    $buscar=array();

    // $consulta=sqlsrv_query($con,"[SP_BORRAR].'$borrar'");
    
    $sp="exec SP_BORRAR ";
    $var=$sp.$borrar;
    $consulta=sqlsrv_query($con,$var);

    echo $consulta
    
    

   
    

  
