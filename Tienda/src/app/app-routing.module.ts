import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'folder/',
		pathMatch: 'full'
	},
	{
		path: 'folder/:id',
		loadChildren: () => import('./pages/folder/folder.module').then((m) => m.FolderPageModule)
	},
	{
		path: 'buscar',
		loadChildren: () => import('./pages/buscar/buscar.module').then((m) => m.BuscarPageModule)
	},
	{
		path: 'cuenta',
		loadChildren: () => import('./pages/cuenta/cuenta.module').then((m) => m.CuentaPageModule)
	},
	{
		path: 'carrito',
		loadChildren: () => import('./pages/carrito/carrito.module').then((m) => m.CarritoPageModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
