import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

import { ToastController } from '@ionic/angular';
import { User, Session, Producto, ProductoCarr, Pedido, DetallePedido, PedidoC} from '../../services/classes';
import { MySQLApiService } from '../../services/my-sql-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  pedidos: PedidoC[];

  constructor(
    public toastController: ToastController,
    private storageSer: StorageService,
    private mySql: MySQLApiService
  ) { }

  usuario: User;

  ngOnInit(){
    this.usuario = this.storageSer.getCurrentUser();
    this.verPedidos();
  }
  
  ionViewWillEnter() {
    this.usuario = this.storageSer.getCurrentUser();
    this.verPedidos();
  }


  async presentToast(text: string, color: string = "primary") {
    const toast = await this.toastController.create({
      color: color,
      message: text,
      duration: 1500
    });
    toast.present();
  }

  logout() {
    this.presentToast("Cerrando sesión", "danger");
    this.storageSer.logout();
  }

  verPedidos() {
    this.mySql.pedidoC(this.storageSer.getCurrentSession().user.userId).subscribe((response: PedidoC[]) => {
      //console.log(response);
      this.pedidos = response;
    });
  }

}
