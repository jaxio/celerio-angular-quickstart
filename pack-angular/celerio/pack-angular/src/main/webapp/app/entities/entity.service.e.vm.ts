$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.service.ts")##
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {${entity.model.type}} from './${entity.model.var}';

@Injectable()
export class ${entity.service.type} {

    constructor(private http: Http) {}

    getAll() {
        return this.http.get('api/${entity.model.vars}/')
                    .toPromise()
                    .then(res => { return <${entity.model.type}[]> res.json(); });
    }

    ${entity.model.getter}(id?) {
        return this.http.get('api/${entity.model.vars}/' + id)
            .toPromise()
            .then(res => { return <${entity.model.type}> res.json(); });
    }
}
