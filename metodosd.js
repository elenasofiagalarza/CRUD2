//boton mostrar
function mostrar()
{
   
   
        $.ajax({
        url: "mostrard.php",
        type: "POST",
        datatype:'json',
        data: {
            // mostrar : mostrar
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
                alert("entro al for")

                // document.write( "<br/>"+"id_usuario: "+mostrardatos[i]['id_usuario']);
                // document.write("<br/>"+"nombre: "+mostrardatos[i]['nombre']);
                // document.write("<br/>"+"Apellido_Paterno: "+mostrardatos[i]['Apellido_Paterno']);
                // document.write("<br/>"+"Apellido_Materno: "+mostrardatos[i]['Apellido_Materno']);
                // document.write("<br/>"+"Usuario: "+mostrardatos[i]['Usuario']);
                // document.write("<br/>"+"Contrasena: "+mostrardatos[i]['Contrasena']);
                // document.write("<br/>"+"Fecha_Modificacion_Pass: "+mostrardatos[i]['Fecha_Modificacion_Pass']);
                // document.write("<br/>"+"Fecha_Alta: "+mostrardatos[i]['Fecha_Alta']);
                // document.write("<br/>"+"Tipo_Perfil: "+mostrardatos[i]['Tipo_Perfil']);

                document.getElementById('Nombre_completot').value=mostrardatos[i]['Nombre_completo'];
                document.getElementById('Telefonot_1').value=mostrardatos[i]['Telefono_1'];
                document.getElementById('Telefonot_2').value=mostrardatos[i]['Telefono_2'];
                document.getElementById('Telefonot_3').value=mostrardatos[i]['Telefono_3'];
                document.getElementById('Comentariost').value=mostrardatos[i]['Comentarios'];
                document.getElementById('Fecha_Modificaciont').value=mostrardatos[i]['Fecha_Modificacion'];
                document.getElementById('Respuestat_1').value=mostrardatos[i]['Respuesta_1'];
                document.getElementById('Respuestat_2').value=mostrardatos[i]['Respuesta_2'];
                document.getElementById('Respuestat_3').value=mostrardatos[i]['Respuesta_3'];
                document.getElementById('ID_usuariot').value=mostrardatos[i]['ID_usuario'];
                document.getElementById('Foliot').value=mostrardatos[i]['Folio'];
                document.getElementById('Tipo_Perfilt').value=mostrardatos[i]['Tipo_Perfil'];
              
                
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
        var Nombre_Completo=''; 
        Nombre_Completo=document.getElementById('buscador').value; 
               
        $.ajax({
            url: "buscard.php",
            type: "POST",
            datatype:'json',
            data: {
                 Nombre_Completo : Nombre_Completo
            },
            success: function(result2){
                alert("llego el valor")
                alert(result2)
                
                  
                
                var buscardatos=JSON.parse(result2)//aqui me marca error
               
                
                imprimir(buscardatos);   
                //solo muestra los resultados del ultimo registro
                    
            }

            


        });
    }
    //boton borrar
    function borrar()
    {
        var borrar=document.getElementById('ID_usuariot').value;
        alert("id: "+id_usuario+" "+"Nombre_Completo: "+Nombre_Completo);
        $.ajax({
            url: "borrard.php",
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
        Nombre_Completo=document.getElementById('Nombre_completot').value;
        Telefono_1=document.getElementById('Telefonot_1').value
        Telefono_2=document.getElementById('Telefonot_2').value
        Telefono_3=document.getElementById('Telefonot_3').value
        Comentarios=document.getElementById('Comentariost').value;
        Fecha_Modificacion=document.getElementById('Fecha_Modificaciont').value
        Respuesta_1=document.getElementById('Respuestat_1').value
        Respuesta_2=document.getElementById('Respuestat_2').value
        Respuesta_3=document.getElementById('Respuestat_3').value
        Id_usuario=document.getElementById('ID_usuariot').value
        Folio=document.getElementById('Foliot').value
        Tipo_Perfil=document.getElementById('Tipo_Perfilt').value
        

        
        alert("id: "+id_usuario+" "+"Nombre_Completo: "+Nombre_Completo);
        $.ajax({
            url: "actualizard.php",
            type: "POST",
            datatype:'json',
            data: {
                Nombre_Completo : Nombre_Completo,
                Telefono_1 : Telefono_1,
                Telefono_2:Telefono_2,
                Telefono_3:Telefono_3,
                Comentarios:Comentarios,
                Fecha_Modificacion : Fecha_Modificacion,
                Respuesta_1:Respuesta_1,
                Respuesta_2:Respuesta_2,
                Respuesta_3:Respuesta_3,
                Id_usuario:Id_usuario,
                Folio:Folio,
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
        Nombre_Completo=document.getElementById('Nombre_completot').value;
        Telefono_1=document.getElementById('Telefonot_1').value
        Telefono_2=document.getElementById('Telefonot_2').value
        Telefono_3=document.getElementById('Telefonot_3').value
        Comentarios=document.getElementById('Comentariost').value;
        Fecha_Modificacion=document.getElementById('Fecha_Modificaciont').value
        Respuesta_1=document.getElementById('Respuestat_1').value
        Respuesta_2=document.getElementById('Respuestat_2').value
        Respuesta_3=document.getElementById('Respuestat_3').value
        Id_usuario=document.getElementById('ID_usuariot').value
        Folio=document.getElementById('Foliot').value
        Tipo_Perfil=document.getElementById('Tipo_Perfilt').value
        
    
        alert("id: "+id_usuario+" "+"Nombre_Completo: "+Nombre_Completo);
        $.ajax({
            url: "insertard.php",
            type: "POST",
            datatype:'json',
            data: {
                Nombre_Completo : Nombre_Completo,
                Telefono_1 : Telefono_1,
                Telefono_2:Telefono_2,
                Telefono_3:Telefono_3,
                Comentarios:Comentarios,
                Fecha_Modificacion : Fecha_Modificacion,
                Respuesta_1:Respuesta_1,
                Respuesta_2:Respuesta_2,
                Respuesta_3:Respuesta_3,
                Id_usuario : Id_usuario,
                Folio:Folio,
                Tipo_Perfil:Tipo_Perfil
            },
            success: function(result4){
                alert("registro guardado correctamente");
                alert(result4);
          //solo se actualizan los valores hasta apellido paterno
            }
        });
    }