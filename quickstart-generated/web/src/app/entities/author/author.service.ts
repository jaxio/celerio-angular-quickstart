//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
//
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity.service.ts.e.vm
//
import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MessageService } from '../../service/message.service';
import { PageResponse, PageRequestByExample } from '../../support/paging';
import { Author } from './author';

@Injectable()
export class AuthorService {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http, private messageService : MessageService) {}

    /**
     * Get a Author by id.
     */
    getAuthor(id : any) : Observable<Author> {
        return this.http.get(environment.url+'/api/authors/' + id)
            .map(response => new Author(response.json()))
            .catch(this.handleError);
    }

    /**
     * Update the passed author.
     */
    update(author : Author) : Observable<Author> {
        let body = JSON.stringify(author);

        return this.http.put(environment.url+'/api/authors/', body, this.options)
            .map(response => new Author(response.json()))
            .catch(this.handleError);
    }

    /**
     * Load a page (for paginated datatable) of Author using the passed
     * author as an example for the search by example facility.
     */
    getPage(author : Author, event : LazyLoadEvent) : Observable<PageResponse<Author>> {
        let req = new PageRequestByExample(author, event);
        let body = JSON.stringify(req);

        return this.http.post(environment.url+'/api/authors/page', body, this.options)
            .map(response => {
                let pr : any = response.json();
                return new PageResponse<Author>(pr.totalPages, pr.totalElements, Author.toArray(pr.content));
            })
            .catch(this.handleError);
    }

    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by AuthorCompleteComponent.
     */
    complete(query : string) : Observable<Author[]> {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post(environment.url+'/api/authors/complete', body, this.options)
            .map(response => Author.toArray(response.json()))
            .catch(this.handleError);
    }

    /**
     * Delete an Author by id.
     */
    delete(id : any) {
        return this.http.delete(environment.url+'/api/authors/' + id).catch(this.handleError);
    }

    // sample method from angular doc
    private handleError (error: any) {
        // TODO: seems we cannot use messageService from here...
        let errMsg = (error.message) ? error.message :
        error.status ? `Status: ${error.status} - Text: ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        if (error.status === 401 ) {
            window.location.href = '/';
        }
        return Observable.throw(errMsg);
    }
}
