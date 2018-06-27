import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProfileService {

	private input:string;
  private clientid = 'Iv1.04d3e29715e67555';
  private clientsecret = '96cbc5a0d2c70b60133c92a612fa910ec5c58c67';
  
  constructor(private http:Http) {
  }

	
	updateRepository(input:string){
		this.input = input;
		return this.http.get("https://api.github.com/search/repositories?q=" + this.input).map(red => red.json())
		.pipe(catchError(this.handleError));
	}

	// Http error handling test function: given URL is non existent
	/*
	updateRepository(input:string){
		this.input = input;
		return this.http.get("https://api.github.com/search/randombswhichdoesntwork?q=" + this.input).map(red => red.json())
		.pipe(catchError(this.handleError));
	}
	*/

	//returns repository details based on given url
	getRepository(url: string){
		return this.http.get(url).map(red => red.json()).pipe(catchError(this.handleError));
	}

	private handleError(error:HttpErrorResponse){
		return new ErrorObservable('Something went wrong: ' + error.status + ": " + error.statusText);
	}
}
