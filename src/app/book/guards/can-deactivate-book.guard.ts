import { Injectable, Component } from '@angular/core'
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<Component> {
  canDeactivate(
    component: Component,
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean {
    return confirm('leave?');
  }
}
