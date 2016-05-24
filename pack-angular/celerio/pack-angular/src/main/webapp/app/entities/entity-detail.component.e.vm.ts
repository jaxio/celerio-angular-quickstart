$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-detail.component.ts")##
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/common';
import { Router, OnActivate, RouteSegment } from '@angular/router';
import {InputText,InputTextarea,RadioButton, Checkbox, Calendar, Password, DataTable,Button,Dialog,Column,Header,Footer,TabView,TabPanel,Fieldset} from 'primeng/primeng';
import {${entity.model.type},${entity.model.type}Impl} from './${entity.model.var}';
import {${entity.service.type}} from './${entity.model.var}.service';
import {MessageService} from '../../service/message.service';
#foreach ($relation in $entity.oneToMany.flatUp.list)
import {${relation.to.type}DetailComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-detail.component';
import {${relation.to.type}ListComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-list.component';
#end
#foreach ($relation in $entity.manyToOne.list)
import {${relation.to.type}} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}';
import {${relation.to.type}CompleteComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-auto-complete.component';
#end

@Component({
	templateUrl: 'app/entities/$entity.model.var/${entity.model.var}-detail.component.html',
	selector: '${entity.model.var}-detail',
    directives: [InputText, InputTextarea, RadioButton, Checkbox, Calendar, Password, DataTable, Button, Dialog, Column, Header, Footer, TabView, TabPanel,Fieldset#foreach ($relation in $entity.oneToMany.flatUp.list), ${relation.to.type}ListComponent, ${relation.to.type}DetailComponent#{end}#foreach ($relation in $entity.manyToOne.list),${relation.to.type}CompleteComponent#end],
})
export class ${entity.model.type}DetailComponent implements OnActivate {
    $entity.model.var : $entity.model.type;
#foreach ($relation in $entity.oneToMany.flatUp.list)
    show$relation.to.varsUp : boolean = true;
#end

    @Input() sub : boolean = false;
#foreach ($manyToOne in $entity.manyToOne.list)
    @Input()
    set ${manyToOne.to.var}($manyToOne.to.var : $manyToOne.to.type) {
        this.$entity.model.var = new ${entity.model.type}Impl();
        this.${entity.model.var}.$manyToOne.to.var = $manyToOne.to.var;
    }
#end
    @Output() onSaveClicked = new EventEmitter<$entity.model.type>();
    @Output() onCancelClicked = new EventEmitter();

    constructor(private router:Router, private messageService : MessageService, private ${entity.service.var}: ${entity.service.type}) { }

    routerOnActivate(curr: RouteSegment): void {
        let id = curr.getParam('id');

        if (id === 'new') {
            this.$entity.model.var = new ${entity.model.type}Impl();
        } else {
            this.${entity.service.var}.${entity.model.getter}(id)
                .subscribe(
                    $entity.model.var => this.$entity.model.var = $entity.model.var,
                error =>  this.messageService.error('Error: ' + error, 'PrimeNG Rocks ;-)'));
        }
    }

#foreach ($manyToOne in $entity.manyToOne.list)
    goto${manyToOne.to.varUp}() {
        this.router.navigate([`/${manyToOne.toEntity.model.var}`, this.${entity.model.var}.${manyToOne.to.var}.${identifiableProperty.var}]);
    }
#end

    onSave() {
        this.${entity.service.var}.update(this.$entity.model.var).
            subscribe(
                $entity.model.var => {
                    this.$entity.model.var = $entity.model.var;
                    if (this.sub) {
                        this.onSaveClicked.emit(this.$entity.model.var);
                    } else {
                        this.messageService.info('Saved OK', 'PrimeNG Rocks ;-)')
                    }
                },
                error =>  this.messageService.error('Error: ' + error, 'PrimeNG Rocks ;-)'));
    }

    onCancel() {
        if (this.sub) {
            this.onCancelClicked.emit("cancel");
        }
    }
}
