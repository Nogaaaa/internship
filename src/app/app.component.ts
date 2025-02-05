import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  template: `
    <app-login/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
}
