import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from '../../config/data.service'; // Ajusta ruta

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, CommonModule]
})
export class Tab3Page implements OnInit {
  platos: any[] = [];
  idPais: string = '';         // O nombrePais, según como tengas en las rutas
  ciudadesNombres: string[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPais = params['idPais'];   // O params['nombrePais']
      this.cargarCiudadesYPlatos(this.idPais);
    });
  }

  cargarCiudadesYPlatos(idPais: string) {
    // Paso 1: Obtener ciudades del país
    this.dataService.getCiudadesPorPais(idPais).subscribe(ciudades => {
      this.ciudadesNombres = ciudades.map(c => c.nombre);

      // Paso 2: Obtener platos filtrando por nombres de ciudades
      this.dataService.getPlatosPorCiudades(this.ciudadesNombres).subscribe(platos => {
        this.platos = platos;
      });
    });
  }
}
