import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  
  constructor(private http:Http) { }
  
  authenticateUser(user) {
    let uri = 'api/token';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri, user, {headers: headers})
      .map(res => res.json());
  }
  
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  
  loggedIn() {
    return tokenNotExpired('id_token');
  }
  
  getProfile() {
    let uri = 'api/business-users/me';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
