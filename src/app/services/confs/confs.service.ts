import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfsService {

  constructor(
    private http: HttpClient
  ) { }


  update(data) {
    const { user, app, conf } = data
    
    return this.http.post(`${environment.confs}/${user}/${app}/${conf}/stanza`, data);
  }
  getStanzaContent(user, app, conf, stanza) {
    return this.http.get(`${environment.confs}/${user}/${app}/${conf}/stanza`, {
      params: {
        stanza
      }
    })
  }
  getAllStanzas(user, app, conf) {
    return this.http.get(`${environment.confs}/${user}/${app}/${conf}`);
  }
  getAllConfs(user, app) {
    return this.http.get(`${environment.confs}/${user}/${app}`);
  }
  getAllApps(user) {
    return this.http.get(`${environment.apps}/${user}`);
  }
  getAllUsers() {
    return this.http.get(environment.getAllUsers)
  }

 
}
