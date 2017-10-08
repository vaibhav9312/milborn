import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles:[
   ' @import "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700";@import "https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800";@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900";'
  ],
  styleUrls: [
    './checkout.component.css',
'../../../../assets/frontweb/css/bootstrap.min.css',
'../../../../assets/frontweb/css/main.css',
'../../../../assets/frontweb/css/blue.css',
'../../../../assets/frontweb/css/simple-line-icons.css',
'../../../../assets/frontweb/css/owl.carousel.css',
'../../../../assets/frontweb/css/owl.transitions.css',
'../../../../assets/frontweb/css/animate.min.css',
'../../../../assets/frontweb/css/rateit.css',
'../../../../assets/frontweb/css/bootstrap-select.min.css',
'../../../../assets/frontweb/css/font-awesome.css'
]
})
export class CheckoutComponent implements OnInit {

  constructor() { 
    console.log("inside construtor");
  }

  ngOnInit() {
    console.log("inside condtutotr");
  }

}
