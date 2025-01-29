import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './memberCenter/register/register.component';
import { SignInComponent } from './memberCenter/sign-in/sign-in.component';
import { AdComponent } from './layout/ad/ad.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductRowComponent } from './product/product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    RegisterComponent,
    SignInComponent,
    AdComponent,
    ProductDisplayComponent,
    ProductDetailComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
