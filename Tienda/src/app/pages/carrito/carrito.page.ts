import { Component, OnInit } from '@angular/core';

import { Producto, ProductoCarr, Pedido, DetallePedido, PedidoC } from '../../services/classes';
import { StorageService } from '../../services/storage.service';
import { MySQLApiService } from '../../services/my-sql-api.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(
    private storageSer: StorageService,
    private mySql: MySQLApiService
  ) { }

  productosCarrito: ProductoCarr [];

  total: number;

  ngOnInit() {
    this.productosCarrito = this.storageSer.getCarrito();
    if (this.productosCarrito != null){
      this.recalcularTotal();

    }
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
    //console.log(this.storageSer.getCarrito());
    this.productosCarrito = this.storageSer.getCarrito();
  }

  eliminarCarrito(id: number) {
    this.storageSer.eliminarDeCarrito(id);
    this.productosCarrito = this.storageSer.getCarrito();
    this.recalcularTotal();
  }

  cambiarCant(value: any, id: number, num: any) {
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

  hacerPedido() {
    if (this.productosCarrito != null)
    {
      if (this.productosCarrito.length > 0) {
        
        let pedido = new Pedido;
        pedido.user_id = this.storageSer.getCurrentSession().user.userId;
        pedido.total = this.total;

        ////console.log(pedido);

        // Hacer registro en pedido
        this.mySql.pedido(pedido).subscribe((response: number) => {
          let id = response;
          
          // Hacer registros de detalles
          this.productosCarrito.forEach(element => {
            let dPedido = new DetallePedido;
            dPedido.pedido_id = id;
            dPedido.producto_id = element.producto.id;
            dPedido.cantidad = element.cantidad;

            ////console.log(dPedido);

            this.mySql.detallePedido(dPedido).subscribe((response: number) => { });
          });
          this.storageSer.clearCarrito();
          this.productosCarrito = null;
          this.total = 0;
          this.storageSer.presentToast("Pedido realizado con éxito!", "success");

        });

        
        return;
      }
    }
    //console.log(this.productosCarrito);
    this.storageSer.presentToast("No hay productos en el carrito", "danger");
  }

}
