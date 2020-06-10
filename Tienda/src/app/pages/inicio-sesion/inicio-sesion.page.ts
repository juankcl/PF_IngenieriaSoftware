import { Component, OnInit } from '@angular/core';
import { User, Session } from '../../services/classes';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { MySQLApiService } from '../../services/my-sql-api.service';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  inicioUser: User = { userId: null, username: null, password: null };

  constructor(
    public toastController: ToastController,
    private registerSQL: MySQLApiService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  async presentToast(text: string, color: string = "primary") {
    const toast = await this.toastController.create({
      color: color,
      message: text,
      duration: 1500
    });
    toast.present();
  }

  login(form: NgForm) {
    if (form.valid) {
      //console.log(form.value);
      this.registerSQL.login(form.value).subscribe((response: Session) => {
        //console.log(response);
        if (response.valid == true) {
          this.presentToast("Sesión iniciada correctamente", "success");
          if (response.admin == true) {
            this.presentToast("Hola admin...", "success");
          }
          this.storageService.setCurrentSession(response);
        } else {
          this.presentToast("Usuario o contraseña incorrecta", "danger");
        }
      });
    } else {
      this.presentToast("Datos no válidos", "danger");
    }
  }

}
