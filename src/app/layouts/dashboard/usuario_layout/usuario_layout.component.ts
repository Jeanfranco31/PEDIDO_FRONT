import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario_layout',
  templateUrl: './usuario_layout.component.html',
  styleUrls: ['./usuario_layout.component.css']
})
export class Usuario_layoutComponent implements OnInit {

  form:FormGroup;
  selectedOption!:string;
  datosTabla:any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['action', 'identificacion', 'nombre', 'nombreUsuario', 'empresa' ,'estado'];

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      identificacion: [''],
      nombre: [''],
      opcion: ['']
    });
  }

  ngOnInit() {
  }

  setSelection(event : Event){}

  rowSelect(element:any){
    /*
    this.userRowData = element;
    this.nombreEstadoObtenido = this.userRowData.checked;
    return this.nombreUsuarioObtenido = this.userRowData.nombreUsuario;
    */
  }
}
