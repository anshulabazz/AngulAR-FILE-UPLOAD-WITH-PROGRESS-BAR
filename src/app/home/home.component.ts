import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from '../imgservice.service'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Files } from '../models/file.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: Observable<any>
  image: any
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(private uploadService: ImgserviceService, public dom: DomSanitizer) { }
  ngOnInit() {
    this.data = this.uploadService.getall()
    console.log(this.data)
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

 upload(): void {
   /* this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }
  getimage() {
    this.uploadService.getall().subscribe(data => {
      this.image='data:image/jpg;base64',+data.file.buffer

    })
    */
  }
  
}

