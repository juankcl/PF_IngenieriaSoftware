<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);

	// Sanitize.
	$username = mysqli_real_escape_string($con, trim($request->username));
	$pass = mysqli_real_escape_string($con, trim($request->password));

	$pass = password_hash($pass, PASSWORD_DEFAULT);

	// Verificar que no exista previamente
	$sql_test = "SELECT * FROM usuarios WHERE username='{$username}'";
	$resultado = mysqli_query($con, $sql_test);
	if (mysqli_num_rows($resultado))
	{
		$message = [
			'message' => 'Usuario ya existente',
			'type' => 'danger'
		];
		echo json_encode($message);
		die();
	} else {
		// Create.
		$sql = "INSERT INTO `usuarios`(`id`,`username`,`password`, `admin`) VALUES (null,'{$username}','{$pass}',FALSE)";
	
		if (mysqli_query($con, $sql)) {
			http_response_code(201);
			$message = [
				'message' => 'Usuario creado con éxito',
				'type' => 'success'
			];
			echo json_encode($message);
		} else {
			http_response_code(422);
		}
	}
}
