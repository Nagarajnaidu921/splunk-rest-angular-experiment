import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'sessionID';
  constructor() { }
  set token(token) {
    const time = new Date().getTime().toString();
    sessionStorage.setItem('expiry', time)
    sessionStorage.setItem(this.tokenKey, token);
  }
  get token() {
    return sessionStorage.getItem(this.tokenKey);
  }

  get isTokenExpired() {
    const expiry = Number(sessionStorage.getItem('expiry'));
    const currentTime = new Date().getTime();
    const diff = ((currentTime - expiry)/1000)/(60*60);
    if (diff > 1) {
      this.reMoveToken();
      return true;
    }
    return false;
  }

  reMoveToken() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem('expiry');
  }
}
