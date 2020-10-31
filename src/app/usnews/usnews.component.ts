import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-usnews',
  templateUrl: './usnews.component.html',
  styleUrls: ['./usnews.component.css']
})
export class UsnewsComponent implements OnInit {
  news :any=[];
  constructor(public _newsService:NewsService) { 
    this._newsService.getUsNews().subscribe((data) =>{
      this.news=data.articles;
    });
  }


  ngOnInit(): void {
  }

}
