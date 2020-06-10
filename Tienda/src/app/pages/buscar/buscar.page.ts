import { Component, OnInit, ViewChild  } from '@angular/core';
import { ToastController } from '@ionic/angular'
import { User, Session, Producto, Search } from '../../services/classes';

import { StorageService } from '../../services/storage.service';
import { MySQLApiService } from '../../services/my-sql-api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    public toastController: ToastController,
    private storageSer: StorageService,
    private mySql: MySQLApiService
    ) { }

  busqueda: string;
  busq: Search = {id: null, search: null};
  productos: Producto[];
  end: Boolean = false;

  ngOnInit() {
    this.busqueda = this.storageSer.getBusqueda();
  }
  
  ionViewWillEnter() {
    this.busqueda = this.storageSer.getBusqueda();
    this.busq.search = this.busqueda;
    this.busq.id = 0;

    this.end = false;

    //console.log(this.busq);
    this.mySql.search(this.busq).subscribe((response: Producto[]) => {
      this.productos = response;
      //console.log(this.productos);
    });
  }

  ionViewWillLeave(){
    this.productos.splice(0, this.productos.length);
    this.end = false;
  }


  loadData(event) {
    setTimeout(() => {
      //console.log('Done');
      this.search();
      event.target.complete();
      if (this.end == true) {
        event.target.disabled = true;
      }
    }, 500);
  }

  search() {
    this.busq.id = Number(this.productos[this.productos.length - 1].id) + 1.0;
    this.mySql.search(this.busq).subscribe((response: Producto[]) => {
      if (response != null) {
        this.productos = this.productos.concat(response);
      } else {
        this.end = true;
      }

    });
  }

  agregarCarrito(i: number) {
    this.storageSer.agregarCarrito(this.productos[i]);
  }

}
