<!DOCTYPE html>

<html>
    <head>
    
    <link rel=stylesheet href="estilos.css" type="text/css" >
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script type="text/javascript" src="jquery/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="jquery/jquery-ui.js"></script>
        <script src="https://kit.fontawesome.com/d4135c4d19.js"></script>
        <script type="text/javascript" src="metodosu.js"></script>
    </head>
    <body>
    <a href="logout.php" onClick="window.open"><input type="button" name="logout"><span class="fas fa-times-circle"></span></a>
    <input type="button" value="mostrar" onClick="mostrar()"><br><br><br>

    
    <input type="button" value="buscar" onClick="buscar()">
 
    <input type="button" value="borrar" onClick="borrar()">
    <input type="button" value="insertar" onClick="insertar()">

    <input type="text"  id="buscador">
  
  <br><br><br>
        <table>
            <tr>
                   
                <label for="Nombre_completo"><p>Nombre Completo</p>
                <p><input type="text" id="Nombre_completot" name="Nombre_completo" value=""></p>
                </label>
                <label for="Telefono_1"><p>Telefono 1</p>
                <p><input type="text" id="Telefonot_1" name="Telefono_1" value=""></p>
                </label>
                <label for="Telefono_2"><p>Telefono 2</p>
                <p><input type="text" id="Telefonot_2" name="Telefono_2" ></p>
                </label>
                <label for="Telefono_3"><p>Telefono 3</p>
                <p><input type="text" id="Telefonot_3" name="Telefono_3" ></p>
                </label>
                <label for="Comentarios"><p>Comentarios</p>
                <p><input type="text" id="Comentariost" name="Comentarios" ></p>
                </label>
                <label for="Fecha_Modificacion"><p>Fecha Modificacion</p>
                <p><input type="password" id="Fecha_Modificaciont" name="Fecha_Modificacion" ></p>
                </label>
                <label for="Respuesta_1"><p>Respuesta 1</p>
                <p><input type="text" id="Respuestat_1" name="Respuesta_1" ></p>
                </label>
                <label for="Respuesta_2"><p>Respuesta 2</p>
                <p><input type="text" id="Respuestat_2" name="Respuesta_2" ></p>
                </label> 
                <label for="Respuesta_3"><p>Respuesta 3</p>
                <p><input type="text" id="Respuestat_3" name="Respuesta_3" ></p>
                </label> 
                <label for="ID_usuario"><p>ID usuario</p>
                <p><input type="text" id="ID_usuariot" name="ID_usuario" ></p>
                </label>
                <label for="Folio"><p>Folio</p>
                <p><input type="text" id="Foliot" name="Folio" ></p>
                </label> 
                <label for="Tipo_Perfil"><p>Tipo_Perfil</p>
                <p><input type="text" id="Tipo_Perfilt" name="Tipo_Perfil" ></p>
                </label> 
                        
                <input type="button"  value="Actualizar" onClick='actualizar()'>         
            </tr>
                        
        </table>    


    </body>
</html>

                      
                      
                   