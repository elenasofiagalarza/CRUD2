//boton mostrar
function mostrar()
{  //console.log(mostrar);
   var id_usuario=document.getElementById('ID_usuariot').value;
        $.ajax({
        url: "mostraru.php",
        type: "POST",
        datatype:'json',
        data: {
            mostrar : mostrar
        },
        success: function(result){
            var mostrardatos=JSON.parse(result)
           
            
            imprimir(mostrardatos);           
        }
    });

}


function imprimir(mostrardatos)
    {
        alert(mostrardatos.length) 
        var i=0;
        for(i=0;i<mostrardatos.length;i++)
            {
                

                // document.write( "<br/>"+"id_usuario: "+mostrardatos[i]['id_usuario']);
                // document.write("<br/>"+"nombre: "+mostrardatos[i]['nombre']);
                // document.write("<br/>"+"Apellido_Paterno: "+mostrardatos[i]['Apellido_Paterno']);
                // document.write("<br/>"+"Apellido_Materno: "+mostrardatos[i]['Apellido_Materno']);
                // document.write("<br/>"+"Usuario: "+mostrardatos[i]['Usuario']);
                // document.write("<br/>"+"Contrasena: "+mostrardatos[i]['Contrasena']);
                // document.write("<br/>"+"Fecha_Modificacion_Pass: "+mostrardatos[i]['Fecha_Modificacion_Pass']);
                // document.write("<br/>"+"Fecha_Alta: "+mostrardatos[i]['Fecha_Alta']);
                // document.write("<br/>"+"Tipo_Perfil: "+mostrardatos[i]['Tipo_Perfil']);

                document.getElementById('ID_usuariot').innerHTML=mostrardatos[i]['id_usuario'];
                document.getElementById('nombret').innerHTML=mostrardatos[i]['nombre'];
                document.getElementById('Apellido_Paternot').innerHTML=mostrardatos[i]['Apellido_Paterno'];
                document.getElementById('Apellido_Maternot').innerHTML=mostrardatos[i]['Apellido_Materno'];
                document.getElementById('Usuariot').innerHTML=mostrardatos[i]['Usuario'];
                document.getElementById('Contrasenat').innerHTML=mostrardatos[i]['Contrasena'];
                document.getElementById('Fecha_Modificacion_Passt').innerHTML=mostrardatos[i]['Fecha_Modificacion_Pass'];
                document.getElementById('Fecha_Altat').innerHTML=mostrardatos[i]['Fecha_Alta'];
                document.getElementById('Tipo_Perfilt').innerHTML=mostrardatos[i]['Tipo_Perfil'];
                
                // 
                // document.write( "<br/>"+"id_usuario: "+mostrardatos[i]['id_usuario']);
                // document.write("<br/>"+"nombre: "+mostrardatos[i]['nombre']);
                // document.write("<br/>"+"Apellido_Paterno: "+mostrardatos[i]['Apellido_Paterno']);
                // document.write("<br/>"+"Apellido_Materno: "+mostrardatos[i]['Apellido_Materno']);
                // document.write("<br/>"+"Usuario: "+mostrardatos[i]['Usuario']);
                // document.write("<br/>"+"Contrasena: "+mostrardatos[i]['Contrasena']);
                // document.write("<br/>"+"Fecha_Modificacion_Pass: "+mostrardatos[i]['Fecha_Modificacion_Pass']);
                // document.write("<br/>"+"Fecha_Alta: "+mostrardatos[i]['Fecha_Alta']);
                // document.write("<br/>"+"Tipo_Perfil: "+mostrardatos[i]['Tipo_Perfil']);
            }
    }

    //boton buscar
    function buscar()
    {
        var nombre=''; 
        nombre=document.getElementById('buscador').value;
       
        if(nombre==''){
            alert('Debe ingresar un nombre');
            return;
        }
        else{
               
        $.ajax({
            url: "buscaru.php",
            type: "POST",
            datatype:'json',
            data: {
                nombre : nombre
            },
            success: function(result2){

                var datos=JSON.parse(result2)
                // alert("llego el valor")
                // var array="";//CON ESTO ME DA ERROR
             if(datos.length>=1)
             {
                var datos=JSON.parse(result2)
             }
             else{
                alert("no se encontro la busqueda")
             }
            alert(datos.length)
                // var datos=result2//falata checar como sacar el valor
                // console.log(datos.array);//CON ESTO ME DA ERROR, ME APARECE FUNCION INDEFINIDA
   //alert(result2)
   imprimirbusqueda(datos) 
              
            }

        });
    }
    }
    $(function() {

        $("#td").dialog({
        autoOpen: false,
        modal:true,
        width:480,
        });

        $("#dialog").click(function(e){
            e.preventDefault();
            var idUsr = $(this).attr("href");
           
        $("#dialog").dialog("open");
        })
        })

        function ventana (url){
            window.open(url, "nombre de la ventana", "width=300, height=200")
            }
    // $("#dialog").dialog({
    //     $("tr").onDblclick(function(event){
    //         $("#dialog").dialog("open");
    //     })
    // });
    
// $(document).ready(function(){
// 	$("#dialog").dblclick(function(){
//         $("#dialog").dialog();
// 	});
// });
//     $(document).ready(function(){
// 	    $("tr").dblclick(function(){
           
//             $("#dialog").dialog();
            
// 	});
// });
    
        // $("#dialog").dialog(); 
        // $("#dialog").dialog();
        // $(".td").onDblclick(function(actualizar){
             
                // function(actualizar){}
            // $('tr').slice(1).$(this).attr("tr");
          

            // e.preventDefault();
            // var idUsr = $(this).attr("tr");
            
            
        // })  
    
    


    //boton borrar
    function borrar()
    {
        var borrar=document.getElementById('ID_usuariot').value;
        alert("id: "+id_usuario+" "+"Nombre_Completo: "+Nombre_Completo);
        $.ajax({
            url: "borraru.php",
            type: "POST",
            datatype:'json',
            data: {
                borrar : borrar
            },
            success: function(result2){
                alert("registro borrado")
                alert(result2)
          
            }
        });
    }
     //boton actualizar

    function actualizar()
    { 
        id_usuario=document.getElementById('ID_usuariot').value;
        nombre=document.getElementById('nombret').value
        Apellido_Paterno=document.getElementById('Apellido_Paternot').value
        Apellido_Materno=document.getElementById('Apellido_Maternot').value
        Usuario=document.getElementById('Usuariot').value;
        Contrasena=document.getElementById('Contrasenat').value
        Fecha_Modificacion_Pass=document.getElementById('Fecha_Modificacion_Passt').value
        Fecha_Alta=document.getElementById('Fecha_Altat').value
        Tipo_Perfil=document.getElementById('Tipo_Perfilt').value

        
        alert("id: "+id_usuario+" "+"nombre: "+nombre);
        $.ajax({
            url: "actualizaru.php",
            type: "POST",
            datatype:'json',
            data: {
                id_usuario : id_usuario,
                nombre : nombre,
                Apellido_Paterno:Apellido_Paterno,
                Apellido_Materno:Apellido_Materno,
                Usuario:Usuario,
                Contrasena : Contrasena,
                Fecha_Modificacion_Pass:Fecha_Modificacion_Pass,
                Fecha_Alta:Fecha_Alta,
                Tipo_Perfil:Tipo_Perfil
            },
            success: function(result4){
                alert("registro actualizado correctamente");
                alert(result4);
          //solo se actualizan los valores hasta apellido paterno
            }
        });
    }
  
    
    //boton insertar
    function insertar()
    { 
        id_usuario=document.getElementById('Nombre_completot').value;
        nombre=document.getElementById('nombret').value
        Apellido_Paterno=document.getElementById('Apellido_Paternot').value
        Apellido_Materno=document.getElementById('Apellido_Maternot').value
        Usuario=document.getElementById('Usuariot').value;
        Contrasena=document.getElementById('Contrasenat').value
        Fecha_Modificacion_Pass=document.getElementById('Fecha_Modificacion_Passt').value
        Fecha_Alta=document.getElementById('Fecha_Altat').value
        Tipo_Perfil=document.getElementById('Tipo_Perfilt').value
        Usuario=document.getElementById('Usuariot').value;
        Contrasena=document.getElementById('Contrasenat').value
        Fecha_Modificacion_Pass=document.getElementById('Fecha_Modificacion_Passt').value
        Fecha_Alta=document.getElementById('Fecha_Altat').value
        Tipo_Perfil=document.getElementById('Tipo_Perfilt').value

        
        alert("id: "+id_usuario+" "+"nombre: "+nombre);
        $.ajax({
            url: "insertaru.php",
            type: "POST",
            datatype:'json',
            data: {
                id_usuario : id_usuario,
                nombre : nombre,
                Apellido_Paterno:Apellido_Paterno,
                Apellido_Materno:Apellido_Materno,
                Usuario:Usuario,
                Contrasena : Contrasena,
                Fecha_Modificacion_Pass:Fecha_Modificacion_Pass,
                Fecha_Alta:Fecha_Alta,
                Tipo_Perfil:Tipo_Perfil
            },
            success: function(result4){
                alert("registro guardado correctamente");
                alert(result4);
          //solo se actualizan los valores hasta apellido paterno
            }
        });
    }

    function imprimirbusqueda(imprimir)
    {
       
        var tabla=$('table');
        
        
     
  $('tr').slice(1).remove();
        
        for( var i=0;i<imprimir.length;i++)
        {
         


            var tr=$("<tr></tr>");
            var col_id_usuario=$("<td>"+imprimir[i]['id_usuario']+"</td>")
            var col_nombre=$("<td>"+imprimir[i]['nombre']+"</td>")
            var col_Apellido_Paterno=$("<td>"+imprimir[i]['Apellido_Paterno']+"</td>")
            var col_Apellido_Materno=$("<td>"+imprimir[i]['Apellido_Materno']+"</td>")
            var col_Usuario=$("<td>"+imprimir[i]['Usuario']+"</td>")
            var col_Contrasena=$("<td>"+imprimir[i]['Contrasena']+"</td>")
            var col_Fecha_Modificacion_Pass=$("<td>"+imprimir[i]['Fecha_Modificacion_Pass']+"</td>")
            var col_Fecha_Alta=$("<td>"+imprimir[i]['Fecha_Alta']+"</td>")
            var col_Tipo_Perfil=$("<td>"+imprimir[i]['Tipo_Perfil']+"</td>")
            tr.append(col_id_usuario);
            tr.append(col_nombre);
            tr.append(col_Apellido_Paterno);
            tr.append(col_Apellido_Materno);
            tr.append(col_Usuario);
            tr.append(col_Contrasena);
            tr.append(col_Fecha_Modificacion_Pass);
            tr.append(col_Fecha_Alta);
            tr.append(col_Tipo_Perfil);
            tabla.append(tr);
     
        }
      


    }
    

    // function borrar()
    // {
    //     alert("buscar")
    //     document.getElementById("myDIV").style.display = "none";
    //     document.getElementById("myDIV2").style.display = "block";
        
    //     vbuscar=document.getElementById("buscar").value;
    // }

    // function borrar2()
    // {
    //     alert("mostrar")
        
    //     document.getElementById("myDIV2").style.display = "none";
    //     document.getElementById("myDIV").style.display = "block";
        
        
    // }       
    // $('tr.#buscar').dblclick(function() {

    //     editar();
    // });
    
    // function actualizar(){
    
    //   ;
    // }