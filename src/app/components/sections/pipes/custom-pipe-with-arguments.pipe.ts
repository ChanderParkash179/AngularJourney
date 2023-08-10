import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class CustomPipeWithArgumentsPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if (!length) {
      length = 50;
    }

    return "(custom-pipe-withArguments) 0-100 characters only : " + value.substring(0, length);
  }

}
