import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showDropDown:boolean = true;

  isMobile:boolean = false;

  constructor() { }

  ngOnInit() {
    if(window.innerWidth <= 512){
      this.isMobile = true;
    }
  }

  hideDropDown():void {
    if(this.isMobile == true){
      this.showDropDown = false;
    }
  }

  displayDropDown(): void{
    if(this.isMobile == true){
      this.showDropDown = true;
    }
  }

  prueba():void {
    // alert('esta es una prueba');
  }

}
