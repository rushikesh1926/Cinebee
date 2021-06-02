import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(InTheatresData:any[], searchTerm:string): any[] {
    if(!InTheatresData || !searchTerm)
    {
      return InTheatresData;
    }
    else{
      return InTheatresData.filter(inTheatreObj=>inTheatreObj.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
