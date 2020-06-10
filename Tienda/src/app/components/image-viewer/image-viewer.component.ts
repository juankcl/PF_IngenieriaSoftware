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
			nombre: 'RTX 2080 Ti',
			descripcion: 'Las tarjetas gráficas GeForce RTX están alimentadas por la nueva arquitectura NVIDIA Turing para ofrecerte nuevos niveles increíbles de realismo de juegos, velocidad, eficiencia energética e inmersión.',
			precio: 19999,
			imagenUrl: 'https://media.vandalsports.com/i/2560x1440/9-2018/2018948100_1.jpg'
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
			nombre: 'MSI Gaming Plus AM4',
			descripcion: 'Satisfacer a los jugadores con lo que realmente necesitan, MPG X570 GAMING PLUS está equipado con diseño de disipador térmico extendido, diseño de disipador de calor Frozr, impulso de núcleo, Lightning Gen4 M.2, accesorio M.2 Shield Frozr, Turbo USB y MSI última Dragon Center. ',
			precio: 19999,
			imagenUrl: 'https://storage-asset.msi.com/global/picture/features/MB/Gaming/B450/B450mGamingPlus/b450m-gaming-plus-storage-3840.jpg'
		};
		this.productos.push(this.aux);

		this.aux = {
			id: 0,
			nombre: 'Razer Blade Stealth 13',
			descripcion: 'La nueva Razer Blade es una de las laptops para juegos más pequeñas de 15.6 ", con un equilibrio perfecto entre potencia y portabilidad. Hemos rediseñado la galardonada computadora portátil para ofrecer almacenamiento dual y conectividad Gigabit Ethernet en el chasis de aluminio CNC de precisión.',
			precio: 19999,
			imagenUrl: 'https://www.tec.com.pe/wp-content/uploads/2019/06/razer-blade-15-gallery08.jpg'
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
