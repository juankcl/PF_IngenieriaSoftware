<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {

	$request = json_decode($postdata);

	$search = mysqli_real_escape_string($con, trim($request->search));
	$id = mysqli_real_escape_string($con, (float)$request->id);
	
	$sql_search = "SELECT * FROM productos WHERE (nombre like '%{$search}%' ) AND id>='{$id}' limit 8";
	
	if ($result = mysqli_query($con, $sql_search)) {
		$i = 0;
		while ($row = mysqli_fetch_assoc($result)) {
			$results[$i]['id'] = $row['id'];
			$results[$i]['nombre'] = $row['nombre'];
			$results[$i]['descripcion'] = $row['descripcion'];
			$results[$i]['precio'] = $row['precio'];
			$results[$i]['imagenUrl'] = $row['imagenUrl'];
	
			$i++;
		}
		http_response_code(200);
		echo json_encode($results);
	} else {
		http_response_code(404);
	}
}

