$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.component.ts")##

import {Component} from '@angular/core';
import {Routes,ROUTER_DIRECTIVES} from '@angular/router';
import {${entity.model.type}DetailComponent} from './${entity.model.var}-detail.component';
import {${entity.model.type}ListComponent} from './${entity.model.var}-list.component';

@Component({
    template: `
        <h4>Hello from ${entity.model.type}Component</h4>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
})
@Routes([
    {path: '',     component: ${entity.model.type}ListComponent}, // , useAsDefault: true}, // coming soon
    {path: '/:id', component: ${entity.model.type}DetailComponent}
])
export class ${entity.model.type}Component  {
}