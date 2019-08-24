import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { ErrorComponent } from './error/error.component';

import {MainService} from './services/main.service'
import {ApiService} from './services/api.service'

import { HttpClientModule, HttpClient} from '@angular/common/http'; 

import {FormsModule} from '@angular/forms';

import {RouterModule , Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { QueryViewComponent } from './query-view/query-view.component';

let appRoutes : Routes = [
  {"path" : "", "component" : MainViewComponent },
  {"path" : "home", "component" : MainViewComponent },
  {"path" : "newspaper/:id", "component" : CategoriesViewComponent},
  {"path" : "query/:word", "component" : QueryViewComponent},
  {"path" : "**", "component" : ErrorComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    MainViewComponent,
    CategoriesViewComponent,
    ErrorComponent,
    FooterComponent,
    QueryViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [MainService,ApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
