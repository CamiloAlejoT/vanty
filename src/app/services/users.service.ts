import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
import { User, APIUser } from 'src/app/models/user'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpService
  ) { }

  async getUserList(): Promise<User[]> {

    const APIusers: APIUser[] = await this.http.getUsers()
    let userList: User[] = []
    APIusers.forEach(e => {
      userList.push({
        name: `${e.name.title} ${e.name.first} ${e.name.last}`,
        id: e.id.value,
        mail: e.email
      })
    })
    return userList

  }
}
