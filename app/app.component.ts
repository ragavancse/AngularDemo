import { Component } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {CountryService} from "./CountryService";
import { Country, CountryData } from "./Country";
import { Observable } from "rxjs/Observable";
@Component({
   selector: 'my-app',
    template: `
        <ag-grid-ng2 style="width: 100%; margin-left: 10%" #agGrid class="ag-material"
                    rowHeight="50" rowWidth="100" [gridOptions]="myGridOptions">
            </ag-grid-ng2>
      <table class="pure-table pure-table-bordered">
      <tr>
            <th>Name</th>
            <th>Code1</th>
                  <th>Code2</th>

      </tr>
      
      <tr *ngFor="let d of data1 | async">
            <td>{{  d.name }}</td>
            <td>{{ d.alpha2_code}}</td>
                  <td>{{ d.alpha3_code}}</td>

      </tr>
      </table>
        `,
        providers:[CountryService]
})
export class AppComponent {
   private myGridOptions: GridOptions = <GridOptions>{};
      private myGridOptions2: GridOptions = <GridOptions>{};

   private data1: Observable<CountryData>;
   constructor(private appService: CountryService){
      this.data1 = this.appService.getUser();
      let data = this.appService.getDate();
      this.myGridOptions.rowData = data;
      this.myGridOptions.columnDefs = this.createColumnDefs(data[0]);
    this.myGridOptions.enableSorting = true;

      let data3 =this.appService.GetCountries();
            this.myGridOptions2.rowData = this.appService.GetCountries();
      this.myGridOptions2.columnDefs = this.createColumnDefs(data[0]);

   }

  

   private createColumnDefs(friends: Country) {
      let keyNames = Object.keys(friends);
      let headers = [];
      keyNames.map(key => {
         headers.push({
            headerName: key.toUpperCase(),
            field: key,
            width: 100
         })
      });

      return headers;
   }

}

