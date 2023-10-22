import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = "1095a169f10b4d12b02e3a29106e012d";

  constructor(private http : HttpClient) { }


  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  getArticleById(source : string){

    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + 'apiKey=' + this.api_key);

  }

  initArticles(){

    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);

  }
}
