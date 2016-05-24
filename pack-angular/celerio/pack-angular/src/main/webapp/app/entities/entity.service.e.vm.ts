$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.service.ts")##
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {${entity.model.type}} from './${entity.model.var}';
import {LazyLoadEvent} from 'primeng/primeng';
import {PageResponse, PageRequestByExample} from '../../support/paging';

@Injectable()
export class ${entity.service.type} {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http) {}

    ${entity.model.getter}(id?) {
        return this.http.get('api/${entity.model.vars}/' + id)
            .map(response => <${entity.model.type}> response.json());
    }

    update($entity.model.var : $entity.model.type) {
        let body = JSON.stringify($entity.model.var);

        return this.http.put('api/$entity.model.vars/', body, this.options)
            .map(response => <$entity.model.type> response.json());
    }

    getPage($entity.model.var : $entity.model.type, event : LazyLoadEvent) {
        let req = new PageRequestByExample($entity.model.var, event);
        let body = JSON.stringify(req);

        return this.http.post('api/$entity.model.vars/page', body, this.options)
            .map(response => <PageResponse<$entity.model.type>> response.json());
    }

    complete(query : string) {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post('api/$entity.model.vars/complete', body, this.options)
            .map(response => <${entity.model.type}[]> response.json());
    }
}
