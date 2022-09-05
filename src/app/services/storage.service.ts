import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localArticles:Article[]=[];


  constructor(private storage: Storage) { 
    this.init();
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

async saveOrRemoveAricle(article:Article){

  const exist = this._localArticles.find(localArticle=>localArticle.title===article.title);

  if(exist){

    this._localArticles = this._localArticles.filter(localArticles=>localArticles.title!=article.title);
  }else {
    this._localArticles = [article,...this._localArticles];
  }
  this._storage.set('articles',this._localArticles);
}
}
