import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'reuniao'
})
export class ReuniaoPipe implements PipeTransform {
    transform(quantidade: number) {
        return quantidade > 1 ? `${quantidade} Reuniões`  : `${quantidade} Reunião`;
    }
}
