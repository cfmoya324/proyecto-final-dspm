import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from '../../config/data.service'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, CommonModule, FormsModule, IonThumbnail, IonLabel]
})
export class Tab1Page implements OnInit {
  paises: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  // Cambiado para usar el nombre del país como parámetro
  seleccionarPais(nombrePais: string) {
    this.router.navigate(['/tabs/tab2', nombrePais]);
  }
}
