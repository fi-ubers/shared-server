import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  jwtHelper: JwtHelper = new JwtHelper();
  
  constructor(private http:Http) { }
  
  authenticateUser(user) {
    //let uri = 'api/token';
    let uri = 'http://localhost:5000/api/token';
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
  
  roleLoggedIn(role) {
    const roles = localStorage.getItem('user_roles');
    if (!roles) {
      return false;
    }
    return this.loggedIn && roles.includes(role);
  }
  
  registerUser(user) {
    //let uri = 'api/business-users/';
    let uri = 'http://localhost:5000/api/business-users/';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, user, {headers: headers})
      .map(res => res.json());
  }
  
  getProfile() {
    //let uri = 'api/business-users/me';
    let uri = 'http://localhost:5000/api/business-users/me';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getBusinessUsersList() {
    //let uri = 'api/business-users/';
    let uri = 'http://localhost:5000/api/business-users/';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user_roles', this.jwtHelper.decodeToken(token).roles);
    this.authToken = token;
    this.user = user;
  }
  
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
