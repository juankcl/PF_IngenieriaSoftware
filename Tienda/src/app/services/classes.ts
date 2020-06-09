export class User {
	id: number;
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
