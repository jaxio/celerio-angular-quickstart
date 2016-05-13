$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-detail.component.ts")##
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Router, OnActivate, RouteSegment } from '@angular/router';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {${entity.model.type},Prime${entity.model.type}} from './${entity.model.var}';
import {${entity.service.type}} from './${entity.model.var}.service';

@Component({
	templateUrl: 'app/entities/${entity.model.var}/${entity.model.var}-detail.component.html',
	selector: '${entity.model.var}-detail',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS, ${entity.service.type}]
})
export class ${entity.model.type}DetailComponent implements OnActivate {

    $entity.model.var: $entity.model.type;

    constructor(private router:Router, private ${entity.service.var}: ${entity.service.type}) { }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.${entity.service.var}.${entity.model.getter}(id).then(${entity.model.var} => this.${entity.model.var} = ${entity.model.var});
    }

#foreach ($manyToOne in $entity.manyToOne.list)
    goto${manyToOne.to.varUp}() {
        this.router.navigate([`/${manyToOne.toEntity.model.var}`, this.${entity.model.var}.${manyToOne.to.var}.id]);
    }
#end
}
