import { Component, OnInit } from '@angular/core';
import { AppRoutingModule} from '../../app-routing.module';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-botones-barra',
  templateUrl: './botones-barra.component.html',
  styleUrls: ['./botones-barra.component.scss'],
})
export class BotonesBarraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  carrito(){
    this.router.navigateByUrl('/carrito');
  }
  
  cuenta(){
    this.router.navigateByUrl('/cuenta');
  }
}
