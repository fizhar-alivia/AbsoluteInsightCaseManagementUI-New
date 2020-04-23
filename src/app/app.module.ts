import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { ApiInterceptor } from "../app/_interceptors/api.interceptor";

import { AppComponent } from './app.component';
import { BaseComponent } from './modules/base/base.component';
import { SideNavComponent } from './modules/base/common-components/side-nav/side-nav.component';
import { HeaderComponent } from './modules/base/common-components/header/header.component';
import { PageNotFoundComponent } from './modules/base/common-components/error-pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SideNavComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
