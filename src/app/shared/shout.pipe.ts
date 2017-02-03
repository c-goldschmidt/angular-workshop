import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value + ' !!!';
  }

}
