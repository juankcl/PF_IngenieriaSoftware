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
			precio: 32
		},
		{
			titulo: 'Gato',
			color: '#999',
			precio: 12
		}
	];

	public folder: string;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');
	}
}
