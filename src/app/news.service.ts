import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _httpclient:HttpClient) {}

   getEgyptNews() :Observable<any>
   {

     return this._httpclient.get("http://newsapi.org/v2/top-headlines?country=eg&apiKey=f8a8168a910e4818a4e0bc74fa5bfeed");
   }

   getUsNews() :Observable<any>
   {
    return this._httpclient.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=f8a8168a910e4818a4e0bc74fa5bfeed");

   }
}
