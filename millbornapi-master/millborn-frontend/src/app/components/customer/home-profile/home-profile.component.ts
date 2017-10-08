import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css']
})
export class HomeProfileComponent implements OnInit {
  titles :String[];

  constructor() {
    
   }

  ngOnInit() {
    this.titles  = ['Mr','Mrs'];
  }

}
