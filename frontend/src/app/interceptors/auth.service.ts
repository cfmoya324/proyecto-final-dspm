import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('x-token');  // Obtener el token desde localStorage

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          'x-token': token  // Añadimos el token en las cabeceras de la solicitud
        }
      });

      return next.handle(clonedRequest);  // Continuamos con la solicitud modificada
    }

    // Si no hay token, enviamos la solicitud original
    return next.handle(req);
  }
}
