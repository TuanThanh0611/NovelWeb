import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appNgxControlError]',
  standalone: true
})
export class NgxControlErrorDirective {
  @Input() ngxControlError!: string;
  constructor() { }

}
