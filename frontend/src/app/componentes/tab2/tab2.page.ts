import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { SitiosModalComponent } from '../../componentes/sitios-modal/sitios-modal.component';
import { DataService } from '../../config/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    CommonModule,
    HttpClientModule
  ]
})
export class Tab2Page implements OnInit {
  ciudades: any[] = [];
  nombrePais: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nombrePais = params['nombrePais'];
      this.cargarCiudades(this.nombrePais);
    });
  }

  cargarCiudades(nombrePais: string) {
    this.dataService.getCiudadesPorPais(nombrePais).subscribe({
      next: data => {
        this.ciudades = data;
      },
      error: err => {
        console.error('Error cargando ciudades:', err);
      }
    });
  }

  async seleccionarCiudad(ciudad: any) {
    const modal = await this.modalCtrl.create({
      component: SitiosModalComponent,
      componentProps: {
        idCiudad: ciudad._id || ciudad.id
      }
    });
    await modal.present();
  }
}
