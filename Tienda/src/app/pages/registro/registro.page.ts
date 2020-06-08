import { Component, OnInit } from '@angular/core';
import { User,Message } from '../../services/classes';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { MySQLApiService } from '../../services/my-sql-api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUser: User = { id: null, username: null, password: null };

  password2: string = "";

  constructor(
    public toastController: ToastController,
    private registerSQL: MySQLApiService
    ) { }

  ngOnInit() {
  }

  async presentToast(text: string, color: string = "primary") {
    const toast = await this.toastController.create({
      color: color,
      message: text,
      duration: 2000
    });
    toast.present();
  }

  createUser(form: NgForm) {
    if (form.valid) {
      if (form.value['password'] == form.value['password2']) {
        //console.log(form.value);
        this.registerSQL.registro(form.value).subscribe((response: Message) =>{
          this.presentToast(response.message, response.type);
        });
      } else {
        this.presentToast("Las contraseñas no coinciden", "danger");
      }
    } else {
      this.presentToast("Datos no válidos", "danger");
    }
  }
}
