import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    FaqsComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
