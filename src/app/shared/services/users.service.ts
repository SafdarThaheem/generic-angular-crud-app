import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersType } from './models/users-type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersType> {
    return this.http.get<UsersType>(this.url);
  }

  userByID(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  addUser(user: UsersType) {
    console.log(user);
    return this.http.post(this.url, user);
  }

  deleteUser(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.url}/${id}`);
  }

  updateUser(selectedUserId: string, updatedUser: UsersType) {
    console.log(selectedUserId, updatedUser)
    return this.http.put<UsersType>(`${this.url}/${selectedUserId}`, updatedUser);
  }
}
