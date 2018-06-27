import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	private input:string;
  private repoDetails:any[];
  error:null;
  emptyResponse:boolean;

  constructor(private profileService: ProfileService) {
    
  }

  processForm(){
    this.profileService.updateRepository(this.input).subscribe(profile => {
      if (profile.total_count > 0){
        this.profileService.getRepository(profile.items[0]['url']).subscribe(repoData => {
          this.repoDetails = repoData;
          this.emptyResponse = false;
        }, error => this.error = error);
      } else {
        this.emptyResponse = true;
      }
    }, error => this.error = error);
  }

  ngOnInit() {
  }

}
