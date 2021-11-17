import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public author : Autor;
  // private nombre  = ["Henry","Jane","Charles","Herman","Leon"];
  // private apellido  = ["Fielding","Austen","Dickens","Melville","Tolstoi"];
  // private edad  = [47,41,58,72,82];
  // private libro = ["Tom Jones", "Orgullo y prejuicio", "David Copperfield", "Moby Dick", "Guerra y Paz"]

  constructor() {
    
    this.author = new Autor ("Ken", "Follett", 72);
    this.author.obra.push("Los pilares de la Tierra");

  }

  ngOnInit(): void {
  }

}
