import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './layout/header-navbar/headernavbar.component';
import { LeftNavbarComponent } from './layout/left-navbar/left-navbar.component';
import { RightNavbarComponent } from './layout/right-navbar/right-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    LeftNavbarComponent,
    RightNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
