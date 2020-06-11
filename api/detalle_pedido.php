<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);

	// Sanitize.
	$pedido_id = mysqli_real_escape_string($con, (float) $request->pedido_id);
	$producto_id = mysqli_real_escape_string($con, (float) $request->producto_id);
	$cantidad = mysqli_real_escape_string($con, (float) $request->cantidad);

	// Create.
	$sql_pedido = "INSERT INTO `detalle_pedidos` (`id`, `pedido_id`, `producto_id`, `cantidad`) VALUES (null,'{$pedido_id}','{$producto_id}','{$cantidad}')";

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
