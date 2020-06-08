<?php
/*
header("Access-Control-Allow-Origin: *");

$link = 'mysql:host=localhost; dbname=ing_softw';
$usuario = 'root';
$pass = 'root';


try {
	// Iniciar sesión en la base de datos
	$pdo = new PDO($link, $usuario, $pass);
} catch (PDOException $error) {
	print "Error: " . $error->getMessage() . "<br>";
	die();
}*/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_NAME', 'ing_softw');

function connect()
{
	$connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	if (mysqli_connect_errno($connect)) {
		die("Failed to connect:" . mysqli_connect_error());
	}

	mysqli_set_charset($connect, "utf8");

	return $connect;
}

$con = connect();

