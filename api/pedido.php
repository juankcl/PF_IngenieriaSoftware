<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);

	// Sanitize.
	$user_id = $request->user_id;
	$total = mysqli_real_escape_string($con, (float)$request->total);

	// Create.
	$sql_pedido = "INSERT INTO `pedidos` (`id`, `user_id`, `fecha`, `total`) VALUES (null,'{$user_id}',NOW(),'{$total}')";

	if (mysqli_query($con, $sql_pedido)) {
		$id = mysqli_insert_id($con);
		http_response_code(202);
		echo json_encode($id);
	} else {
		$id = -1;
		http_response_code(422);
		echo $sql;
	}
}
