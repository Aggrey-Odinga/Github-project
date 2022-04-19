import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private username: string;
  clientid!: '8c97c13b750e1df8a66a';
  clientsecret!: 'f5701c7c70207ae67d1b9db25e3315d5d53f74a0';

  constructor(private http: HttpClient) {
    this.username = "Aggrey-Odinga";
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
