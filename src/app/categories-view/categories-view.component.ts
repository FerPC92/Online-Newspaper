import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainService} from '../services/main.service'

import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

  constructor(public _routeActive : ActivatedRoute, public _apiService : ApiService  ,public _mainService : MainService) {




   }

  

  ngOnInit() {
    this._routeActive.paramMap.subscribe( (params)=> {
      let idSource = params.get("id");
      this._mainService.getNewspaperNews(idSource)
    });
    
  }

}
