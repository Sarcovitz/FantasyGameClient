import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private readonly URL_BASE: string = environment.apiUrl;

	constructor(private http: HttpClient) {}

  get<Type>(url: string, params: HttpParams): Observable<HttpResponse<Type>> {
		return this.http.get<Type>(this.URL_BASE + url, {
			observe: 'response',
			headers: { 'Content-Type': 'application/json' },
			params: params,
			responseType: 'json',
		});
	}

	delete<Type>(url: string, params: HttpParams): Observable<HttpResponse<Type>> {
		return this.http.delete<Type>(this.URL_BASE + url, {
			observe: 'response',
			headers: { 'Content-Type': 'application/json' },
			params: params,
			responseType: 'json',
		});
	}

	patch<Type>(url: string, body: any, params: HttpParams = new HttpParams()): Observable<HttpResponse<Type>> {
		return this.http.patch<Type>(this.URL_BASE + url, body, {
			observe: 'response',
			headers: { 'Content-Type': 'application/json' },
			params: params,
			responseType: 'json',
		});
	}

	post<Type>(url: string, body: any, params: HttpParams = new HttpParams()): Observable<HttpResponse<Type>> {
		return this.http.post<Type>(this.URL_BASE + url, body, {
			observe: 'response',
			headers: { 'Content-Type': 'application/json' },
			params: params,
			responseType: 'json',
		});
	}
}
