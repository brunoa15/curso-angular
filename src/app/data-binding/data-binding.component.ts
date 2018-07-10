import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  varImagem = 'https://loremflickr.com/320/240/dog'
  valorAtual: string = '';
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento) {
    this.valorAtual = (evento.target.value);
  }

pessoa: any = {
  nome: 'bruno',
  idade: 21
}

  constructor() { }

  ngOnInit() {
  }

}
