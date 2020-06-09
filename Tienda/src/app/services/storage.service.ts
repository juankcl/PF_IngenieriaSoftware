import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Session, User, Producto, ProductoCarr } from './classes';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession: Session = null;
  private busqueda: string = null;
  private carrito: ProductoCarr[] = null;

  constructor(
    public toastController: ToastController,
    private router: Router
  ) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
    this.carrito = this.loadCarritoData();
  }

  updateCarrito() {
    this.localStorageService.setItem('carrito', JSON.stringify(this.carrito));
  }

  agregarCarrito(producto: Producto) {
    
    if (this.currentSession == null) {
      this.presentToast("Necesita iniciar sesión para poder agregar productos a su carrito de compras", "danger");
      return;
    }

    let aux = new ProductoCarr;
    aux.producto = producto;
    aux.cantidad = 1;

    if (this.carrito == null) {
      this.carrito = [aux];
    } else {
      let exit = false;
      this.carrito.forEach(element => {
        if (element.producto.id == producto.id) {
          if (element.cantidad < 8) {
            this.presentToast("Producto agregado al carrito", "success");
            element.cantidad++;
            this.updateCarrito();
          } else {
            this.presentToast("Número máximo de un solo producto alcanzado", "danger");
          }
          exit = true;
        }
      });
      if (exit) {
        return;
      }
      this.carrito.push(aux);
    }
    this.presentToast("Producto agregado al carrito", "success");
    this.updateCarrito();
  }

  getCarrito() {
    return this.carrito;
  }

  modificarCarrito(id: number, producto: ProductoCarr) {
    this.carrito[id] = producto;
    this.updateCarrito();
  }

  eliminarDeCarrito(id: number) {
    if (id > -1) {
      this.carrito.splice(id, 1);
      this.updateCarrito();
    }
  }

  clearCarrito() {
    this.localStorageService.removeItem('carrito');
    this.carrito = null;
  }

  buscar(search: string) {
    this.busqueda = search;
    this.router.navigateByUrl('/buscar');
  }

  getBusqueda(): string {
    return this.busqueda;
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
    this.router.navigate(['/']);
  }

  loadSessionData(): Session {
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session>JSON.parse(sessionStr) : null;
  }

  loadCarritoData(): ProductoCarr[] {
    var carritoStr = this.localStorageService.getItem('carrito');
    return (carritoStr) ? <ProductoCarr[]>JSON.parse(carritoStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
    this.localStorageService.removeItem('carrito');
    this.carrito = null;
  }

  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    var session: Session = this.getCurrentSession();
    return (session.valid != null) ? true : false;
  };

  logout(): void {
    this.removeCurrentSession();
    this.router.navigateByUrl('/');
  }

  async presentToast(text: string, color: string = "primary") {
    const toast = await this.toastController.create({
      color: color,
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
