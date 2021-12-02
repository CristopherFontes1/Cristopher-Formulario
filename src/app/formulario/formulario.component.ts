import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})



export class FormularioComponent implements OnInit {

  reportForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { this._createForm();}

  ngOnInit(): void {    

  }

  public _createForm(): void { this.reportForm = this.formBuilder.group({ reports_nombre: [null, Validators.required], reports_correo: [null, Validators.required], reports_contrasena: [null, Validators.required] }); }

}
  