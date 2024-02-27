import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService{


  private apiUrl = 'server/tennis/adherents';

  constructor(private httpClient: HttpClient) { 

  }

  createUser(userData: User): Observable<any> {
    return this.httpClient.post(this.apiUrl, userData);
  }

  
}
