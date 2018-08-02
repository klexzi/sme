import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(directory: any[], searchText?: string): any[] {
    if (!directory){
    return [];
    }
    if(!searchText) {
      return directory;
    }
   
   

  let  search = searchText.toLowerCase();  
   return directory.filter(params=>{       
    return    params.tag1.toLowerCase().includes(search)||params.tag3.toLowerCase().includes(search)||params.tag2.toLowerCase().includes(search) || params.name.toLowerCase().includes(search);
        
         
     
            
          })              
            


  

  }

}