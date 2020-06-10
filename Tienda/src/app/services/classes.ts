export class User {
	userId: number;
	username: string;
	password: string;
}

export class Message {
	type: string;
	message: string;
}

export class Session {
	valid: boolean;
	user: User;
	admin: boolean;
}

export class Search {
	id: number;
	search: string;
}

export class Producto {
	id: number;
	nombre: string;
	descripcion: string;
	precio: number;
	imagenUrl: string;
}

export class ProductoCarr {
	producto: Producto;
	cantidad: number;
}

export class Pedido {
	id: number;
	user_id: number;
	fecha: Date;
	total: number;
}

export class DetallePedido {
	id: number;
	pedido_id: number;
	producto_id: number;
	cantidad: number;
}

export class PedidoC {
	id: number;
	user_id: number;
	fecha: Date;
	total: number;
	detalles: DetallePedidoP[];
}

export class DetallePedidoP {
	id: number;
	pedido_id: number;
	producto_id: number;
	cantidad: number;
	producto: Producto;
}
