import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { datosJuego } from '../datosJuego';

import { AnimationController } from '@ionic/angular';

@Component({
	selector: 'app-image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: [ './image-viewer.component.scss' ]
})
export class ImageViewerComponent implements OnInit {
	@ViewChild('image', { read: ElementRef, static: true })
	image: ElementRef;

	index: number = 0;

	juegoMostrar: datosJuego;

	aux: datosJuego;
	juegos: datosJuego[] = [
		{
			id: 0,
			titulo: 'Nier Automata',
			desc: 'Super desc1',
			imagen: 'https://cdn3.dualshockers.com/wp-content/uploads/2018/12/NieR.jpg',
			precio: 999.99
		}
	];

	constructor(private animationCtrl: AnimationController) {}

	// Animacion cambio de imágenes
	async animation() {
		const fadeout = this.animationCtrl
			.create()
			.addElement(this.image.nativeElement)
			.duration(300)
			.fromTo('opacity', 1, 0);

		const delay = this.animationCtrl
			.create()
			.addElement(this.image.nativeElement)
			.fromTo('src', this.juegoMostrar.imagen, this.juegos[this.index].imagen)
			.duration(150);

		const fadein = this.animationCtrl
			.create()
			.addElement(this.image.nativeElement)
			.duration(300)
			.fromTo('opacity', 0, 1);

		await fadeout.play();
		this.juegoMostrar = this.juegos[this.index];
		await delay.play();
		await fadein.play();
	}

	ngOnInit() {
		/*
      Por ahora están hard codeados los juegos que se muestran
    */
		/*
      No entendi tu desmadre Puga xD, entonces es un metodo por componente?
    */
		this.aux = {
			id: 1,
			titulo: 'Monster Hunter: World',
			desc: 'Super desc2',
			imagen: 'https://www.cgmagonline.com/wp-content/uploads/2018/08/monster-hunter-world-pc-review.jpg',
			precio: 999.99
		};
		this.juegos.push(this.aux);

		this.aux = {
			id: 2,
			titulo: 'Doom Eternal',
			desc: 'Super desc3',
			imagen: 'https://i.ytimg.com/vi/NA8tzzWcibk/maxresdefault.jpg',
			precio: 999.99
		};
		this.juegos.push(this.aux);

		this.juegoMostrar = this.juegos[this.index];
	}

	siguienteJuego() {
		this.index++;
		if (this.index > this.juegos.length - 1) {
			this.index = 0;
		}

		this.animation();
	}

	anteriorJuego() {
		this.index--;
		if (this.index < 0) {
			this.index = this.juegos.length - 1;
		}

		this.animation();
	}
}
