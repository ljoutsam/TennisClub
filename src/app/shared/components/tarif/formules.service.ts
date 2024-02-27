import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formule } from '../../../models/formules.model';

@Injectable({
  providedIn: 'root'
})
export class FormulesService {

  private apiUrl = 'server/tennis/formules';
  constructor(private httpClient: HttpClient) { }


  getFormules(): Observable<Formule[]>{
    return this.httpClient.get<Formule[]>(this.apiUrl)
  }

}
