import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  subscriber : any = {};


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert(`Now You Have A mail On ${this.subscriber.email}`);
  }

}
