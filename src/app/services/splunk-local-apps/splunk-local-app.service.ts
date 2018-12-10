import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SplunkLocalAppService {

  constructor(
    private http: HttpClient
  ) { }

  getAllApps() {
    return this.http.get(`${environment.apps}/list`);
  }

  deleteApp(appName) {
    return this.http.delete(`${environment.apps}/delete/${appName}`);
  }
}
