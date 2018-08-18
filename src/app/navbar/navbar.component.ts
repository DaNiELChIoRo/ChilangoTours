import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openPage(pageName, event, color): void {
    //prompt("Something had happened");
    var i, tabcontent, tablinks;
    var target = event.target ;//|| event.srcElement.attributes.id || event.currentTarget.id;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // document.getElementById(pageName).style.display = "block";
    document.getElementById(pageName).style.display = "contents";
    target.style.backgroundColor = color;
    // if(pageName == "Contact"){
    //   var contactTab = document.getElementById("Contact");
    //   contactTab.style.backgroundImage = "url('assets/IMG_1688.JPG')";
    //   contactTab.style.backgroundSize = "cover";
    // }

  }

  // document.getElementById("defaultOpen");

}
