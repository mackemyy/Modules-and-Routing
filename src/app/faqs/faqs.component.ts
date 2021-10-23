import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  title="Frequently Asked Questions";
  company="Coffee Enthusiast";
  
  constructor() { }

  ngOnInit(): void {
  }

}
