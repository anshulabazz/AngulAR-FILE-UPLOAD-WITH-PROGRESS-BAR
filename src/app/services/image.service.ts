import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = 'http://localhost:8080'

  constructor(public http: HttpClient) { }

  public getprofile(): Observable<any> {
    return this.http.get(this.url + '/profile')
  }
  upload(title: any, description: any, file: File): Observable<any> {
    const formdata: FormData = new FormData()
    
    formdata.append('title', title)
    formdata.append('description', description)
    formdata.append('image', file)
    return this.http.post(this.url+'/uploads',formdata)
  }
}
// for single upload file
