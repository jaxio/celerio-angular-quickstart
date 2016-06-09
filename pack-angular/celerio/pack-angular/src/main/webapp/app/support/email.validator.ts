import {provide, Directive, forwardRef} from '@angular/core';
import {Control, NG_VALIDATORS} from '@angular/common';

// http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html

@Directive({
    selector: '[validateEmail][ngControl],[validateEmail][ngModel],[validateEmail][ngFormControl]',
    providers: [
        provide(NG_VALIDATORS, {
            useExisting: forwardRef(() => EmailValidator),
            multi: true
        })
    ]
})
export class EmailValidator {
    private EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    validate(c: Control) {

        return c.value == null || c.value == "" || this.EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}