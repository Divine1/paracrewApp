import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donationmetrics',
  templateUrl: './donationmetrics.component.html',
  styleUrls: ['./donationmetrics.component.scss']
})
export class DonationmetricsComponent implements OnInit {


  @Input()
  metricslabel:any;

  @Input()
  metricsdescription:any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
