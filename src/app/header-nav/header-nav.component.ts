import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainService} from '../services/main.service'
import {ApiService} from '../services/api.service'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  query:string;

  searchFlag:boolean = false;

  selectName:string = "Select Your Country";

  selectNameChange(selectedCountry:string){
    this.selectName = "Watching Newspapers From" + " " + selectedCountry ;
  }

 

  constructor(public _routeActive : ActivatedRoute, public _apiService : ApiService  ,public _mainService : MainService) {
    this.getDate()
    
   }

  date:string;

  getDate(){
    let date = new Date()
   this.date = date.toDateString()
   
  }

  ngOnInit() {
  }

}
