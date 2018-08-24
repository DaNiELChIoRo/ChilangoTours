import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

ToggleNavbar(event):void {

  var e = event.target;
  console.log(e);

    if( $("navbar-toggler").is(':vissible') ) {
        $("navbar-collapse").collapse('hide');

    }else{
      console.log('it is not vissible!');
    }

      // $('.navbar-collapse.in').collapse('hide');

      // $(document).on('click','.navbar-collapse.in',function(e) {
      //     if( $(e.target).is('a:not(".dropdown-toggle")') ) {
      //         $(this).collapse('hide');
      //         console.log('Has hecho click');m
      //     }
      // });
  }

}
