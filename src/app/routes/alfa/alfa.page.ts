import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PlatformStore } from '@stk/srv';

@Component({
  selector: 'app-alfa',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <p>Alfa works!</p>
    <hr />
    <p>Platform data:</p>
    <pre>{{ data() | json }}</pre>
  `,
  styles: ``,
})
export default class AlfaPage {
  #platform = inject(PlatformStore);
  data = this.#platform.data;
  constructor() {
    this.#platform.data = {
      appName: 'Remote 2',
      payload: {
        remote: true,
        data: 'Alfa Page Remote 2',
      },
    };
  }
}
