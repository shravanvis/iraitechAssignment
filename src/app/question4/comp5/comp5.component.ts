import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentMessage = ""
  sendData(data:any){
    // alert(data.value)
    this.parentMessage = data.value
  }
}