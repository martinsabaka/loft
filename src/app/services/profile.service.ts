import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProfileService {
	private clientid = 'Iv1.04d3e29715e67555';
	private clientsecret = '96cbc5a0d2c70b60133c92a612fa910ec5c58c67';

	constructor(private http: HttpClient) {}

  /**
   * Finds repositories based on input
   * @param input
   */
	public updateRepository(input: string) {
		return this.http.get('https://api.github.com/search/repositories?q=' + input);
	}

  /**
   * Gets repository details
   * @param url
   */
	public getRepository(url: string) {
    return this.http.get(url);
  }
}
