import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('token') !== null) {
    return true;  // Si el usuario está logueado, permitir acceso
  } 
  else {
    return false;
  }
};
