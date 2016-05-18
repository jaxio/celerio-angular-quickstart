import {LazyLoadEvent} from 'primeng/primeng';

export class PageResponse<E> {
    constructor(public totalPages : number,
                public totalElements : number,
                public content : E[]) { }
}

export class PageRequestByExample<E> {
    constructor(public entity : E,
                public lazyLoadEvent : LazyLoadEvent) { }
}
