import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29927167e7f44f289a1837e7cf5754a0')
  }

}
