import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid: ''; 
  private clientsecret:'';

  constructor(private http:HttpClient) { }
}
