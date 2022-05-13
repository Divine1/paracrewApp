import { Component, OnInit } from '@angular/core';
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

  languageStatus:string='basic';

  languages:ILanguage[]=[
    {code:"en",title:"English (EN)",style:"success"},
    {code:"es",title:"Spanish (ES)",style:"basic"},
    {code:"no",title:"Norway (NO)",style:"basic"},
    {code:"ua",title:"Ukraine (UA)",style:"basic"}
  ];
  selectedLanguage = 'en';

  ngOnInit(): void {
  }
  constructor(private translateConfigService : TranslateConfigService) { }
  changeLanguage(type: string){
    console.log("changeLanguage type ",type)
    this.selectedLanguage = type;
    // this.languages = this.languages.map((item)=>{
    //   if(type == item.code){
    //     return {
    //       ...item,
    //       style : "success"
    //     }
    //   }
    //   else{
    //     return {
    //       ...item,
    //       style : "basic"
    //     };
    //   }
    // });
    this.translateConfigService.changeLanguage(type);
  }
}
