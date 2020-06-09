import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: [ './folder.page.scss' ]
})
export class FolderPage implements OnInit {
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

	public folder: string;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');
	}
}
