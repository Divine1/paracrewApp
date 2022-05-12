import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  array = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
