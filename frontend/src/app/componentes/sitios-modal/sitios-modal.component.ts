import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { DataService } from '../../config/data.service'; // Ajusta ruta

@Component({
  selector: 'app-sitios-modal',
  templateUrl: './sitios-modal.component.html',
  styleUrls: ['./sitios-modal.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonButton,
    IonButtons,
    IonSegment,
    IonSegmentButton,
    CommonModule,
  ],
})
export class SitiosModalComponent implements OnInit {
  @Input() idCiudad!: string;
  sitios: any[] = [];
  menuSitio: any[] = [];
  selectedSegment: 'sitios' | 'menu' = 'sitios';
  sitioSeleccionadoId: string | null = null;

  constructor(private dataService: DataService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.cargarSitios();
  }

  cargarSitios() {
    this.dataService.getSitiosPorCiudad(this.idCiudad).subscribe((data) => {
      this.sitios = data;
    });
  }

  async seleccionarSitio(sitio: any) {
  this.sitioSeleccionadoId = sitio._id;
  this.selectedSegment = 'menu';

  if (this.sitioSeleccionadoId) {
    this.cargarMenuSitio(this.sitioSeleccionadoId);
  }
}


  cargarMenuSitio(idSitio: string) {
    this.dataService.getMenusPorSitio(idSitio).subscribe((data) => {
      this.menuSitio = data;
    });
  }

  cambiarSegment(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
