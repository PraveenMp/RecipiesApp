import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { Category } from './category.model';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment'


@Injectable()
export class CategoryService {
  CategoriesServiceUrl:string=environment.CategoriesServiceUrl;
  constructor(private http:Http){
  }

  getAllCategories():Observable<Category[]>{
    return this.http.get(this.CategoriesServiceUrl).map(result=>result.json());
  }

  getCategory(id: number): Observable<Category> {
    return this.getAllCategories().map(categories => {return categories.find(c=>c.Id==id)});
  }  

  addCategory(category:Category):Observable<Category>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.CategoriesServiceUrl,JSON.stringify(category),options).map(res=>res.json());
  }

  editCategory(category:Category):Observable<Category>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.CategoriesServiceUrl+"/"+category.Id,JSON.stringify(category),options).map(res=>res.json());
  }

  deleteCategory(category:Category):Observable<Category>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.CategoriesServiceUrl+"/"+category.Id).map(res=>res.json());
  }

}