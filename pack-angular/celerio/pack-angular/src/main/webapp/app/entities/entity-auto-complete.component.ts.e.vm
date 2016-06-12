$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-auto-complete.component.ts")##
import {Component, Input, Output, EventEmitter, Provider, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";
import {AutoComplete} from 'primeng/primeng';
import {${entity.model.type}} from './${entity.model.var}';
import {${entity.service.type}} from './${entity.model.var}.service';
import {${entity.model.type}LineComponent} from './${entity.model.var}-line.component';

// Resource: http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel

const ${entity.model.type.toUpperCase()}_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => ${entity.model.type}CompleteComponent),
        multi: true
    });

@Component({
	template: `
        <p-autoComplete [(ngModel)]="value" [disabled]="disabled" placeholder="Hint: type to search..." field="#foreach($attr in $entity.printerAttributes.flatUp.list)${attr.var}#{break}#end" [suggestions]="suggestions" (completeMethod)="complete(${dollar}event)">
            <template let-$entity.model.var>
                <li class="ui-autocomplete-list-item ui-helper-clearfix" style="border-bottom:1px solid #D5D5D5">
                    <${entity.model.var}-line [$entity.model.var]="$entity.model.var"></${entity.model.var}-line>
                </li>
            </template>
        </p-autoComplete>
	`,
	selector: '${entity.model.var}-auto-complete',
    directives: [CORE_DIRECTIVES, AutoComplete,${entity.model.type}LineComponent],
    providers: [${entity.model.type.toUpperCase()}_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR]
})
export class ${entity.model.type}CompleteComponent implements ControlValueAccessor {
    @Input() disabled : boolean = false;

    //The internal data model
    private _value: $entity.model.type = null;

    private suggestions : ${entity.model.type}[] = [];

    //Placeholders for the callbacks
    private _onTouchedCallback: () => void = () => {};
    private _onChangeCallback: (_:any) => void = () => {};

    constructor(private $entity.service.var : ${entity.service.type}) {
    }

    //get accessor
    get value(): any { return this._value; };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (<$entity.model.type> v !== this._value) {
            this._value = <$entity.model.type> v;
            this._onChangeCallback(v);
        }
    }

    //Set touched on blur
    onTouched(){
        this._onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        this._value = <$entity.model.type> value;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this._onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this._onTouchedCallback = fn;
    }

    complete(event:any) {
        this.${entity.service.var}.complete(event.query).subscribe(
            results => this.suggestions = results,
            error => console.error(error));
    }
}
