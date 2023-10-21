import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'NewsApp';
  @ViewChild(MatSidenav) sideNav!: MatSidenav;


  
  constructor(private observer : BreakpointObserver){

  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
  }


}
