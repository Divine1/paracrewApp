import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  isVisible = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  donatationCompanies:any=[
    {
      image:"assets/images/donation/gofundme.png",
      url:"https://www.gofundme.com/f/paracrew-helping-victims-in-ukraine?utm_campaign=p_lico+share-sheet&utm_medium=copy_link&utm_source=customer",
      type:"link",
      classname: "gofundme"
    },
    {
      image:"assets/images/donation/dnb.png",
      url:"",
      type:"popup",
      classname: "dnb"
    },
    {
      image:"assets/images/donation/spleis.png",
      url:"https://www.spleis.no/project/219668",
      type:"link",
      classname: "spleis"
    },
    {
      image:"assets/images/donation/paypal.png",
      url:"https://www.paypal.com/donate/?hosted_button_id=JUWERQW5W8HPL",
      type:"popup",
      classname: "paypal",
    },
    {
      image:"assets/images/donation/VIPPS.jpeg",
      url:"",
      type:"popup",
      classname: "VIPPS",
    },
  ]

  openDialog(item:any){

  }
}
