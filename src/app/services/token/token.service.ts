import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'sessionID';
  constructor() { }
  set token(token) {
    sessionStorage.setItem(this.tokenKey, token);
  }
}
