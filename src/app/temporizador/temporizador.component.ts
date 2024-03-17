import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;

  constructor(){}

  ngOnInit(): void {
    // Fecha del evento (30 de junio de 2024 a las 8:00 a.m.)
    const eventDate = new Date('2024-06-30T08:00:00');
  
    // Fecha y hora actual
    const currentDate = new Date();
  
    // Calcular tiempo restante
    let timeDiff = eventDate.getTime() - currentDate.getTime();
  
    // Verificar si la fecha actual ya pasó el evento
    if (timeDiff < 0) {
      // Si el evento ya pasó, establecer tiempo restante en cero
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
    } else {
      // Si el evento aún no ha ocurrido, calcular tiempo restante
  
      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      timeDiff -= this.days * (1000 * 60 * 60 * 24);
  
      this.hours = Math.floor(timeDiff / (1000 * 60 * 60));
      timeDiff -= this.hours * (1000 * 60 * 60);
  
      this.minutes = Math.floor(timeDiff / (1000 * 60));
    }
  }

}
