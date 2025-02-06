import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  template: ` <button
  class=" bg-regal-blue text-white w-full px-5 py-2 my-3 rounded-xl shadow-md  hover:bg-slate-50"
  (click)="btnClicked.emit()"
>
  <span class="text-md">{{ label() }}</span>
</button>`,
  styles: ``,
})
export class MainButtonComponent {
  label = input('');
  btnClicked = output();
}
