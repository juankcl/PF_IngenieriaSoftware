import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Message, Session, Producto, Search, Pedido, DetallePedido, PedidoC } from './classes';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MySQLApiService {
	PHP_API_SERVER = 'http://losfroger.sytes.net/api/computo';

	constructor(private httpClient: HttpClient) {}

	registro(new_user: User): Observable<Message> {
		return this.httpClient.post<Message>(`${this.PHP_API_SERVER}/register.php`, new_user);
	}

	login(user: User): Observable<Session> {
		return this.httpClient.post<Session>(`${this.PHP_API_SERVER}/login.php`, user);
	}

	search(search: Search): Observable<Producto[]> {
		return this.httpClient.post<Producto[]>(`${this.PHP_API_SERVER}/search.php`, search);
	}

	random(): Observable<Producto[]> {
		return this.httpClient.post<Producto[]>(`${this.PHP_API_SERVER}/random.php`, 'random');
	}

	pedido(pedido: Pedido): Observable<number> {
		return this.httpClient.post<number>(`${this.PHP_API_SERVER}/pedido.php`, pedido);
	}

	detallePedido(dPedido: DetallePedido): Observable<number> {
		return this.httpClient.post<number>(`${this.PHP_API_SERVER}/detalle_pedido.php`, dPedido);
	}

	pedidoC(id: number): Observable<PedidoC[]> {
		let aux = new Pedido();
		aux.user_id = id;

		return this.httpClient.post<PedidoC[]>(`${this.PHP_API_SERVER}/get_pedidos.php`, aux);
	}
}
