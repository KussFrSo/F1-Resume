import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as xml2js from 'xml2js';
@Injectable({
	providedIn: 'root',
})
export class F1ApiService {
	constructor(private http: HttpClient) {}

	getCircuits(): Observable<any> {
		return this.http.get('http://ergast.com/api/f1/current.json');
	}
}
