import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid: '8c97c13b750e1df8a66a'; 
  private clientsecret:'7902c3f63256af7ecfa876e3f1b9336ad97ee2de';

  constructor(private http:HttpClient) { 
    console.log("service is ready!");
    this.username = "Aggrey-Odinga"
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
}
