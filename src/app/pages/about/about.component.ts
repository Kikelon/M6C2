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
    console.log("Valor de miAutor.nombre: " + this.miAutor.nombre);
    console.log("Valor del input: " + datos.value);
  }

  ngOnInit(): void {
  }

}