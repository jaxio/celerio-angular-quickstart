$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-list.component.ts")##
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,LazyLoadEvent} from 'primeng/primeng';
import {$entity.model.type} from './${entity.model.var}';
import {${entity.model.type}DetailComponent} from './${entity.model.var}-detail.component';
import {$entity.service.type} from './${entity.model.var}.service';
import {PageResponse} from "../../support/paging";
#foreach ($relation in $entity.xToOne.list)
#if(!$relation.to.type.equals($entity.model.type))
import {$relation.to.type} from '../$relation.toEntity.model.var/$relation.toEntity.model.var';
#end
import {${relation.to.type}LineComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-line.component';
#end

@Component({
	templateUrl: 'app/entities/${entity.model.var}/${entity.model.var}-list.component.html',
	selector: '${entity.model.var}-list',
    directives: [ROUTER_DIRECTIVES, InputText, DataTable, Button, Dialog, Column, Header, Footer#foreach ($relation in $entity.xToOne.list), ${relation.to.type}LineComponent#{end}],
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
#foreach ($relation in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
#end
    private _$relation.to.var : $relation.to.type;
#end

    constructor(private router:Router, private $entity.service.var : $entity.service.type) { }

    loadPage(event : LazyLoadEvent) {
        this.${entity.service.var}.getPage(this.example, event).
            subscribe(pageResponse => this.currentPage = pageResponse);
    }

## --------------- Many to One
#foreach ($relation in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one: input param is used to filter the list when displayed
    // as a one-to-many list by the other side.
#end
    @Input()
    set ${relation.to.var}($relation.to.var : $relation.to.type) {
        if ($relation.to.var == null) {
            return;
        }
        this._$relation.to.var = $relation.to.var;

        this.example = new ${entity.model.type}();
        this.example.$relation.to.var = new ${relation.to.type}();
        this.example.${relation.to.var}.${identifiableProperty.var} = this._${relation.to.var}.${identifiableProperty.var};
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