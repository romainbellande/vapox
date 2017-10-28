import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../../../../../../common/config';
import { UserCreate, UserConnected } from '../../../../../../common/entities/user';
import { Credentials, Token } from '../../../common/interfaces';
import { AuthService } from '../../../lib/auth/services/index';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  /**
   * Connect the user
   */
  public connect(credentials: Credentials): Observable<Token> {
    return this.http.post<Token>(AppConfig.API_URL + '/auth/token', credentials)
      .do(token => {
        this.authService.token = token.token;
      });
  }

  /**
   * Register a new user
   */
  public register(user: UserCreate): Observable<UserConnected> {
    return this.http.post<UserConnected>(AppConfig.API_URL + '/users', user);
  }
}
