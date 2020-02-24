import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  register: any = {};
  submitted = false;


  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }
  newRegister(): void {
    this.submitted = false;
    this.register = {};
  }

  save() {
    console.log('on submit-----', this.register);
    this.registerService.create(this.register)
      .subscribe(data => console.log(data), error => console.log(error));
    this.newRegister();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

  