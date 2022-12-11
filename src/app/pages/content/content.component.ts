import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private Id:string|null ='0';

  constructor(
    private route: ActivatedRoute
  ) {}

  img:string = "";
  title:string = "";
  description:string = "";
  work:string = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{
      this.Id = value.get("id");
    })

    this.setValuesToComponent(this.Id);
  }
  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0];
    this.title = result.title;
    this.description = result.description
    this.img = result.img;
    this.work = result.work;
  }

}
