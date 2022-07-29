import { MarcaTextoDirective } from './../directives/marca-texto.directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  count = 0;
  pessoas = [
    { nome: 'Maiely', idade: 20 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Gabi', idade: 30 },
    { nome: 'Eloiza', idade: 35 },
    { nome: 'Lara', idade: 40 },
    { nome: 'Evelyn', idade: 45 },
    { nome: 'Adriano', idade: 50 },
    { nome: 'Lucas', idade: 55 },
    { nome: 'João', idade: 60 },
  ];
  label = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.pessoas);
    let contador = setInterval(() => {
      this.count++;
      if (this.count > 10) {
        //clearInterval(contador);
        this.count = 0;
      }
    }, 1000);
  }

  clicou(value: string): void {
    this.label = value;
  }
}
