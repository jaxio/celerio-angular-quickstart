$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-detail.component.ts")##
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/common';
import { Router, OnActivate, RouteSegment } from '@angular/router';
import {InputText,InputTextarea,Dropdown, SelectItem, Checkbox, Calendar, Password, DataTable,Button,Dialog,Column,Header,Footer,TabView,TabPanel,Panel} from 'primeng/primeng';
import {${entity.model.type}} from './${entity.model.var}';
import {${entity.service.type}} from './${entity.model.var}.service';
import {MessageService} from '../../service/message.service';
#foreach ($relation in $entity.oneToMany.flatUp.list)
import {${relation.to.type}DetailComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-detail.component';
import {${relation.to.type}ListComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-list.component';
#end
#foreach ($relation in $entity.xToOne.list)
#if(!$relation.to.type.equals($entity.model.type))
import {${relation.to.type}} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}';
#end
import {${relation.to.type}CompleteComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-auto-complete.component';
#end

@Component({
	templateUrl: 'app/entities/$entity.model.var/${entity.model.var}-detail.component.html',
	selector: '${entity.model.var}-detail',
    directives: [InputText, InputTextarea, Dropdown, Checkbox, Calendar, Password, DataTable, Button, Dialog, Column, Header, Footer, TabView, TabPanel,Panel#foreach ($relation in $entity.oneToMany.flatUp.list), ${relation.to.type}ListComponent, ${relation.to.type}DetailComponent#{end}#foreach ($relation in $entity.xToOne.list),${relation.to.type}CompleteComponent#end],
})
export class ${entity.model.type}DetailComponent implements OnActivate {
    $entity.model.var : $entity.model.type;
#foreach ($relation in $entity.oneToMany.flatUp.list)
    show$relation.to.varsUp : boolean = true;
#end

    @Input() sub : boolean = false;
#foreach ($relation in $entity.xToOne.list)
    @Input()
    set ${relation.to.var}($relation.to.var : $relation.to.type) {
        this.$entity.model.var = new ${entity.model.type}();
        this.${entity.model.var}.$relation.to.var = $relation.to.var;
    }
#end
    @Output() onSaveClicked = new EventEmitter<$entity.model.type>();
    @Output() onCancelClicked = new EventEmitter();
#foreach($attr in $entity.enumAttributes.list)
    ${attr.var}Options: SelectItem[];
#end

    constructor(private router:Router, private messageService : MessageService, private ${entity.service.var}: ${entity.service.type}) {
#foreach($attr in $entity.enumAttributes.list)
        this.${attr.var}Options = [];
#foreach($enumValue in $attr.getEnumConfig().getEnumValues())
        this.${attr.var}Options.push({"label": "$enumValue.name", 'value': "$enumValue.name"});
#end
#end
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = curr.getParam('id');

        if (id === 'new') {
            this.$entity.model.var = new ${entity.model.type}();
        } else {
            this.${entity.service.var}.${entity.model.getter}(id)
                .subscribe(
                    $entity.model.var => this.$entity.model.var = $entity.model.var,
                error =>  this.messageService.error('Error: ' + error, 'PrimeNG Rocks ;-)'));
        }
    }

#foreach ($relation in $entity.xToOne.list)
    goto${relation.to.varUp}() {
        this.router.navigate([`/${relation.toEntity.model.var}`, this.${entity.model.var}.${relation.to.var}.${identifiableProperty.var}]);
    }
#end

    onSave() {
        this.${entity.service.var}.update(this.$entity.model.var).
            subscribe(
                $entity.model.var => {
                    this.$entity.model.var = $entity.model.var;
                    if (this.sub) {
                        this.onSaveClicked.emit(this.$entity.model.var);
                        this.messageService.info('Saved OK and msg emitted', 'PrimeNG Rocks ;-)')
                    } else {
                        this.messageService.info('Saved OK', 'PrimeNG Rocks ;-)')
                    }
                },
                error =>  this.messageService.error('Error: ' + error, 'PrimeNG Rocks ;-)'));
    }

    onCancel() {
        if (this.sub) {
            this.onCancelClicked.emit("cancel");
            this.messageService.info('Cancel clicked and msg emitted', 'PrimeNG Rocks ;-)')
        }
    }
}
