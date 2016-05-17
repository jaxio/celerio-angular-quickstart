$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-list.component.ts")##
import {Component#if($entity.manyToOne.size > 0), Input#{end}} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {$entity.model.type, Prime$entity.model.type} from './${entity.model.var}';
import {${entity.model.type}DetailComponent} from './${entity.model.var}-detail.component';
import {$entity.service.type} from './${entity.model.var}.service';
#foreach ($manyToOne in $entity.manyToOne.list)
import {$manyToOne.to.type, Prime$manyToOne.to.type} from '../$manyToOne.toEntity.model.var/$manyToOne.toEntity.model.var';
#end

@Component({
	templateUrl: 'app/entities/${entity.model.var}/${entity.model.var}-list.component.html',
	selector: '${entity.model.var}-list',
    directives: [ROUTER_DIRECTIVES, InputText, DataTable, Button, Dialog, Column, Header, Footer],
	providers: [HTTP_PROVIDERS, $entity.service.type]
})
export class ${entity.model.type}ListComponent {

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

        let example : $entity.model.type = new Prime${entity.model.type}();
        example.$manyToOne.to.var = new Prime${manyToOne.to.type}();
        example.${manyToOne.to.var}.id = this._${manyToOne.to.var}.id;

        this.${entity.service.var}.getByExample(example).then($entity.model.vars => this.$entity.model.vars = $entity.model.vars);
    }

#end
    onRowSelect(event) {
        this.router.navigate(['/${entity.model.var}', event.data.id]);
    }
}