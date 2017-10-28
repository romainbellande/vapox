import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../../../../../../common/config';
import { Booster, BoosterCreate, BoosterEndpoint } from '../../../../../../common/entities/booster';
import { ApiService } from '../api/api.service';

@Injectable()
export class BoosterService extends ApiService<Booster, BoosterCreate> {
  constructor(http: HttpClient) {
    super(http, '/users/' + BoosterEndpoint.get);
  }
}
