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
