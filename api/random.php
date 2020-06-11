<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {

	$sql_search = "SELECT * FROM productos ORDER BY RAND()LIMIT 8";

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