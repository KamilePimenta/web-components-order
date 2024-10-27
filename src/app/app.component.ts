import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { OrderComponent } from './pages/order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-components-order';

  constructor( private injector: Injector) {}

  ngDoBootstrap() {
    const childAppComponent = createCustomElement(AppComponent, {  injector: this.injector });
    customElements.define('kms-order', childAppComponent);
  }
}
