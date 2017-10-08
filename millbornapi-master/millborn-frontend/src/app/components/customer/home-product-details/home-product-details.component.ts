import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'home-product-details',
  templateUrl: './home-product-details.component.html',
  styleUrls: ['./home-product-details.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css']
})
export class HomeProductDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCart(){
    console.log("clicked");
    this.router.navigate(['/home/productCart']);
  }
}
