import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Importamos HttpClientModule y HTTP_INTERCEPTORS
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthInterceptor } from '../app/interceptors/auth.service'; // Asegúrate de tener el interceptor

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HttpClientModule],  // Añadimos HttpClientModule aquí
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,  // Usamos el interceptor para agregar el token
      multi: true
    }
  ]
})
export class AppComponent {
  constructor() {}
}
