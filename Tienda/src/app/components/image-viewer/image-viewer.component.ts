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
			nombre: 'Red Dead Redemption 2',
			descripcion: 'Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era.',
			precio: 19999,
			imagenUrl: 'http://images.pushsquare.com/8d4d27382066d/red-dead-redemption-2-bully-reference.original.jpg'
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
			nombre: 'DOOM Eternal',
			descripcion: 'Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones para detener la destrucción definitiva de la humanidad. No le tienen miedo a nada... salvo a ti.',
			precio: 19999,
			imagenUrl: 'https://media.playstation.com/is/image/SCEA/doom-eternal-gateway-arena-screen-01-ps4-us-15jul19?$native_nt$'
		};
		this.productos.push(this.aux);

		this.aux = {
			id: 0,
			nombre: 'Monster Hunter: World',
			descripcion: '¡Bienvenidos a un nuevo mundo! En Monster Hunter: World, la última entrega de la serie, podrás disfrutar de la mejor experiencia de juego, usando todos los recursos a tu alcance para acechar monstruos en un nuevo mundo rebosante de emociones y sorpresas.',
			precio: 19999,
			imagenUrl: 'https://ramenparados.com/wp-content/uploads/2018/06/Monster-Hunter-World-106.jpg'
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
