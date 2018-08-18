import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-error',
  templateUrl: './contact-error.component.html',
  styleUrls: ['./contact-error.component.css']
})
export class ContactErrorComponent implements OnInit {

  rForm:FormGroup;
  post:any;
  description:string = '';
  name:string = '';
  titleAlert:string = 'this filed is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
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

}
