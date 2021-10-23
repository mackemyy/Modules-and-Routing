import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertsComponent } from './desserts/desserts.component';
import { HotCoffeeComponent } from './hot-coffee/hot-coffee.component';
import { IcedCoffeeComponent } from './iced-coffee/iced-coffee.component';
import { MenuComponent } from './menu/menu.component';
import { TeaComponent } from './tea/tea.component';

const routes: Routes = [
  {
  path: 'products', component: MenuComponent, 
  children: [
      { path: 'iced-coffee', component: IcedCoffeeComponent },
      { path: 'hot-coffee', component: HotCoffeeComponent },
      { path: 'tea', component: TeaComponent },
      { path: 'desserts', component: DessertsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
