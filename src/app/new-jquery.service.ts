import { InjectionToken } from '@angular/core';

export const JQUERY_TOKEN = new InjectionToken('jQuery');

export function jqueryFactory() {
  return getJquery();
}

function getJquery() {
  return window['jQuery'];
}

export const JQUERY_SERVICE = { provide: JQUERY_TOKEN, useValue: jqueryFactory };
