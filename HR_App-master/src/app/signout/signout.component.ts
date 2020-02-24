import { Component, OnInit } from '@angular/core';
import { Signout } from '../signout';
import { SignoutService } from '../signout.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {
  signout: Signout = new Signout();
  submitted = false;
  constructor(private signoutService: SignoutService) { }
  public changeText1(): void {
    const y: Date = new Date();
    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: ban-types
    const signout: String = y.toString();
    document.getElementById('signout').innerHTML = ('Signout = ' + signout);
    this.signout.signout = signout.toString();
  }
  ngOnInit() {
  }
  save() {
    console.log('on Submit ', this.signout);
    this.signoutService.createSignout(this.signout).subscribe(
     data => {
       console.log(data);
      },
     error => {
        console.log(error);
     });
    this.signout = new Signout();
   }
   onSubmit()  {
     this.submitted = true;
     this.save();
   }
}
