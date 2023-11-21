import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, APIUser } from 'src/app/models/user'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private apiUrl = 'https://randomuser.me/api/?nat=us&results=10';

  constructor(private http: HttpClient) { }

  async getUsers(): Promise<APIUser[]> {
    const res = firstValueFrom(this.http.get<{ info: Object, results: APIUser[] }>(this.apiUrl))
    return (await res).results

  }


}
