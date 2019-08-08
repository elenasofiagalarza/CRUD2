$(function() {
    $("#buscador").val('');

    $("#icon-buscar").click(function(){
  /*js*/var buscar = $("#buscar").val();//jquery
  
        if(buscar==''){
            alert('Debe ingresar un nombre');
            return;
        }
        
        $.ajax({
            url: "buscaruSUA.php",
            type: "POST",
            dataType:'json',
            data: {
/*json*/    'busscar':buscar 
                
            },success:function(data){//console.log(data);
               // if(data.respuesta==0){//no hay error
                        // alert(data.array.ID_usuario);
                        // alert(data.array.Nombre);
                        // alert(array.res);
                    // console.log(array.respuesta);
                    frutas = ['Manzana', 'Banana'];
                    // alert(data.array);
                    // alert(frutas);
                    // frutas.forEach(function(item){
                    //        alert(item);     
                    // });
                    for (var i in j => data.array ) {
                        //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
                            // resultado += `${nombreObjeto}.${i} = ${data[i]}\n`;
                          
                          alert(data.array[i]);
                          if(data.array['Fecha_Modificacion_Pass']){
                            alert('este es el campo fecha');
                          }
                           // alert(data.array[i]);                                                   );
                        
                      }
                    
                   
                    //  console.log(data);
                          //necesito una funcion
                  
                
                // html='<table>'+
                //    '<tr>'+
                //     '<th>ID_usuario</th>'+
                //     '<th>Nombre</th>'+
                //     '<th>Apellido_Paterno</th>'+
                //     '<th>Apellido_Materno</th>'+
                //     '<th>Usuario</th>'+
                //     '<th>Contrasena</th>'+
                //     '<th>Fecha_Modificacion_Pass</th>'+
                //     '<th>Fecha_Alta</th>'+
                //     '<th>Tipo_Perfil</th>'+
                //     '<tr>'+
                //        data.forEach(valor => {
                // data.forEach(nueva);
                // function data(item){
                            
                   

               
                //   console.log(element);
                // html='<tr mostrarForm2>'
                //         '<td>'+ data.ID_usuario + '</td>' +
                //         '<td>'+ data.Nombre +'</td>'+
                //         '<td>'+ data.Apellido_Paterno +' </td>'+
                //         '<td>'+ data.Apellido_Materno+'</td> '  +
                //         '<td>'+ data.Usuario + '</td>' +
                //         '<td>'+ data.Contrasena +'</td>'+
                //         '<td>'+ data.Fecha_Modificacion_Pass +' </td>'+
                //         '<td>'+ data.Fecha_Alta +'</td> '  +
                //         '<td>'+ data.Tipo_Perfil +'</td> ' +
                //     '</tr>'+
                //     '</table>;'
               
                  //document.getElementById("myDIV2").innerHTML=element;//debe ir con lo que se quiera poner dentro del div
                    // $("myDIV2").htm(html);
               
                // }else if(data.respuesta==1){
                //     alert('Debe llenar el campo buscar');
                // }else if(data.respuesta==2){
                //     alert('El usuario no existe en la BD');
                //     $("#buscar").val('');
                // }
            
           
            

                 

               
               
                
                
            // $res_busqueda=json_decode(resultado);
            }
        }); 
    });
});

<?php
    require 'conexion_usuarios.php';

   
   $nombre=$_REQUEST['nombre'];
   $nombre = (string) $nombre;
   $respuesta=0;//no hay error
   $array="";
   
   
if($nombre==""){
    $respuesta=1;//no ingreso nombre
   
}else{

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
    if($buscar==null){
        $respuesta=2;//el usuario no existe en la BD
    }
}

    $buscar = array(
        'array'=>$array,
        'respuesta'=>$respuesta
    );
    echo json_encode($buscar)