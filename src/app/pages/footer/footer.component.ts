import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  otherContacts:string[]=[
    "assets/images/footer/helpers.png",
    "assets/images/footer/blide.png",
    "assets/images/footer/feathers.jpeg",
    "assets/images/footer/ocean-village.png",
    "assets/images/footer/rayvn.png",
    "assets/images/footer/ukrainfo.png",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
