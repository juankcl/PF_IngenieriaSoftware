import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-barra',
  templateUrl: './botones-barra.component.html',
  styleUrls: ['./botones-barra.component.scss'],
})
export class BotonesBarraComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {}

  carrito(){
    this._router.navigateByUrl('/carrito');
  }
  
  cuenta(){
    this._router.navigateByUrl('/cuenta');
  }
}
