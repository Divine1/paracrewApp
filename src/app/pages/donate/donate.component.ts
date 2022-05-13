import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  @ViewChild('dialog')
  dialog:any;
  data:any="my sea data"
  constructor(private dialogService: NbDialogService) {
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
      image:"assets/images/donation/paypal.png",
      url:"https://www.paypal.com/donate/?hosted_button_id=JUWERQW5W8HPL",
      type:"popup",
      classname: "paypal",
      paymentlink : "https://www.paypal.com/donate/?hosted_button_id=JUWERQW5W8HPL",
      qrcode: "https://www.paracrew.org/onewebmedia/PAYPAL_QR%20Code.png"
    },
    {
      image:"assets/images/donation/vippslogo.png",
      url:"",
      type:"popup",
      classname: "VIPPS",
      paymentcode : "#746565",
      qrcode: "https://www.paracrew.org/onewebmedia/vipps-qr.png"
    },
    {
      image:"assets/images/donation/spleis.png",
      url:"https://www.spleis.no/project/219668",
      type:"link",
      classname: "spleis"
    },
  ]

  openDialog(item:any){
    console.log("openDialog item ",item)
    this.dialogService.open(this.dialog, {
      context: {
        title: 'This is a title passed to the dialog component',
        ...item
      },
    });
  }


}
