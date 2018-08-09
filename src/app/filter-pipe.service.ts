import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class FilterPipeService implements PipeTransform {

    transform(items: any[], filters: Object): any {
        if (!items || !filters) {
            return items;
        }

        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => filters(item, true, "inprogress"));
    }
}
