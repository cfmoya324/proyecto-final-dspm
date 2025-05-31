import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-comentarios-modal',
  templateUrl: './comentarios-modal.component.html',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonTextarea, IonFooter]
})
export class ComentariosModalComponent {
  @Input() sitioId!: string; // Recibe el id del sitio para el que se comenta
  comentario: string = '';

  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  comentar() {
    // Aquí lógica para guardar comentario (por ejemplo llamar API)
    console.log('Comentario para sitio:', this.sitioId, this.comentario);
    this.cerrarModal();
  }

  cancelar() {
    this.cerrarModal();
  }
}
