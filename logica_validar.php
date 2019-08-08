<?php
            //conexion a db_usuarios
   require 'conexion_usuarios.php';
            //validacion para que entre el usuario
           
  //var_dump($_POST['password']);die();
   //variables recibidas del formulario x post del name
$validar_usuario=$_POST['usuario'];
$validar_password=$_POST['password'];
//$validar_tipo_perfil="";
 
if(empty ($_POST['usuario']) && empty ($_POST['password'])) {
   echo "<script>
   alert('Usuario y/contraseña vacios');window.location= 'index.php' 
         </script>";
}
         
else{
   $sql="EXEC SP_LOGIN ".$validar_usuario.",". $validar_password."";//en la consulta y aqui se ponen los mismos campos a utilizar

   $ejecutar=sqlsrv_query($con,$sql);  
   $resultado=sqlsrv_fetch_array($ejecutar);//te trae todo con resultado
   // var_dump( $con); die();
   
   if($validar_usuario == $resultado['Usuario'] && $validar_password == $resultado['Contrasena']){
      SESSION_START();
   //se crearan las variables de sesion   
   

 
   $_SESSION['usuario']=$resultado['Usuario'];
   //primero se pone lo que se crea y luego lo que se asigna o que se trae
   var_dump($_SESSION['usuario']); die();
 
 
         if($_SESSION["Tipo_Perfil"]== 2){
            header('location:datos.php');
            $_SESSION["Tipo_Perfil"] = $resultado['Tipo_Perfil'];
         }else{
            header('location:usuarios.php');
            $_SESSION["Tipo_Perfil"] = $resultado['Tipo_Perfil'];//como esta en sql
         }
               
           
               
      }else{
               
              //para que me aparezca el mensaje y se redirecione a la pagina principal
              echo "<script>
              alert('Usuario y/contraseña incorrectos');window.location= 'index.php';
                    </script>";
                    
      }
         
}
         
         
           
  
?>