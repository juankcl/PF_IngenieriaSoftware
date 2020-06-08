export class User {
	id: number;
	username: string;
	password: string;
	password2: string;
}

export class Message {
	type: string;
	message: string;
}

export class Session {
	userId: number;
	admin: boolean;
}
