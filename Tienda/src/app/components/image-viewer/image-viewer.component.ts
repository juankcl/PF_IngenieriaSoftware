import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Producto } from '../../services/classes';

import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {

	@ViewChild('image', { read: ElementRef, static: true })
	image: ElementRef;

	index: number = 0;

	productoMostrar: Producto;

	aux: Producto;
	productos: Producto[] = [
		{
			id: 0,
			nombre: 'Nier Automata',
			descripcion: 'Super desc1',
			precio: 19999,
			imagenUrl: 'https://cdn3.dualshockers.com/wp-content/uploads/2018/12/NieR.jpg'
		}
	];

	constructor(private animationCtrl: AnimationController) { }

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
			.fromTo('src', this.productoMostrar.imagenUrl, this.productos[this.index].imagenUrl)
			.duration(150);

		const fadein = this.animationCtrl
			.create()
			.addElement(this.image.nativeElement)
			.duration(300)
			.fromTo('opacity', 0, 1);

		await fadeout.play();
		this.productoMostrar = this.productos[this.index];
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
			nombre: 'Nier Automata',
			descripcion: 'Super desc1',
			precio: 19999,
			imagenUrl: 'https://cdn3.dualshockers.com/wp-content/uploads/2018/12/NieR.jpg'
		};
		this.productos.push(this.aux);

		this.aux = {
			id: 0,
			nombre: 'Nier Automata',
			descripcion: 'Super desc1',
			precio: 19999,
			imagenUrl: 'https://cdn3.dualshockers.com/wp-content/uploads/2018/12/NieR.jpg'
		};
		this.productos.push(this.aux);

		this.productoMostrar = this.productos[this.index];
	}

	siguienteJuego() {
		this.index++;
		if (this.index > this.productos.length - 1) {
			this.index = 0;
		}

		this.animation();
	}

	anteriorJuego() {
		this.index--;
		if (this.index < 0) {
			this.index = this.productos.length - 1;
		}

		this.animation();
	}

}
