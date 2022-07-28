import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {
 private url ='http://localhost:8080'
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(public http: HttpClient) { }

  uploadimage(file: any, title: any, description: any): Observable<any> {
    return this.http.post(this.url+'/upload', { file, title, description }, this.httpOptions)

  }
}
