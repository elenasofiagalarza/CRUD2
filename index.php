<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <link type="stylesheet" href="estilos.css" type="text/css" >
        <script type="text/javascript" src="jquery/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="jquery/jquery-ui.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script type="text/javascript" src="logica_usuarios.js"></script>
        <script type="text/javascript" src="usuarios.js"></script>
       
        <title>Login</title> 
        
        <title>Login</title> 
    </head>
    <body>
       

        <form action="logica_validar.php" method="POST" id="login">
            <h1>Login</h1>
            
            <div class="contenedor_login">
                <label for="caja1"><p> Usuario</p>
                    <p><input type="text" id="usuario" name="usuario" placeholder="usuario"required/></p>
                </label>
                <label for="caja2"><p> Password</p>
                    <p><input type="password" id="contrasena" name="password" placeholder="password" required/></p>
                </label>
                <input type="submit" name="enviar" value="Enviar"/>
                
            </div>
            
            
        </form>
        <br/>
       
    </body>
</html>


