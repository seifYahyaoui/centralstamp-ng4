import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit {



  @ViewChild('navbarDimension', {read: ElementRef})
  navbarDimensionElementRef: ElementRef;
  navbarHeight : number;

  constructor() {

  }

  ngAfterViewInit(){
    this.navbarHeight = this.navbarDimensionElementRef.nativeElement.getBoundingClientRect().height;
    console.log('navbarHeight : ',this.navbarHeight);
  }
  ngOnInit() {
  }



}
