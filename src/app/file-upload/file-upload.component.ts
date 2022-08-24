import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImgserviceService } from 'src/app/imgservice.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  forms = {
    title: '',
    description: ''
  }
  selectedFiles?: FileList;
  currentFile: File[]=[];
  item!: Observable<any>;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(private uploadService: ImgserviceService) { }
  ngOnInit() {
    this.item = this.uploadService.getall()
    
  }
  onchange(event: any) {
      this.selectedFiles = event.target.files

    
  }
  onsubmit() {
    const { title, description } = this.forms
    if (this.selectedFiles) {
      for (var i = 0; i < this.selectedFiles.length; i++) {
        const file: File | null = this.selectedFiles.item(i)
        if (file) {
          this.currentFile.push(file)
          
        }
        
      }
      console.log(this.currentFile)
      this.uploadService.upload(title, description, this.currentFile).subscribe(data => {
        console.log(data)
      })
      
      
       
      
    }

  }
}
