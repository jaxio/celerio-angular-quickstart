import {LazyLoadEvent} from 'primeng/primeng';

export class PageResponse<E> {
    constructor(public totalPages : number,
                public totalElements : number,
                public content : E[]) { }
}

export class PageRequestByExample<E> {
    constructor(public example : E,
                public lazyLoadEvent : LazyLoadEvent) { }
}
