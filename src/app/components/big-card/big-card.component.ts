import { dataFake } from './../../data/dataFake';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id);
  }
  title:string = "";
  description:string ="";
  img:string ="";
  work:string="";
  @Input()
  Id:string ="0";

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0];
    this.title = result.title;
    this.description = result.description
    this.img = result.img;
    this.work = result.work;
  }

}
