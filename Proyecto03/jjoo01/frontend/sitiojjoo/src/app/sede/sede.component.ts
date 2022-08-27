import { Component, OnInit } from '@angular/core';
import { RecursosedeService } from '../servicios/recursosede.service';
import { Sede0 } from '../interfaz/sede0';
@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {
  item : Sede0 = {
    id: -1,
    nombre: ""

  };
  constructor(private recursosede: RecursosedeService) {
    
   }

  ngOnInit(): void {
  this.recursosede.obtenerSedes();
  }

}
