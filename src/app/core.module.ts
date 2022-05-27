import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptableService } from './auth/auth-interceptable.service';



@NgModule({
  providers: [
    {
      provide:
      HTTP_INTERCEPTORS,
      useClass: AuthInterceptableService,
      multi: true
    }
  ]
})
export class CoreModule { }
