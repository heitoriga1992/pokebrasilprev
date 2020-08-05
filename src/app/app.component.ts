import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-menu> </app-menu>
  <div class="container">
    <router-outlet> </router-outlet>
  </div>`,
})
export class AppComponent {
}
