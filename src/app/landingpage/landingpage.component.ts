import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  profile: any;
  repositories: any;
  username!:string;

  constructor(private profileService : ProfileService) { }

  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

      	this.profileService.getProfileRepos().subscribe(repositories => {
  		console.log(repositories);
  		this.repositories = repositories;
  	}) 
  }

  

  ngOnInit(): void {
  }

}
