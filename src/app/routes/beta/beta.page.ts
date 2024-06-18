import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-beta',
  standalone: true,
  imports: [],
  template: `
    <p>Beta works!</p>
    <p>With query params: {{ q() }}</p>
  `,
  styles: ``,
})
export default class BetaPage {
  q: InputSignal<string> = input<string>('no params');
}
