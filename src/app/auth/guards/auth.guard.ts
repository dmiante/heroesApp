import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

  const checkAuthStatus = (): boolean | Observable<boolean> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    return authService.checkAuthentication().pipe(
      tap((isAuth) => console.log('Authenticated: ', isAuth)),
      tap(isAuthtenticated => {
        if (!isAuthtenticated) {
          router.navigateByUrl('/auth/login');
        }
      })
    );
  };

export const canMatchAuthGuard: CanMatchFn = (
  //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
): boolean | Observable<boolean> => {
  console.log({route,segments});
  return checkAuthStatus()
};

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
export const canActivateAuthGuard: CanActivateFn = (
  //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> => {
  console.log({ route, state });
  return checkAuthStatus();
};


