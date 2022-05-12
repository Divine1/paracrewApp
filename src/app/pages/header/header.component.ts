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
    {code:"en",title:"English",style:"success"},
    {code:"es",title:"Spanish",style:"basic"},
    {code:"no",title:"Norway",style:"basic"},
    {code:"ua",title:"Ukraine",style:"basic"}
  ];
  ngOnInit(): void {
  }
  constructor(private translateConfigService : TranslateConfigService) { }
  changeLanguage(type: string){
    this.languages = this.languages.map((item)=>{
      if(type == item.code){
        return {
          ...item,
          style : "success"
        }
      }
      else{
        return {
          ...item,
          style : "basic"
        };
      }
    });
    this.translateConfigService.changeLanguage(type);
  }
}
