import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { Category } from './category.model';
import 'rxjs/add/operator/map'


@Injectable()
export class CategoryService {
  constructor(private http:Http){

  }

  getAllCategories():Observable<Category[]>{
    return this.http.get('http://recipiesservicesapp.azurewebsites.net/api/Categories').map(result=>result.json().slice(0,25));
  }

  getCategory(id: number): Observable<Category> {
    return this.getAllCategories().map(categories => {return categories.find(c=>c.Id==id)});
  }  

  addCategory(category:Category):Observable<Category>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://recipiesservicesapp.azurewebsites.net/api/Categories',JSON.stringify(category),options).map(res=>res.json());
  }

  deleteCategory(category:Category):Observable<Category>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://recipiesservicesapp.azurewebsites.net/api/Categories/'+category.Id).map(res=>res.json());
  }

}