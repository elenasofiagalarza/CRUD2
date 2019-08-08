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
    <input type="button" value="mostrar" id="mostrar" onClick="mostrar()"><br><br><br>
    
 
    <input type="button" value="eliminar" id="eliminar"onClick="eliminar()">
    <!-- <input type="button" value="editar" id="editar"onClick="editar()"> -->
    <input type="button" value="insertar" id="insertar"onClick="insertar()">
    <button><span class="fas fa-search" id="icon-buscar" onClick="buscar()"></span></button>
    <input type="search"  id="buscador" placeholder="Buscar aquí...">
  
    <br><br><br>
    <div id="dialog" title="Modificaciones">


        <table >
                    <tr>
                   
                        <label for="ID_usuario"><p>ID_usuario</p>
                        <p><input type="text" id="ID_usuariot" name="ID_usuario" value=""></p>
                        </label>
                        <label for="nombre"><p>Nombre</p>
                        <p><input type="text" id="nombret" name="nombre" value=""></p>
                        </label>
                        <label for="Apellido_Paterno"><p> Apellido_Paterno</p>
                        <p><input type="text" id="Apellido_Paternot" name="Apellido_Paterno" ></p>
                        </label>
                        <label for="Apellido_Materno"><p> Apellido_Materno</p>
                        <p><input type="text" id="Apellido_Maternot" name="Apellido_Materno" ></p>
                        </label>
                        <label for="Usuario"><p>Usuario</p>
                        <p><input type="text" id="Usuariot" name="Usuario" ></p>
                        </label>
                        <label for="Contrasena"><p>Contrasena</p>
                        <p><input type="password" id="Contrasenat" name="Contrasena" ></p>
                        </label>
                        <label for="Fecha_Modificacion_Pass"><p>Fecha_Modificacion_Pass</p>
                        <p><input type="text" id="Fecha_Modificacion_Passt" name="Fecha_Modificacion_Pass" ></p>
                        </label>
                        <label for="Fecha_Alta"><p>Fecha_Alta</p>
                        <p><input type="text" id="Fecha_Altat" name="Fecha_Alta" ></p>
                        </label> 
                        <label for="Tipo_Perfil"><p>Tipo_Perfil</p>
                        <p><input type="text" id="Tipo_Perfilt" name="Tipo_Perfil" ></p>
                        </label> 
                        
                         <input type="button"  value="Actualizar" onClick='actualizar()'>         
                    </tr>
                        
        </table>    
    </div>


        <table border=1 cellpadding=10>
            <tr>
                <th>id_usuario</th>
                <th>nombre</th>
                <th>Apellido_Paterno</th>
                <th>Apellido_Materno</th>
                <th>Usuario</th>
                <th>Contrasena</th>
                <th>Fecha_Modificacion_Pass</th>
                <th>Fecha_Alta</th>
                <th>Tipo_Perfil</th>

            </tr>
    
        </table>

    </body>
</html>
