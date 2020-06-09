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

	constructor(
		private storageSer: StorageService,
		private mySql: MySQLApiService
	) { }

	ngOnInit() { 
		this.mySql.random().subscribe((response: Producto[]) => {
			this.productos = response;
			console.log(this.productos);
		});
	}


	ionViewWillEnter() {
		this.mySql.random().subscribe((response: Producto[]) => {
			this.productos = response;
			console.log(this.productos);
		});
	}

	agregarCarrito(i: number) {
		this.storageSer.agregarCarrito(this.productos[i]);
	}
}
