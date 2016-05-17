$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-detail.component.ts")##
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Router, OnActivate, RouteSegment } from '@angular/router';
import {InputText,InputTextarea,RadioButton, Checkbox, Calendar, Password, DataTable,Button,Dialog,Column,Header,Footer,Message,Growl,TabView,TabPanel,Fieldset} from 'primeng/primeng';
import {${entity.model.type},${entity.model.type}Impl} from './${entity.model.var}';
import {${entity.service.type}} from './${entity.model.var}.service';
#foreach ($relation in $entity.oneToMany.flatUp.list)
import {${relation.to.type}ListComponent} from '../$relation.toEntity.model.var/${relation.toEntity.model.var}-list.component';
#end

@Component({
	templateUrl: 'app/entities/$entity.model.var/${entity.model.var}-detail.component.html',
	selector: '${entity.model.var}-detail',
    directives: [InputText, InputTextarea, RadioButton, Checkbox, Calendar, Password, DataTable, Button, Dialog, Column, Header, Footer, Growl, TabView, TabPanel,Fieldset#foreach ($relation in $entity.oneToMany.flatUp.list), ${relation.to.type}ListComponent#{end}],
	providers: [HTTP_PROVIDERS, $entity.service.type]
})
export class ${entity.model.type}DetailComponent implements OnActivate {
    $entity.model.var: $entity.model.type;

    msgs: Message[] = [];

    showInfoSaved() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Saved OK...', detail:'PrimeNG rocks ;-)'});
    }

    constructor(private router:Router, private ${entity.service.var}: ${entity.service.type}) { }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.${entity.service.var}.${entity.model.getter}(id).then($entity.model.var => this.$entity.model.var = $entity.model.var);
    }

#foreach ($manyToOne in $entity.manyToOne.list)
    goto${manyToOne.to.varUp}() {
        this.router.navigate([`/${manyToOne.toEntity.model.var}`, this.${entity.model.var}.${manyToOne.to.var}.${identifiableProperty.var}]);
    }
#end

    onupdate() {
        this.${entity.service.var}.update(this.$entity.model.var).then($entity.model.var => {
            this.$entity.model.var = $entity.model.var;
            this.showInfoSaved();
        });
    }
}
