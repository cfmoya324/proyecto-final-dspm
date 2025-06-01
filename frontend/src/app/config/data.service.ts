import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ENDPOINTS } from '../config/url.servicios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `bearer ${token}`
    });
  }

  // Obtener todos los países (sin filtro)
  getPaises(): Observable<any[]> {
    return this.http.get<any>(ENDPOINTS.paises, { headers: this.getHeaders() }).pipe(
      map(response => response.data)  // Extraemos solo el arreglo 'data'
    );
  }

  // Obtener ciudades filtrando por nombre del país (no ID)
  getCiudadesPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any>(ENDPOINTS.ciudades, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener platos filtrando por nombre del país
  getPlatosPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any>(ENDPOINTS.platos, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener menús filtrando por nombre del país
  getMenusPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any>(ENDPOINTS.menus, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener personajes (sin filtro)
  getPersonajes(): Observable<any[]> {
    return this.http.get<any>(ENDPOINTS.personajes, { headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener sitios filtrando por nombre del país
  getSitiosPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any>(ENDPOINTS.sitios, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener sitios filtrando por nombre de ciudad (no ID)
  getSitiosPorCiudad(nombreCiudad: string): Observable<any[]> {
    const params = new HttpParams().set('ciudad', nombreCiudad);
    return this.http.get<any>(ENDPOINTS.sitios, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener menús filtrando por nombre de sitio (no ID)
  getMenusPorSitio(nombreSitio: string): Observable<any[]> {
    const params = new HttpParams().set('sitio', nombreSitio);
    return this.http.get<any>(ENDPOINTS.menus, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  // Obtener platos filtrando por una lista de nombres de ciudades
  getPlatosPorCiudades(nombresCiudades: string[]): Observable<any[]> {
    const params = new HttpParams().set('ciudades', nombresCiudades.join(','));
    return this.http.get<any>(ENDPOINTS.platos, { params, headers: this.getHeaders() }).pipe(
      map(response => response.data)
    );
  }

  autenticacion(mail: string, password: string) {
    return this.http.post<any[]>(ENDPOINTS.auth, {mail: mail, password: password}).pipe(
      map((data)=>{
        console.log("Datos inicio sesión",data);
        return data;
      })
    );
  }
}
