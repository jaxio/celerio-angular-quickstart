$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-list.component.ts")##
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {${entity.model.type},Prime${entity.model.type}} from './${entity.model.var}';
import {${entity.model.type}DetailComponent} from './${entity.model.var}-detail.component';
import {${entity.service.type}} from './${entity.model.var}.service';

@Component({
	templateUrl: 'app/entities/${entity.model.var}/${entity.model.var}-list.component.html',
	selector: '${entity.model.var}-list',
    directives: [ROUTER_DIRECTIVES, InputText,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS, ${entity.service.type}]
})
export class ${entity.model.type}ListComponent {

	displayDialog: boolean;

    $entity.model.var: $entity.model.type = new Prime${entity.model.type}();

    selected${entity.model.type}: ${entity.model.type};

    new${entity.model.type}: boolean;

    ${entity.model.vars}: ${entity.model.type}[];

    constructor(private router:Router, private ${entity.service.var}: ${entity.service.type}) { }

    ngOnInit() {
        this.${entity.service.var}.getAll().then(${entity.model.vars} => this.${entity.model.vars} = ${entity.model.vars});
    }

    showDialogToAdd() {
        this.new${entity.model.type} = true;
        this.${entity.model.var} = new Prime${entity.model.type}();
        this.displayDialog = true;
    }

    save() {
        if(this.new${entity.model.type})
            this.${entity.model.vars}.push(this.${entity.model.var});
        else
            this.${entity.model.vars}[this.findSelectedIndex()] = this.${entity.model.var};

        this.${entity.model.var} = null;
        this.displayDialog = false;
    }

    delete() {
        this.${entity.model.vars}.splice(this.findSelectedIndex(), 1);
        this.${entity.model.var} = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.new${entity.model.type} = false;
        this.${entity.model.var} = this.clone${entity.model.type}(event.data);
        //this.displayDialog = true;
        this.router.navigate(['/${entity.model.var}', this.${entity.model.var}.id]);
    }

    clone${entity.model.type}(c: ${entity.model.type}): ${entity.model.type} {
        let ${entity.model.var} = new Prime${entity.model.type}();
        for(let prop in c) {
            ${entity.model.var}[prop] = c[prop];
        }
        return ${entity.model.var};
    }

    findSelectedIndex(): number {
        return this.${entity.model.vars}.indexOf(this.selected${entity.model.type});
    }
}