import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../../../../../../common/config';
import { Base, BaseCreate, BaseEndpoint } from '../../../../../../common/entities/base';
import { ApiService } from '../api/api.service';

@Injectable()
export class BaseService extends ApiService<Base, BaseCreate> {
  constructor(protected http: HttpClient) {
    super(http, '/users/' + BaseEndpoint.get);
  }
}
