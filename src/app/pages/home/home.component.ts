import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  otherContacts:string[]=[
    "assets/images/footer/helpers.png",
    "assets/images/footer/ocean-village.png",
    "assets/images/footer/blide.png",
    "assets/images/footer/feathers.jpeg",
    "assets/images/footer/rayvn.png",
    "assets/images/footer/ukrainfo.png",
    
  ]
  
  constructor(private translateConfigService : TranslateConfigService) { }

  ngOnInit(): void {
    
  }
  clickDonate(){
    
  }

}
