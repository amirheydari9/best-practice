import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.API_BASE_URL}/posts`);
  }

}
