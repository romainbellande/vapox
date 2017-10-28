import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../../../../../../common/config';
import { Entity } from '../../../../../../common/interfaces';

@Injectable()
export abstract class ApiService <T extends Entity, Y> {
  private entityUrl: string;

  constructor(protected http: HttpClient, entityEndpoint: string) {
    this.entityUrl = AppConfig.API_URL + entityEndpoint;
  }

  public findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.entityUrl);
  }

  public findById(entityId: string): Observable<T> {
    return this.http.get<T>(this.entityUrl + '/' + entityId);
  }

  public post(entity: Y): Observable<T> {
    return this.http.post<T>(this.entityUrl, entity);
  }

  public update(entity: T): Observable<T> {
    return this.http.put<T>(this.entityUrl + '/' + entity._id, entity);
  }

  public remove(entity: T): Observable<T> {
    return this.http.delete<T>(this.entityUrl + '/' + entity._id);
  }
}
