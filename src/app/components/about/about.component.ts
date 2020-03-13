import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor(){
  	this.title = "Rodolfo Salgado";
  	this.subtitle = "Programmer and data scientist";
  	this.email = "rsalgado@gmail.com";
  }

  ngOnInit() {
  }

}
