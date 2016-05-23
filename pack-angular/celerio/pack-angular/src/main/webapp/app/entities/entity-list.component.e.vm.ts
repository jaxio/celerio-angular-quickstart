$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-list.component.ts")##
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,LazyLoadEvent} from 'primeng/primeng';
import {$entity.model.type, ${entity.model.type}Impl} from './${entity.model.var}';
import {${entity.model.type}DetailComponent} from './${entity.model.var}-detail.component';
import {$entity.service.type} from './${entity.model.var}.service';
import {PageResponse} from "../../support/paging";
#foreach ($manyToOne in $entity.manyToOne.list)
import {$manyToOne.to.type, ${manyToOne.to.type}Impl} from '../$manyToOne.toEntity.model.var/$manyToOne.toEntity.model.var';
#end

@Component({
	templateUrl: 'app/entities/${entity.model.var}/${entity.model.var}-list.component.html',
	selector: '${entity.model.var}-list',
    directives: [ROUTER_DIRECTIVES, InputText, DataTable, Button, Dialog, Column, Header, Footer],
})
export class ${entity.model.type}ListComponent {

    @Input() header = "All ${entity.model.varsUp}...";

    // when sub is true, it means this list is a one-to-many list.
    // It belongs to a parent entity, as a result the addNew operation
    // must prefill the parent entity. The prefill is not done here, instead we
    // emit an event.
    @Input() sub : boolean;
    @Output() onAddNewClicked = new EventEmitter();

    private example : $entity.model.type = null; // used to query by example...

    // list is paginated
    currentPage : PageResponse<$entity.model.type> = new PageResponse<$entity.model.type>(0,0,[]);


## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
#end
    private _$manyToOne.to.var : $manyToOne.to.type;
#end

    constructor(private router:Router, private $entity.service.var : $entity.service.type) { }

    loadPage(event : LazyLoadEvent) {
        this.${entity.service.var}.getPage(this.example, event).
            subscribe(pageResponse => this.currentPage = pageResponse);
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

        this.example = new ${entity.model.type}Impl();
        this.example.$manyToOne.to.var = new ${manyToOne.to.type}Impl();
        this.example.${manyToOne.to.var}.${identifiableProperty.var} = this._${manyToOne.to.var}.${identifiableProperty.var};
    }

#end
    onRowSelect(event) {
        this.router.navigate(['/${entity.model.var}', event.data.${identifiableProperty.var}]);
    }

    addNew() {
        if (this.sub) {
            this.onAddNewClicked.emit("addNew");
        } else {
            this.router.navigate(['/${entity.model.var}', 'new']);
        }
    }
}