import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
Object: any;

  constructor() { }

  ngOnInit(): void {
  }

  item:object[] = [{
    img:{
      img:''
    }
  }]
}
