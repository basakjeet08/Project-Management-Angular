import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserType } from 'src/app/auth/models/UserType';
import { AuthService } from 'src/app/auth/services/auth.service';

// This guard only lets the users which are managers to get past to this page
export const managerGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const user = authService.getLoggedInUser();
  return user.type === UserType.PROJECT_MANAGER;
};
