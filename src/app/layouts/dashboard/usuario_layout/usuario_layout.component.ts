import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario_layout',
  templateUrl: './usuario_layout.component.html',
  styleUrls: ['./usuario_layout.component.css']
})
export class Usuario_layoutComponent implements OnInit {

  selectedOption!:string;
  datosTabla:any;

  constructor() { }

  ngOnInit() {
  }

  setSelection(event : Event){}
}
