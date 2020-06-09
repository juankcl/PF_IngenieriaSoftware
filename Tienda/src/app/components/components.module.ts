import { NgModule } from '@angular/core';

import { IonicModule  } from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { BotonesBarraComponent } from '../components/botones-barra/botones-barra.component';

@NgModule({
	declarations: [
		SearchBarComponent,
		BotonesBarraComponent
	],
	exports: [
		SearchBarComponent,
		BotonesBarraComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ComponentsModule { }