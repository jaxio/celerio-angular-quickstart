$output.webapp("app/home.component.ts")##
import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home.component.html',
    styles: [`
             h2 {color: red;}
             `]
})
export class HomeComponent {
}
