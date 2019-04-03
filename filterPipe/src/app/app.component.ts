import { Component } from '@angular/core';
import { FilterPipe }from './filter.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filterPipe';
  
  filter_data = [
      {"id":"1", "title": 'data 1', "title1": 'data 1'},
      {"id":"2","title":'the secret', "title1": 'data 1'},
      {"id":"1","title":'the magic',"title1":'Prisoner of birth' },
      {"id":"4","title":'Prisoner of birth', "title1":'Prisoner of birth'},
      {"id":"5","title":'Alchemy', "title1":'Alchemy'},
      {"id":"6","title":'power', "title1":'power'}
    ]
    forecasts= [];

    filterForeCasts(filterVal: any) {
      if (filterVal == "0"){
        this.forecasts= [];
        this.forecasts= this.filter_data;
      }
      else {
        this.forecasts= [];
        this.filter_data.filter((item) => {
          if(item.id == filterVal)
          {
            this.forecasts.push(item)
          }
         })
      }
  }

  ngOnInit(){
    this.forecasts= this.filter_data;

    }
  
}
