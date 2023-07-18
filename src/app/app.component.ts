import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form:FormGroup;
constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    tickness:['',Validators.required],
    width:['',Validators.required],
    height:['',Validators.required],
    finished:['',Validators.required],
    suplier:['',Validators.required,],
    category:['',Validators.required],
    level:['',Validators.required]

  })
}

  ngOnInit(): void {
    
  }
}
