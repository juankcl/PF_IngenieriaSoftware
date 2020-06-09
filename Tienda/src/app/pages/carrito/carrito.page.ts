import { Component, OnInit } from '@angular/core';

import { Producto, ProductoCarr } from '../../services/classes';
import { StorageService } from '../../services/storage.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(private storageSer: StorageService) { }

  productosCarrito: ProductoCarr [];

  total: number;

  ngOnInit() {
    this.productosCarrito = this.storageSer.getCarrito();
  }

  ionViewWillEnter() {
    this.total = 0;
    this.productosCarrito = this.storageSer.getCarrito();
    
    // Poner el valor de la cantidad y calcular el total 
    for (let index = 0; index < this.productosCarrito.length; index++) {
      document.getElementById('num' + index).setAttribute("value", String(this.productosCarrito[index].cantidad));
      this.total += Number(this.productosCarrito[index].producto.precio) * Number(this.productosCarrito[index].cantidad);
    }
    this.productosCarrito.forEach(element => {
      document.getElementById
    });
    this.total = Number(this.total.toFixed(2));
  }

  onClick () {
    console.log(this.storageSer.getCarrito());
    this.productosCarrito = this.storageSer.getCarrito();
  }

  eliminarCarrito(id: number) {
    this.storageSer.eliminarDeCarrito(id);
    this.productosCarrito = this.storageSer.getCarrito();
    this.recalcularTotal();
  }

  cambiarCant(value: number, id: number, num: any) {
    if (Number(value) > 0 && Number(value) < 10) {
      this.productosCarrito[id].cantidad = Number(value);
      this.storageSer.modificarCarrito(id, this.productosCarrito[id]);
    } else {
      document.getElementById('num' + id).setAttribute("value","1");
    }
    this.recalcularTotal();
  }

  numberOnlyValidation(event: any) {
    const pattern = /[1-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  recalcularTotal(){
    this.total = 0;
    this.productosCarrito.forEach(element => {
      this.total += Number(element.cantidad) * Number(element.producto.precio);
    });
    this.total = Number(this.total.toFixed(2));
  }

}
