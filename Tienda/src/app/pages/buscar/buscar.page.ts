import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-buscar',
	templateUrl: './buscar.page.html',
	styleUrls: [ './buscar.page.scss' ]
})
export class BuscarPage implements OnInit {
	lista: string[] = [];

	constructor() {
		this.inicializar();
	}
	inicializar() {
		this.lista = [ 'Uno', 'Dos', 'Tres' ];
	}
	ngOnInit() {}
}
