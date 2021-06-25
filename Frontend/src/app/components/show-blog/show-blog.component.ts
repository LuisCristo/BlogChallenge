import { Router } from '@angular/router';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  showBlogs: any = [];

  constructor(
    private router: Router,
    private blogService: BlogService
  ) { 
  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlog().subscribe(
      (res) => {
        this.showBlogs = res;
      }, (error) => {
        console.log(error)
        alert(error)
      });
  }

}
