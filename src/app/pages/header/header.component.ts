import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

interface ILanguage{
  code:string;
  title:string;
  style:string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages:ILanguage[]=[
    {code:"en",title:"English (EN)",style:"success"},
    {code:"es",title:"Spanish (ES)",style:"basic"},
    {code:"no",title:"Norway (NO)",style:"basic"},
    {code:"ua",title:"Ukraine (UA)",style:"basic"}
  ];
  selectedLanguage:string;

  ngOnInit(): void {
    
  }
  constructor(private translateConfigService : TranslateConfigService) {
    
    let chosenLanguage = localStorage.getItem("chosenLanguage");
    if(chosenLanguage){
      this.selectedLanguage = chosenLanguage;
    }
    else{
      this.selectedLanguage = 'en';
    }
   }

  changeLanguage(event: any){
    let type = event.target.value;
    console.log("changeLanguage type ",type)
    this.selectedLanguage = type;
   this.translateConfigService.changeLanguage(type);
  }
}
