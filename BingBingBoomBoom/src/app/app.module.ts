import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './memberCenter/register/register.component';
import { SignInComponent } from './memberCenter/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
