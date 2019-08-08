<?php
    //conexion  a la base de datos 
    $serverName ="MGALARZA";
    $connectionInfo = array("Database"=>"DB_DATOS","UID"=>"sa","PWD"=>"12345678");
    $con = sqlsrv_connect($serverName, $connectionInfo);

    if ($con) {
       // echo"Conexión establecida";   //checar como no aparezca este mensaje en la pagina
  
    }else {echo"Fallo en la conexión";  //checar como no aparezca este mensaje en la pagina
    }
     
    
    
   
?>