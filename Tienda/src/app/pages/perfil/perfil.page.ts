import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

import { ToastController } from '@ionic/angular';
import { User, Session} from '../../services/classes';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public toastController: ToastController,
    private storageSer: StorageService
  ) { }

  usuario: User;

  ngOnInit(){
    this.usuario = this.storageSer.getCurrentUser();
  }
  
  ionViewWillEnter() {
    this.usuario = this.storageSer.getCurrentUser();
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

}
