import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  tamanhoFonte: number = 20;
  ativo: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.ativo = !this.ativo;
  }

}
