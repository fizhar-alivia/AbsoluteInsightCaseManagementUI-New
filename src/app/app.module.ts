import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
