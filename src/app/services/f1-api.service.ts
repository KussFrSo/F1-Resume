import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class F1ApiService {
	baseURL: string = 'http://ergast.com/api/f1';
	constructor(private http: HttpClient) {}

	getCircuits(): Observable<any> {
		return this.http.get(`${this.baseURL}/current.json`);
	}

	getLastRace(): Observable<any> {
		return this.http.get(`${this.baseURL}/current/last/results.json`);
	}
}
