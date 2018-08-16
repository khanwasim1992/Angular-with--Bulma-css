import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateMobile } from '../validators/mobile.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
       fullName : ['',Validators.required],
       email : ['',[Validators.required,Validators.email]],
       mobile : ['',[Validators.required,validateMobile]],
       message : [''],
    })
  }

  get f(){
    return this.contactForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.contactForm.invalid){
      return;
    }
    alert('Submitted');
  }


}
