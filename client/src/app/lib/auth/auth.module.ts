import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services';
import { TokenInterceptor, JwtInterceptor } from './interceptors';

@NgModule({
  declarations: [],
  imports: [RouterModule],
  exports: [],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      deps: [AuthService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
      deps: [Router, AuthService]
    }
  ],
})
export class AuthModule {}
