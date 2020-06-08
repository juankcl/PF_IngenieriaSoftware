import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session, User } from './classes';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession: Session = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
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

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
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
    this.router.navigate(['/login']);
  }
}
