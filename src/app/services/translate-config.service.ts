import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translateService : TranslateService) {
    // default language is en
    let chosenLanguage = localStorage.getItem("chosenLanguage");
    if(chosenLanguage){
      this.translateService.use(chosenLanguage);
    }
    else{
      this.translateService.use('en');
    }
    
   }
   changeLanguage(type: string){
    localStorage.setItem("chosenLanguage",type);
     this.translateService.use(type);
   }

   getLanguage(){
     
   }
}
