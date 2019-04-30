import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public input: string;
  public repoDetails: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  /**
   * Processes data based on user input
   */
  public processForm() {
    this.profileService.updateRepository(this.input).subscribe((profile: any) => {
      if (profile.total_count > 0) {
        this.profileService.getRepository(profile.items[0].url).subscribe(repoData => {
          this.repoDetails = repoData;
        }, error => {
          console.log(error);
        });
      } else {
        this.repoDetails = null;
      }
    }, error => {
      console.log(error);
    });
  }

}
