import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
	id: number;
	name: string;
	price: number;
	amount: number;
}

@Injectable({
	providedIn: 'root'
})
export class CartService {
	data: Product[] = [
		{ id: 0, name: 'Pizza', price: 8.99, amount: 1 },
		{ id: 1, name: 'Pizzota', price: 12.99, amount: 1 }
	];
	private cart = [];
	private cartItemCount = new BehaviorSubject(0);

	getProducts() {
		return this.data;
	}
	getCart() {
		return this.cart;
	}
	getCartItemCount() {
		return this.cartItemCount;
	}
	addProduct(product) {}
	decreaseProduct(product) {}
	removeProduct(product) {}
	constructor() {}
}
