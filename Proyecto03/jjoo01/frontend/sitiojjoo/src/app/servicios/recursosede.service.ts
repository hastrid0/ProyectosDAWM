import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecursosedeService {

  constructor(private http: HttpClient) {
    
   }
  
  obtenerSedes() {
  return this.http.get('http://localhost:3000/unasede');
  }
}
