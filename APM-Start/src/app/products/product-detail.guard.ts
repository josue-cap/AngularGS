import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id')); //TODO: se optiene el id que viene como parametro en la url
      //TODO: se valida si el id no es null o letra
      if (isNaN(id) || id < 1){
        alert('Invalid product id');
        this.router.navigate(['/products'])
        return false;
      }
      return true;
  }
  
}
