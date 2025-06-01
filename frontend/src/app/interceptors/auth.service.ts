import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');  // Obtener el token desde localStorage

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}` // Añadimos el token como un token Bearer
        }
      });

      return next.handle(clonedRequest);  // Continuamos con la solicitud modificada
    }

    // Si no hay token, enviamos la solicitud original
    return next.handle(req);
  }
}
