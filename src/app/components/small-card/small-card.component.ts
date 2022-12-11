import { dataFake } from './../../data/dataFake';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  constructor() { }
  @Input()
  Id:string ="";
  ngOnInit(): void {
    this.setValuesToComponent(this.Id);
  }
  title:string = "";
  description:string ="";
  img:string ="";


  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0];
    this.title = result.title;
    this.description = result.description
    this.img = result.img;
  }
}
