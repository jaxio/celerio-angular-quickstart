$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-auto-complete.component.ts")##
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AutoComplete} from 'primeng/primeng';
import {${entity.model.type}} from './${entity.model.var}';
import {${entity.service.type}} from './${entity.model.var}.service';
import {${entity.model.type}LineComponent} from './${entity.model.var}-line.component';

@Component({
	template: `
        <p-autoComplete [(ngModel)]="$entity.model.var" [disabled]="disabled" placeholder="Hint: type to search..." field="#foreach($attr in $entity.printerAttributes.flatUp.list)${attr.var}#{break}#end" [suggestions]="suggestions" (completeMethod)="complete(${dollar}event)" (onSelect)="select(${dollar}event)">
            <template let-$entity.model.var>
                <li class="ui-autocomplete-list-item ui-helper-clearfix" style="border-bottom:1px solid #D5D5D5">
                    <${entity.model.var}-line [$entity.model.var]="$entity.model.var"></${entity.model.var}-line>
                </li>
            </template>
        </p-autoComplete>
	`,
	selector: '${entity.model.var}-auto-complete',
    directives: [AutoComplete,${entity.model.type}LineComponent],
})
export class ${entity.model.type}CompleteComponent {
    @Input() disabled : boolean = false;
    @Input() $entity.model.var : $entity.model.type;
    @Output() input  = new EventEmitter<$entity.model.type>();
    private suggestions : ${entity.model.type}[] = [];

    constructor(private $entity.service.var : ${entity.service.type}) {
    }

    complete(event) {
        this.${entity.service.var}.complete(event.query).subscribe(
            results => this.suggestions = results,
            error => console.error(error));
    }

    select(event) {
        this.input.emit(event);
    }
}
