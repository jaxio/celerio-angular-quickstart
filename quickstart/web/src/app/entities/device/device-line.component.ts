//
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Template pack-angular:web/src/app/entities/entity-line.component.ts.e.vm
//
import {Component, Input} from '@angular/core';
import {Device} from './device';

@Component({
	template: `
        {{ device?.name }} 	`,
	selector: 'device-line',
})
export class DeviceLineComponent {
    @Input() device : Device;
}
