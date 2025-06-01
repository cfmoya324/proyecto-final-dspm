import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { DataService } from "../../config/data.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader]
})
export class LoginPage implements OnInit {

  correo:string = '';
  contraseña:string = '';
  token:string = '';

  onInputMAIL(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';
    this.correo = value.toString();
  }

  onInputPWD(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';
    this.contraseña = value.toString();
  }

  iniciarSesion = async () => {
    if (this.correo !== '' && this.contraseña !== '') {
      await this.db.autenticacion(this.correo, this.contraseña).toPromise().then(
        (data: any) => {
          this.token = data.token;
          console.log("respuesta token:",this.token);
          localStorage.setItem('token',this.token);
        }
      );
    }
  }

  constructor(private db: DataService) { }

  ngOnInit() {
  }

}
