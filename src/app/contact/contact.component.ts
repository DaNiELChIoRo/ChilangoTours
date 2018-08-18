import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  rForm:FormGroup;
  post:any;
  description:string = '';
  name:string = '';
  titleAlert:string = 'this filed is required';
  nameAlert:string = 'style="color:red;"';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'mail': [null, Validators.required],
      'description':[null, Validators.compose([Validators.required, Validators.minLength(30)])],
      'validate':''
    });
  }

  addPost(post){
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
  }

  onClickMe(){

    // var mensaje, nombre, correo;
    // var errores = "";
    // var flag = false;
    // mensaje = document.getElementById('mensaje').value;
    // correo = document.getElementById('correo').value;
    // nombre = document.getElementById('nombre').value;
    // if(mensaje == ""){
    //   errores += '<p>No se ha ingresado ningun mensaje!<p>';
    //   flag = true;
    // }
    // if(nombre == ""){
    //   errores += '<p>No se ha ingresado el nombre<p>';
    //   flag = true;
    // }
    // if(correo == ""){
    //   errores += '<p>No se ha ingresado ninguna dirección de correo<p>';
    //   flag = true;
    // }
    // if(flag == true){
    //     alert(errores);
    // }
  }

}
