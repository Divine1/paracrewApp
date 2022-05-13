import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  array = [1, 2, 3, 4];

  sliderImages:string[]=[
    
    "assets/images/volunteer1.jpeg",
    "assets/images/volunteer2.jpeg",
    "assets/images/volunteer3.jpeg",
    "assets/images/volunteer4_large.jpeg",
    "assets/images/reliefcamp.png",
    "assets/images/reliefcampfood.png",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
