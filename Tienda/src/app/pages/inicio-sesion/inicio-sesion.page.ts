import { Component, OnInit } from '@angular/core';
import { User, Message } from '../../services/classes';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { MySQLApiService } from '../../services/my-sql-api.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  inicioUser: User = { id: null, username: null, password: null, password2: null };

  constructor(
    public toastController: ToastController,
    private registerSQL: MySQLApiService
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.value);
  }

}
