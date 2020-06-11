<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	
	$request = json_decode($postdata);
	
	$user_id = mysqli_real_escape_string($con, (float)$request->user_id);
	$user = 25;
	
	
$sql_get = "SELECT * FROM pedidos WHERE user_id={$user_id} ORDER BY fecha DESC";
	// ORDER BY fecha ASC limit 8
	if ($result = mysqli_query($con, $sql_get)) {
		$i = 0;
		$j = 0;
		$k = 0;
		while ($row = mysqli_fetch_assoc($result)) {
			$results[$i]['id'] = $row['id'];
			$results[$i]['user_id'] = $row['user_id'];
			$results[$i]['fecha'] = $row['fecha'];
			$results[$i]['total'] = $row['total'];

			
			$pedido_id = (float)$row['id'];

			$sql_search2 = "SELECT * FROM detalle_pedidos WHERE pedido_id='{$pedido_id}'";
			$detalles = mysqli_query($con, $sql_search2);
			while ($row2 = mysqli_fetch_assoc($detalles)){
				$results2[$j]['id'] = $row2['id'];
				$results2[$j]['producto_id'] = $row2['producto_id'];
				$results2[$j]['cantidad'] = $row2['cantidad'];

				$producto_id = $row2['producto_id'];
				$sql_search3 = "SELECT * FROM productos WHERE id='{$producto_id}'";
				$producto = mysqli_query($con, $sql_search3);

				$row3 = mysqli_fetch_assoc($producto);
				$results3['id'] = $row3['id'];
				$results3['nombre'] = $row3['nombre'];
				$results3['descripcion'] = $row3['descripcion'];
				$results3['precio'] = $row3['precio'];
				$results3['imagenUrl'] = $row3['imagenUrl'];

				$results2[$j]['producto'] = $results3;

				$j++;
			}

			$results[$i]['detalles'] = $results2;
			$results2 = array(); 

			$i++;
			$j = 0;
		}
		
		http_response_code(200);
		echo json_encode($results);
		die();
		//echo mysqli_error($con);
	}
	http_response_code(404);
	echo $postdata;
	//echo mysqli_error($con);
}

/*$sql_search2 = "SELECT * FROM detalle_pedidos WHERE pedido_id='{$results[$i]['id']}'";
			$detalles = mysqli_query($con, $sql_search2);
			while ($row2 = mysqli_fetch_assoc($result)){
				$results[$i]['detalles'][$j]['id'] = $row2['id'];
				$results[$i]['detalles'][$j]['producto_id'] = $row2['producto_id'];
				$results[$i]['detalles'][$j]['cantidad'] = $row2['cantidad'];
				$j++;
			}
			$j = 0;*/
