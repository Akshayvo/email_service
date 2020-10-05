import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { messages } from './data/message';
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<any> {
  message: string;

  constructor() {
    this.message = messages.routeChangePrevent;
  }

  canDeactivate(component: any): boolean {
    if (component.hasUnsavedData()) {
      if (confirm(`${this.message}`)) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
