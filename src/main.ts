import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';


(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  const childAppComponent = createCustomElement(AppComponent, {injector: app.injector});
  customElements.define('kms-order', childAppComponent);
})();
