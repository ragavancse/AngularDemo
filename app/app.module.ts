import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-ng2/main';
import { AppComponent }  from './app.component';
import {CountryService} from "./CountryService";
import {HttpModule,JsonpModule} from '@angular/http';


@NgModule({
    imports:      [ BrowserModule,HttpModule, AgGridModule.forRoot() ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ CountryService ]
})
export class AppModule { }
