import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Message, Session } from './classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySQLApiService {

  PHP_API_SERVER = "http://localhost:80";

  constructor(private httpClient: HttpClient) { }

  registro(new_user: User): Observable<Message> {
    return this.httpClient.post<Message>(`${this.PHP_API_SERVER}/api/register.php`, new_user);
  }

  login(user: User): Observable<Session> {
    return this.httpClient.post<Session>(`${this.PHP_API_SERVER}/api/login.php`, user);
  }

  // readPolicies(): Observable<Policy[]> {
  //   return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
  // }

  // createPolicy(policy: Policy): Observable<Policy> {
  //   return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  // }

  // updatePolicy(policy: Policy) {
  //   return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/api/update.php`, policy);
  // }

  // deletePolicy(id: number) {
  //   return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  // }
}
