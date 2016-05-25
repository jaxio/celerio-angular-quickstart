$output.webapp("app/app.component.ts")##
import { Component,OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { Menubar,Message,Growl} from 'primeng/primeng';
import { HomeComponent } from './home.component';
import { MessageService } from './service/message.service';

#foreach($entity in $project.withoutManyToManyJoinEntities.list)
import { ${entity.service.type} } from './entities/${entity.model.var}/${entity.model.var}.service';
import { ${entity.model.type}Component } from './entities/${entity.model.var}/${entity.model.var}.component';
#end

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, Menubar, Growl],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        MessageService,
#foreach($entity in $project.withoutManyToManyJoinEntities.list)
        ${entity.service.type}#if($velocityHasNext),
#else

    ]
#end
#end
})
@Routes([
    { path : '/',  component: HomeComponent }#if($project.withoutManyToManyJoinEntities.size > 0),
#end
#foreach($entity in $project.withoutManyToManyJoinEntities.list)
    { path: '/${entity.model.var}', component: ${entity.model.type}Component }#if($velocityHasNext),
#else

    ])
#end
#end
export class AppComponent {
    msgs : Message[] = [];

    constructor(private messageService: MessageService) {
        messageService.messageSource${dollar}.subscribe(
            msg => {
                this.msgs.push(msg);
            });
    }
}
