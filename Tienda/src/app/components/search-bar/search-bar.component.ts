import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  constructor(private storageSer: StorageService) { }

  ngOnInit() {}

  buscar (busqueda: string) {
    //console.log(busqueda);
    this.storageSer.buscar(busqueda);
  }

}
