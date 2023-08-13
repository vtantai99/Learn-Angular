import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) {}

  getItems(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`)
  }

  createItem(item: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, item);
  }

  // updateItem(itemId: number, updatedItem: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/items/${itemId}`, updatedItem);
  // }

  // deleteItem(itemId: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/items/${itemId}`);
  // }
}
