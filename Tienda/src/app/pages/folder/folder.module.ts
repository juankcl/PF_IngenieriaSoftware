import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { ComponentsModule } from '../../components/components.module';
import {ImageViewerComponent} from '../../components/image-viewer/image-viewer.component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, FolderPageRoutingModule ],
	declarations: [FolderPage, ImageViewerComponent ]
})
export class FolderPageModule {}
