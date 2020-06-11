import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: [ './folder.page.scss' ]
})
export class FolderPage implements OnInit {
	public folder: string;

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

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');
	}
}
