import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  @Input() childMessage: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
