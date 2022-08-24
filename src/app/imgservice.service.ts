import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, } from '@angular/common/http';
import { HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  upload(title: any, description: any, images: File[]): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    for (var i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getall(): Observable<any> {
    return this.http.get(this.baseUrl+'/multiget')
  }
}
//For multiple file upload service
