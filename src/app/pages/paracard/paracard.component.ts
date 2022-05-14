import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paracard',
  templateUrl: './paracard.component.html',
  styleUrls: ['./paracard.component.scss']
})
export class ParacardComponent implements OnInit {


  @Input("title")
  cardTitle:string|null= null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
