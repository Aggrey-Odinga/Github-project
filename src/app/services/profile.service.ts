import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private username: string;
  clientid!: 'f54c99c3ca413f82c2b7';
  clientsecret!: 'c05c3f32fa243ad8a59d56d0dac0a0207b4b9653';

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
