import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title="Menu";
  subTitle="Drinks";
  iced="Iced Coffees";
  hot="Hot Coffees";
  tea="Tea";
  subTitle2="Food";
  food="Desserts"

  constructor() { }

  ngOnInit(): void {
  }

}
