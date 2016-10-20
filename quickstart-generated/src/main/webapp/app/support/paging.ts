import {LazyLoadEvent} from 'primeng/primeng';

export class PageResponse<E> {
    constructor(public totalPages : number,
                public totalElements : number,
                public content : E[]) { }

    // remove the passed element from the content array.
    remove(element : E) {
        let indexToRemove : number = this.content.indexOf(element);
        this.content.splice(indexToRemove, 1);
        this.totalElements = this.totalElements - 1;
    }
}

export class PageRequestByExample<E> {
    constructor(public example : E,
                public lazyLoadEvent : LazyLoadEvent) { }
}
