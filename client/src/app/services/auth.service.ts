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
    let url = 'http://localhost:5000/api/token';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, user, {headers: headers})
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
    let url = 'http://localhost:5000/api/business-users/me';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url + '?token=' + this.authToken, {headers: headers})
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
