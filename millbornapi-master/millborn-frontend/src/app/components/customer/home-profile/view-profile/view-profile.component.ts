import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientManagementService } from '../../../../services/client-management.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styles:[
    ' @import "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700";@import "https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800";@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900";' 
   ],
   styleUrls:[
    './view-profile.component.css',
    '../../../../../assets/frontweb/css/bootstrap.min.css'
  ]
})
export class ViewProfileComponent implements OnInit {
  clientreg: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
