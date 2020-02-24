import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  leave: Leave = new Leave();
  submitted = false;
  constructor(private leaveService: LeaveService) { }

  ngOnInit() {
  }
  onSelectFile($event) {
    // tslint:disable-next-line: ban-types
    const proof: String = Image.toString();
    document.getElementById('proof').innerHTML = ('Proof = ' + proof);
    this.leave.proof = proof.toString();
  }

  newLeave(): void {
    this.submitted = false;
    this.leave = new Leave();
  }

  public save() {
    // tslint:disable-next-line: no-unused-expression
    console.log('on Submit ', this.leave);
    this.leaveService.createLeave(this.leave)
      .subscribe(data => console.log(data), error => console.log(error));
    this.leave = new Leave();
  }

  onSubmit()  {

    this.submitted = true;
    this.save();
  }
}
