import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { ImageViewerComponent } from '../components/image-viewer/image-viewer.component';
import { ListaJuegosComponent } from '../components/lista-juegos/lista-juegos.component';

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, FolderPageRoutingModule ],
	declarations: [ FolderPage, ImageViewerComponent, ListaJuegosComponent ]
})
export class FolderPageModule {}
