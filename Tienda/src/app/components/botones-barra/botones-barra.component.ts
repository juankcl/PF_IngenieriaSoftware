import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-botones-barra',
  templateUrl: './botones-barra.component.html',
  styleUrls: ['./botones-barra.component.scss'],
})
export class BotonesBarraComponent implements OnInit {

  constructor(
    private _router: Router,
    private storageSer: StorageService
  ) { }

  ngOnInit() { }

  carrito() {
    this._router.navigateByUrl('/carrito');
  }

  cuenta() {
    let session = this.storageSer.getCurrentSession();
    if (session == null) {
      this._router.navigateByUrl('/cuenta');
    } else if (session.valid == true) {
      this._router.navigateByUrl('/perfil');
    }

  }
}
