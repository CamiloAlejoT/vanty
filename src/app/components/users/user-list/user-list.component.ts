import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = []
  filter: string = ""
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsersList()  
  }

  async getUsersList() {
    const response = await this.usersService.getUserList()
    this.users = response
  }

}
