import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Coffee Enthusiast"

  constructor(private router: Router) { }

  goToProducts($myParam: string = ''): void {
    const navigationDetails: string[] = ['/products'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }

}
