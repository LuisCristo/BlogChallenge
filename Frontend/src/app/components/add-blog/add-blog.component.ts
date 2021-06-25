import { Router } from '@angular/router';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  submitted = false;
  addBlogForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private blogService: BlogService
  ) { 
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {
    this.addBlogForm = this.fb.group({
      blogTitle: ['', [Validators.required]],
      blogAuthor: ['', [Validators.required]],
      blogContent: ['', [Validators.required]]
    })
  }
  
  get myForm(){
    return this.addBlogForm.controls;
  }

  onSubmit() {
   
    this.submitted = true;

    if (!this.addBlogForm.valid) {
      return false;
    } else {

      this.blogService.addBlog(this.addBlogForm.value).subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Blog Created!',
            showConfirmButton: false,
            timer: 2500
          })
          setTimeout(() => 
          {
            this.router.navigateByUrl('/showBlog')
          },
          2000);
        }, (error) => {
          alert(error)
        });

        return;
    }
  }
}
