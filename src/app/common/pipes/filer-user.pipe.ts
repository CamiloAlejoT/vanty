import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user'

@Pipe({
  name: 'filerUser'
})
export class FilerUserPipe implements PipeTransform {

  transform(value: User[], args: string): User[] {
    if (args.length < 2) {
      return value;
    } else {
      return value.filter(user => {
        return user.name.toLowerCase().includes(args.toLowerCase())
          || user.mail.toLowerCase().includes(args.toLowerCase())
      })
    }
  }


}


