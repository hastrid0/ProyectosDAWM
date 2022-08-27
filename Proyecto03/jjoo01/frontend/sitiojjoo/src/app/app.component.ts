import { Component } from '@angular/core';
import { RecursodisciplinaService } from './servicios/recursodisciplina.service';
import { RecursosedeService } from './servicios/recursosede.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private recursodisciplina : RecursodisciplinaService, private recursosede : RecursosedeService) {
    this.recursosede.obtenerSedes();
    console.log("no")
    
  }
  title = 'sitiojjoo';
}
