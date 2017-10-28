import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public _token: string;
  constructor() { }

  set token(token: string){
    this._token = token;
    console.log('token', token);
    localStorage.setItem('token', token);
  }

  get token(): string {
    if (!this._token) {
      this._token = localStorage.getItem('token');
    }
    return this._token;
  }
}
