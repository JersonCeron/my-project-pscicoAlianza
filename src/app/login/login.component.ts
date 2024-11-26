import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  view(){
    const pass = document.getElementById('pass');
    console.log(pass.classList);
    if (pass.classList.contains('active')){

    }
  }
}
