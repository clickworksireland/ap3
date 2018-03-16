import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'longerTitle'
})
export class LongerTitles implements PipeTransform  {

   constructor(){}  

   transform(v: string) : string {

      return this.overwriteTitle(v);
   }

   overwriteTitle(title) {
       switch(title) {
           case 'Cork':
                title = 'The longer title';
                break;
       }

       return title;
   }

}