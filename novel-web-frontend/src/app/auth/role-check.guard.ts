import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { filter, interval, map, timeout } from 'rxjs';
import {AuthService} from "./service/auth.service";

export const roleCheckGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const roles = next.data['roles'];
    return interval(50).pipe(
      filter(() => authService.connectedUserQuery?.isPending() == false),
      map(() => authService.connectedUserQuery?.data()),
      map(
        (data) =>
          !roles ||
          roles.length === 0 ||
          authService.hasAnyRoles(data!, roles)
      ),
      timeout(3000)
    );
  } else {
    return false;
  }
};
