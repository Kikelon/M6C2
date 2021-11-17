import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public miAutor : Autor;

  constructor() {
    
    this.miAutor = new Autor ("Ken", "Follett", 72);
    this.miAutor.obra.push("Los pilares de la Tierra");

  }
  
  public mostrar(datos : HTMLInputElement){
    console.log("Valor anterior de miAutor.nombre: " + this.miAutor.nombre);
    this.miAutor.nombre = datos.value;
    console.log("Valor nuevo de miAutor.nombre: " + this.miAutor.nombre);
  }

  ngOnInit(): void {
  }

}