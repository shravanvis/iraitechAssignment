import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(this.index1)
  }

  numbers =  ['2','3','10','15','26','35','50','63','82']
  number_value = '';
  enter(){
    console.log(this.numbers.indexOf(this.number_value))
  }

}
