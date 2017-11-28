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
  
  registerBusinessUser(user) {
    //let uri = 'api/business-users/';
    let uri = 'http://localhost:5000/api/business-users/';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, user, {headers: headers})
      .map(res => res.json());
  }
  
  deleteBusinessUser(id) {
    //let uri = 'api/business-users/' + id;
    let uri = 'http://localhost:5000/api/business-users/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  updateBusinessUser(id, user) {
    //let uri = 'api/business-users/' + id;
    let uri = 'http://localhost:5000/api/business-users/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.put(uri + '?token=' + this.authToken, user, {headers: headers})
      .map(res => res.json());
  }
  
  getBusinessUser(id) {
    //let uri = 'api/business-users/' + id;
    let uri = 'http://localhost:5000/api/business-users/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getUser(id) {
    //let uri = 'api/users/' + id;
    let uri = 'http://localhost:5000/api/users/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  deleteUser(id) {
    //let uri = 'api/users/' + id;
    let uri = 'http://localhost:5000/api/users/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getCar(userId, carId) {
    //let uri = 'api/users/' + userId + '/cars/' + carId;
    let uri = 'http://localhost:5000/api/users/' + userId + '/cars/' + carId;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  deleteCar(userId, carId) {
    //let uri = 'api/users/' + userId + '/cars/' + carId;
    let uri = 'http://localhost:5000/api/users/' + userId + '/cars/' + carId;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(uri + '?token=' + this.authToken, {headers: headers})
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
  
  editMyInformation(user) {
    //let uri = 'api/business-users/me';
    let uri = 'http://localhost:5000/api/business-users/me';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.put(uri + '?token=' + this.authToken, user, {headers: headers})
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
  
  getUsersList() {
    //let uri = 'api/users/';
    let uri = 'http://localhost:5000/api/users/';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getUserCarsList(id) {
    //let uri = 'api/users/' + id + '/cars';
    let uri = 'http://localhost:5000/api/users/' + id + '/cars';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getUserTransactionsList(id) {
    //let uri = 'api/users/' + id + '/transactions';
    let uri = 'http://localhost:5000/api/users/' + id + '/transactions';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getUserTripsList(id) {
    //let uri = 'api/users/' + id + '/trips';
    let uri = 'http://localhost:5000/api/users/' + id + '/trips';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getServersList() {
    //let uri = 'api/servers';
    let uri = 'http://localhost:5000/api/servers';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getServer(id) {
    //let uri = 'api/servers/' + id;
    let uri = 'http://localhost:5000/api/servers/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  registerServer(server) {
    //let uri = 'api/servers/';
    let uri = 'http://localhost:5000/api/servers/';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, server, {headers: headers})
      .map(res => res.json());
  }
  
  updateServer(id, server) {
    //let uri = 'api/servers/' + id;
    let uri = 'http://localhost:5000/api/servers/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.put(uri + '?token=' + this.authToken, server, {headers: headers})
      .map(res => res.json());
  }
  
  deleteServer(id) {
    //let uri = 'api/servers/' + id;
    let uri = 'http://localhost:5000/api/servers/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  resetServerToken(id) {
    //let uri = 'api/servers/' + id;
    let uri = 'http://localhost:5000/api/servers/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getStatistics() {
    //let uri = 'api/statistics/';
    let uri = 'http://localhost:5000/api/statistics/';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri, {headers: headers})
      .map(res => res.json());
  }
  
  getRulesList() {
    //let uri = 'api/rules';
    let uri = 'http://localhost:5000/api/rules';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  createRule(rule) {
    //let uri = 'api/rules/';
    let uri = 'http://localhost:5000/api/rules/';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, rule, {headers: headers})
      .map(res => res.json());
  }
  
  updateRule(id, rule) {
    //let uri = 'api/rules/' + id;
    let uri = 'http://localhost:5000/api/rules/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.put(uri + '?token=' + this.authToken, rule, {headers: headers})
      .map(res => res.json());
  }
  
  deleteRule(id) {
    //let uri = 'api/rules/' + id;
    let uri = 'http://localhost:5000/api/rules/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  runAllRules(data) {
    //let uri = 'api/rules/run';
    let uri = 'http://localhost:5000/api/rules/run';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, data, {headers: headers})
      .map(res => res.json());
  }
  
  runIndividualRule(id, data) {
    //let uri = 'api/rules/' + id +'/run';
    let uri = 'http://localhost:5000/api/rules/' + id +'/run';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri + '?token=' + this.authToken, data, {headers: headers})
      .map(res => res.json());
  }
  
  getRule(id) {
    //let uri = 'api/rules/' + id;
    let uri = 'http://localhost:5000/api/rules/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getCommitsList(id) {
    //let uri = 'api/rules/' + id + '/commits';
    let uri = 'http://localhost:5000/api/rules/' + id + '/commits';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getRuleAtCommit(ruleId, commitId) {
    //let uri = 'api/rules/' + ruleId + '/commits/' + commitId;
    let uri = 'http://localhost:5000/api/rules/' + ruleId + '/commits/' + commitId;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getTripsList() {
    //let uri = 'api/trips';
    let uri = 'http://localhost:5000/api/trips';
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getTrip(id) {
    //let uri = 'api/trips/' + id;
    let uri = 'http://localhost:5000/api/trips/' + id;
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri + '?token=' + this.authToken, {headers: headers})
      .map(res => res.json());
  }
  
  getPaymethodsList() {
    //let uri = 'api/paymethods';
    let uri = 'http://localhost:5000/api/paymethods';
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
  
  updateUserInStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
  
  getUsername() {
    return JSON.parse(localStorage.getItem('user')).username;
  }
  
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
