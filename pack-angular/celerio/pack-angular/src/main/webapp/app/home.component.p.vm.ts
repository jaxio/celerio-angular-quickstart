$output.webapp("app/home.component.ts")##
import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home.component.html',
    styles: [`
             h3 {color: blue;}
             h4 {color: green;}
             `]
})
export class HomeComponent {
}
