import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from '../imgservice.service'
import { Files } from '../models/file.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Files={
    title: '',
    description: '',
    file:null
  }
  image:any

  constructor(public imgservice: ImgserviceService) { }

  ngOnInit(): void {
  }
  fileupload(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files;
    this.data.file = file;

    

  }
  onsubmit() {
    let fd = new FormData();
    fd.append('file',this.data.file)
    const {title, description } = this.data;
    console.log(fd,title,description)
    this.imgservice.uploadimage(fd,title,description).subscribe(data => {
      console.log(data)
    },
      err => {
        console.log(err)
      }
    )
    
  }

}
