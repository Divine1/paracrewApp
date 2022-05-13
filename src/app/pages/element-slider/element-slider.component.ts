import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-slider',
  templateUrl: './element-slider.component.html',
  styleUrls: ['./element-slider.component.scss']
})
export class ElementSliderComponent implements OnInit {

  sliderImages:string[]=[
    "assets/images/reliefcamp.png",
    "assets/images/reliefcampfood.png",
    "assets/images/volunteer1.jpeg",
    "assets/images/volunteer2.jpeg",
    "assets/images/volunteer3.jpeg",
    "assets/images/volunteer4_large.jpeg",
    "assets/images/reliefcamp.png",
    "assets/images/reliefcampfood.png",
    "assets/images/volunteer1.jpeg",
    "assets/images/volunteer2.jpeg",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
