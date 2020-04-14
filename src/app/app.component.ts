import { Component } from '@angular/core';
import data from '../data.json';
import {Observable} from "rxjs";
import {DataService} from "./services/data.service";

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isNavMenuOpen = false;
  public currentSection = 'section1';
  public data$: Observable<any>;
  constructor(private dataService: DataService){
    this.data$ = dataService.getContent();
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(sectionId);
  }

  onMenuClick() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  scrollToElement(element) {
    this.isNavMenuOpen = false;
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
