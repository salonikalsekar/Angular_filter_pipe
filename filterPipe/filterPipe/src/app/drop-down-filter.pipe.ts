import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropDownFilter'
})
export class DropDownFilterPipe implements PipeTransform {
  forecasts= [];
  // filter_data = [
  //     {"id":"1", "title": 'data 1', "title1": 'data 1'},
  //     {"id":"2","title":'the secret', "title1": 'data 1'},
  //     {"id":"3","title":'the magic',"title1":'Prisoner of birth' },
  //     {"id":"4","title":'Prisoner of birth', "title1":'Prisoner of birth'},
  //     {"id":"5","title":'Alchemy', "title1":'Alchemy'},
  //     {"id":"6","title":'power', "title1":'power'}
  //   ]
  transform(items: any[], filterVal: string): any[] {

    if (filterVal == "0"){
      console.log(this.forecasts)
      return this.forecasts = items;
   
    }
    else{
     items.filter((item) => {
       if(item.id == filterVal)
       {
         this.forecasts = item
         console.log(this.forecasts)

       }
      })

}
}
}
// if (filterVal == "0"){
//   this.forecasts = this.filter_data;
//   console.log(this.forecasts)
// }
// else{
//   this.forecasts = this.filter_data.filter((item) => {
//     item.id.includes(filterVal)
//     console.log(this.forecasts)
//   });
//   }
