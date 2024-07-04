import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppErrorHandler } from './app-error.handle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/auth.guard';
import { AuthInterceptor } from './core/auth.interceptor';
import { Router } from '@angular/router';
import { UsuarioService } from './modules/usuario/usuario.service';
import { initializeAppFactory } from './core/inicializador';
import { SegurancaService } from './core/seguranca.service';
import { LoaderInterceptor } from './modules/components/loader/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: APP_INITIALIZER, useFactory: () => initializeAppFactory, multi: true, deps: [Router, HttpClient, UsuarioService, SegurancaService] },
    MatDialog,
    UsuarioService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

