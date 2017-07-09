//
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
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
import { Device } from './device';

@Injectable()
export class DeviceService {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http, private messageService : MessageService) {}

    /**
     * Get a Device by id.
     */
    getDevice(id : any) : Observable<Device> {
        return this.http.get('/api/devices/' + id)
            .map(response => new Device(response.json()))
            .catch(this.handleError);
    }

    /**
     * Update the passed device.
     */
    update(device : Device) : Observable<Device> {
        let body = JSON.stringify(device);

        return this.http.put('/api/devices/', body, this.options)
            .map(response => new Device(response.json()))
            .catch(this.handleError);
    }

    /**
     * Load a page (for paginated datatable) of Device using the passed
     * device as an example for the search by example facility.
     */
    getPage(device : Device, event : LazyLoadEvent) : Observable<PageResponse<Device>> {
        let req = new PageRequestByExample(device, event);
        let body = JSON.stringify(req);

        return this.http.post('/api/devices/page', body, this.options)
            .map(response => {
                let pr : any = response.json();
                return new PageResponse<Device>(pr.totalPages, pr.totalElements, Device.toArray(pr.content));
            })
            .catch(this.handleError);
    }

    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by DeviceCompleteComponent.
     */
    complete(query : string) : Observable<Device[]> {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post('/api/devices/complete', body, this.options)
            .map(response => Device.toArray(response.json()))
            .catch(this.handleError);
    }

    /**
     * Delete an Device by id.
     */
    delete(id : any) {
        return this.http.delete('/api/devices/' + id).catch(this.handleError);
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
