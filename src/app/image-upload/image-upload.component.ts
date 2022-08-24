import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  form = {
    title: '',
    description: ''
  }
  selectedFiles!: FileList
  currentfile!: File
  content!: Observable<any>
  constructor(public imgservice: ImageService) { }

  ngOnInit() {
    this.content = this.imgservice.getprofile()
  }
  selected(event: any) {
    this.selectedFiles = event.target.files
  }

  upload() {
    const { title, description } = this.form
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0)
      if (file) {
        this.currentfile = file
        this.imgservice.upload(title, description, this.currentfile).subscribe(data => {

          console.log(data)
        }, err => {
            console.log(err)
        })

      }
    }

  }
}
