import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, Session, Producto, Search } from '../../services/classes';
import { StorageService } from '../../services/storage.service';
import { MySQLApiService } from '../../services/my-sql-api.service';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: [ './folder.page.scss' ]
})
export class FolderPage implements OnInit {
	productos: Producto[];

	cosas: Array<any> = [
		{
			titulo: 'Perro',
			color: '#444',
			precio: 32,
			img: '../../../assets/images/perro.jpg'
		},
		{
			titulo: 'Gato',
			color: '#999',
			precio: 12,
			img: '../../../assets/images/gato.jpg'
		},
		{
			titulo: 'Costal Dog Chau 64kg',
			color: '#999',
			precio: 12,
			img: '../../../assets/images/costal.jpg'
		}
	];

	ofertas: Array<any> = [
		{
			titulo: 'Costal Dog Chau 32kg',
			color: '#999',
			precio: 12,
			img: '../../../assets/images/costal.jpg'
		}
	];

	constructor(private storageSer: StorageService, private mySql: MySQLApiService) {}
	// f

	ngOnInit() {
		this.mySql.random().subscribe((response: Producto[]) => {
			this.productos = response;
			//console.log(this.productos);
		});
	}

	ionViewWillEnter() {
		this.mySql.random().subscribe((response: Producto[]) => {
			this.productos = response;
			//console.log(this.productos);
		});
	}

	agregarCarrito(i: number) {
		this.storageSer.agregarCarrito(this.productos[i]);
	}
}
