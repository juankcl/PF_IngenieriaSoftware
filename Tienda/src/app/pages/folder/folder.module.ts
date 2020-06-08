import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

<<<<<<< HEAD:Tienda/src/app/folder/folder.module.ts
import { ImageViewerComponent } from '../components/image-viewer/image-viewer.component';
import { ListaJuegosComponent } from '../components/lista-juegos/lista-juegos.component';

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, FolderPageRoutingModule ],
	declarations: [ FolderPage, ImageViewerComponent, ListaJuegosComponent ]
=======
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
>>>>>>> a68cf99a83f6ddc32108d49344fef6744b4ccd37:Tienda/src/app/pages/folder/folder.module.ts
})
export class FolderPageModule { }
