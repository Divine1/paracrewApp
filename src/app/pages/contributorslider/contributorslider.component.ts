import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributorslider',
  templateUrl: './contributorslider.component.html',
  styleUrls: ['./contributorslider.component.scss']
})
export class ContributorsliderComponent implements OnInit {
  contributors:any=[
    {
      profilepic : "assets/images/contributors/Jakob.png",
      name : "JAKOB ENGEBAKKEN", 
      jobtitle : "Founder/Member of the board",
      description : "",
      email : "jakob@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/chrisvan.jpeg",
      name : "CHRIS VAN NIJEN", 
      jobtitle : "DUTCH REPRESENTATIVE",
      description : "",
      email : "chris@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/Kristoffer.png",
      name : "KRISTOFFER DEINOFF", 
      jobtitle : "CO-FOUNDER/Member of the board",
      description : "",
      email : "kristoffer@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/rikard.jpeg",
      name : "RIKARD ADAMSON", 
      jobtitle : "SWEDEN REPRESENTATIVE",
      description : "",
      email : "rikard@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/GUILLERMO.png",
      name : "GUILLERMO FERNANDEZ", 
      jobtitle : "CO-FOUNDER/Member of the board",
      description : "",
      email : "guillermo@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/EMILIE.jpeg",
      name : "EMILIE LOG", 
      jobtitle : "NORWAY REPRESENTATIVE",
      description : "",
      email : "emilie@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/Jakob.png",
      name : "JAKOB ENGEBAKKEN", 
      jobtitle : "Founder/Member of the board",
      description : "",
      email : "jakob@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/chrisvan.jpeg",
      name : "CHRIS VAN NIJEN", 
      jobtitle : "DUTCH REPRESENTATIVE",
      description : "",
      email : "chris@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/Kristoffer.png",
      name : "KRISTOFFER DEINOFF", 
      jobtitle : "CO-FOUNDER/Member of the board",
      description : "",
      email : "kristoffer@paracrew.org"
    },
  ]

/*
  contributors:any=[
    {
      profilepic : "assets/images/contributors/Jakob.png",
      name : "JAKOB ENGEBAKKEN", 
      jobtitle : "Founder/Member of the board",
      description : "",
      email : "jakob@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/chrisvan.jpeg",
      name : "CHRIS VAN NIJEN", 
      jobtitle : "DUTCH REPRESENTATIVE",
      description : "",
      email : "chris@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/Kristoffer.png",
      name : "KRISTOFFER DEINOFF", 
      jobtitle : "CO-FOUNDER/Member of the board",
      description : "",
      email : "kristoffer@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/rikard.jpeg",
      name : "RIKARD ADAMSON", 
      jobtitle : "SWEDEN REPRESENTATIVE",
      description : "",
      email : "rikard@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/GUILLERMO.png",
      name : "GUILLERMO FERNANDEZ", 
      jobtitle : "CO-FOUNDER/Member of the board",
      description : "",
      email : "guillermo@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/EMILIE.jpeg",
      name : "EMILIE LOG", 
      jobtitle : "NORWAY REPRESENTATIVE",
      description : "",
      email : "emilie@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/ANGEL_CASAS.jpeg",
      name : "ANGEL CASAS", 
      jobtitle : "US REPRESENTATIVE",
      description :"OPERATION SHELTER UKRAINE",
      email : "angel@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/ANNA_ELSBERND.jpeg",
      name : "ANNA ELSBERND", 
      jobtitle : "GERMANY REPRESENTATIVE",
      description :"OPERATION SHELTER UKRAINE",
      email : "anna@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/TOMKANE.jpeg",
      name : "TOM KANE", 
      jobtitle : "UK REPRESENTATIVE",
      description :"OPERATION SHELTER UKRAINE",
      email : "tom@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/KELLY_KUHLMEYER.jpeg",
      name : "KELLY KUHLMEYER", 
      jobtitle : "US/NOR REPRESENTATIVE",
      description :"OPERATION SHELTER UKRAINE",
      email : "kellykuhlmeyer@paracrew.org"
    },
    {
      profilepic : "assets/images/contributors/JOELakaLANCASTER.jpeg",
      name : "JOEL aka LANCASTER", 
      jobtitle : "UK REPRESENTATIVE",
      description :"OPERATION SHELTER UKRAINE",
      email : "joel@paracrew.org"
    }
  ]
  */
  constructor() { }

  ngOnInit(): void {
  }

}
