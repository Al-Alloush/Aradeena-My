import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  showClass = '';

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  // show and hidden the navbar
  collapsedNavBar(){
    if(this.collapsed == true){
      //open the navbar
      this.showClass = 'show'
      this.collapsed = false;
    } else if (this.collapsed == false){
      this.showClass='';
      this.collapsed = true;
    }
  }
  // // close the menu list if click outside the navbar
  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   if(this.eRef.nativeElement.contains(event.target)) {
  //   } else {
  //     this.showClass = ""
  //   }
  // }
}
