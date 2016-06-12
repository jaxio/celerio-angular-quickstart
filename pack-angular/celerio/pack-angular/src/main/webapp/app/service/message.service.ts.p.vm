$output.webapp("app/service/message.service.ts")##
import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import { Message } from 'primeng/primeng';

@Injectable()
export class MessageService {
    private messageSource = new Subject<Message>();

    messageSource${dollar} = this.messageSource.asObservable();

    info(summary : string, detail : string) {
        this.messageSource.next({severity:'info', summary: summary, detail: detail});
    }

    error(summary : string, detail : string) {
        this.messageSource.next({severity:'error', summary: summary, detail: detail});
    }
}