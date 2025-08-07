import { inject, Injectable } from '@angular/core';
import { Product as PM } from '../../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http= inject(HttpClient)
  private readonly baseUrl = 'http://localhost:3000/products'
  getAll():Observable<PM[]>{
    return this.http.get<PM[]>(this.baseUrl)
  }
  getById(id:string):Observable<PM>{
    return this.http.get<PM>(`${this.baseUrl}/${id}`)
  }
}
