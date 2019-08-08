<?php
//cerrar sesion
session_start();
//unset($_SESSION['usuario']);

//$_SESSION = array();  

session_destroy();

header("location:index.php");
?>