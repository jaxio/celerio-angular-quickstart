$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.service.ts")##
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
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
}
