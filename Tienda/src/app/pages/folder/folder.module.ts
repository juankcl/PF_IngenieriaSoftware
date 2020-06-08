import { CartService } from './../../services/cart.service';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { ComponentsModule } from '../../components/components.module';
import { BehaviorSubject } from 'rxjs';

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, ComponentsModule, FolderPageRoutingModule ],
	declarations: [ FolderPage ]
})
export class FolderPageModule implements OnInit {
	cart = [];
	products = [];
	cartItemCount: BehaviorSubject<number>;

	constructor(private cartService: CartService, private modalCtrl: ModalController) {}
	ngOnInit(): void {
		this.products = this.cartService.getProducts();
		this.cart = this.cartService.getCart();
		this.cartItemCount = this.cartService.getCartItemCount();
		throw new Error('Method not implemented.');
	}

	addToCart(product) {}
	openCart() {}
}
