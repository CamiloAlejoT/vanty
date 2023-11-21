import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { FilerUserPipe } from 'src/app//common/pipes/filer-user.pipe';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    UserListComponent,
    FilerUserPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule, 
    MaterialModule
  ],

})
export class UsersModule { }
