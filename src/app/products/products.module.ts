import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IcedCoffeeComponent } from './iced-coffee/iced-coffee.component';
import { HotCoffeeComponent } from './hot-coffee/hot-coffee.component';
import { TeaComponent } from './tea/tea.component';
import { DessertsComponent } from './desserts/desserts.component';
import { MenuComponent } from './menu/menu.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    IcedCoffeeComponent,
    HotCoffeeComponent,
    TeaComponent,
    DessertsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatExpansionModule
  ],
  exports: [IcedCoffeeComponent, HotCoffeeComponent, TeaComponent, DessertsComponent]
})
export class ProductsModule { }
