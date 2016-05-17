$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-list.component.ts")##
import {Component, Input} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {$entity.model.type, ${entity.model.type}Impl} from './${entity.model.var}';
import {${entity.model.type}DetailComponent} from './${entity.model.var}-detail.component';
import {$entity.service.type} from './${entity.model.var}.service';
#foreach ($manyToOne in $entity.manyToOne.list)
import {$manyToOne.to.type, ${manyToOne.to.type}Impl} from '../$manyToOne.toEntity.model.var/$manyToOne.toEntity.model.var';
#end

@Component({
	templateUrl: 'app/entities/${entity.model.var}/${entity.model.var}-list.component.html',
	selector: '${entity.model.var}-list',
    directives: [ROUTER_DIRECTIVES, InputText, DataTable, Button, Dialog, Column, Header, Footer],
	providers: [HTTP_PROVIDERS, $entity.service.type]
})
export class ${entity.model.type}ListComponent {

    @Input() header = "All ${entity.model.varsUp}...";

    ${entity.model.vars}: ${entity.model.type}[];
## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
#end
    private _$manyToOne.to.var : $manyToOne.to.type;
#end

    constructor(private router:Router, private $entity.service.var : $entity.service.type) { }

    ngOnInit() {
        this.${entity.service.var}.getAll().then($entity.model.vars => this.$entity.model.vars = $entity.model.vars);
    }

## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
#end
    @Input()
    set ${manyToOne.to.var}($manyToOne.to.var : $manyToOne.to.type) {
        if ($manyToOne.to.var == null) {
            return;
        }
        this._$manyToOne.to.var = $manyToOne.to.var;

        let example : $entity.model.type = new ${entity.model.type}Impl();
        example.$manyToOne.to.var = new ${manyToOne.to.type}Impl();
        example.${manyToOne.to.var}.${identifiableProperty.var} = this._${manyToOne.to.var}.${identifiableProperty.var};

        this.${entity.service.var}.getByExample(example).then($entity.model.vars => this.$entity.model.vars = $entity.model.vars);
    }

#end
    onRowSelect(event) {
        this.router.navigate(['/${entity.model.var}', event.data.${identifiableProperty.var}]);
    }
}