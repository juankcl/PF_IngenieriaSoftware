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
			titulo: 'NierAutomata',
			color: '#444',
			precio: 32,
			img: '../../../assets/images/nier.jpg'
		},
		{
			titulo: 'PlantVSZombie',
			color: '#444',
			precio: 22,
			img: '../../../assets/images/planta.png'
		},
		{
			titulo: 'Call of Duty',
			color: '#444',
			precio: 22,
			img: '../../../assets/images/duty.jpg'
		},
		{
			titulo: 'Sniper 3D',
			color: '#444',
			precio: 22,
			img: '../../../assets/images/snip.jpg'
		},
		{
			titulo: 'GTA 5',
			color: '#444',
			precio: 22,
			img: '../../../assets/images/gta.jpg'
		}
	];

	ofertas: Array<any> = [
		{
			titulo: 'Naruto',
			color: '#999',
			precio: 12,
			img: '../../../assets/images/naruto.jpg'
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
