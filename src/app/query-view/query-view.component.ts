import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainService} from '../services/main.service'

import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.css']
})
export class QueryViewComponent implements OnInit {

  constructor(public _routeActive : ActivatedRoute, public _apiService : ApiService  ,public _mainService : MainService) { }

  wordParam:string;

  ngOnInit() {
    this._routeActive.paramMap.subscribe( (params)=> {
      this.wordParam = params.get("word");
      this._mainService.SearchByQuery(this.wordParam)
      
    });
  }

}
