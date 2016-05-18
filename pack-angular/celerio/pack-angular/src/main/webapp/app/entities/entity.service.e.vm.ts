$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.service.ts")##
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {${entity.model.type}} from './${entity.model.var}';
import {LazyLoadEvent} from 'primeng/primeng';
import {PageResponse, PageRequestByExample} from '../../support/paging';

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

    getByExample($entity.model.var : $entity.model.type) {
        let body = JSON.stringify($entity.model.var);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/$entity.model.vars/byexample', body, options)
            .toPromise()
            .then(res => { return <${entity.model.type}[]> res.json(); });
    }

    update($entity.model.var : $entity.model.type) {
        let body = JSON.stringify($entity.model.var);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('api/$entity.model.vars/', body, options)
            .toPromise()
            .then(res => { return <$entity.model.type> res.json(); });
    }

    getPage($entity.model.var : $entity.model.type, event : LazyLoadEvent) {
        let req = new PageRequestByExample($entity.model.var, event);
        let body = JSON.stringify(req);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/$entity.model.vars/page', body, options)
            .toPromise()
            .then(res => { return <PageResponse<$entity.model.type>> res.json(); });
    }
}
