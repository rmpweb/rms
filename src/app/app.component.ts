import { Component } from '@angular/core';
import data from '../data.json';
import {Observable} from "rxjs";
import {DataService} from "./services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isNavMenuOpen = false;
  public currentSection = 'section1';
  public data$: Observable<any>;
  constructor(private dataService: DataService, private router: Router){
    this.data$ = dataService.getContent();
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.router.navigate([], {fragment: sectionId});
    console.log(sectionId);
  }

  onMenuClick() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  scrollToElement(element) {
    this.isNavMenuOpen = false;
    // element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
