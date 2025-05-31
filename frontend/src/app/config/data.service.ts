import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../config/url.servicios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  
  // Obtener todos los países (sin filtro)
  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(ENDPOINTS.paises);
  }

  // Obtener ciudades filtrando por nombre del país (no ID)
  getCiudadesPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any[]>(ENDPOINTS.ciudades, { params });
  }

  // Obtener platos filtrando por nombre del país
  getPlatosPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any[]>(ENDPOINTS.platos, { params });
  }

  // Obtener menús filtrando por nombre del país
  getMenusPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any[]>(ENDPOINTS.menus, { params });
  }

  // Obtener personajes (sin filtro)
  getPersonajes(): Observable<any[]> {
    return this.http.get<any[]>(ENDPOINTS.personajes);
  }

  // Obtener sitios filtrando por nombre del país
  getSitiosPorPais(nombrePais: string): Observable<any[]> {
    const params = new HttpParams().set('pais', nombrePais);
    return this.http.get<any[]>(ENDPOINTS.sitios, { params });
  }

  // Obtener sitios filtrando por nombre de ciudad (no ID)
  getSitiosPorCiudad(nombreCiudad: string): Observable<any[]> {
    const params = new HttpParams().set('ciudad', nombreCiudad);
    return this.http.get<any[]>(ENDPOINTS.sitios, { params });
  }

  // Obtener menús filtrando por nombre de sitio (no ID)
  getMenusPorSitio(nombreSitio: string): Observable<any[]> {
    const params = new HttpParams().set('sitio', nombreSitio);
    return this.http.get<any[]>(ENDPOINTS.menus, { params });
  }

  // Obtener platos filtrando por una lista de nombres de ciudades
  getPlatosPorCiudades(nombresCiudades: string[]): Observable<any[]> {
    const params = new HttpParams().set('ciudades', nombresCiudades.join(','));
    return this.http.get<any[]>(ENDPOINTS.platos, { params });
  }
}
