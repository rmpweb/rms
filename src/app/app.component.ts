import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {DataService} from './services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'rm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  isNavMenuOpen = false;
  public isNavigating = false;
  public fragment: string;
  public currentSection = 'section1';
  public data$: Observable<any>;
  constructor(private dataService: DataService, private location: Location) {
    this.data$ = dataService.getContent();
  }

  onSectionChange(sectionId: string) {
    if (this.isNavigating) {
      if (sectionId === this.fragment) {
        this.updateLocation(sectionId);
      }
    } else {
      this.updateLocation(sectionId);
    }

    console.log(sectionId);
  }

  updateLocation(sectionId: string) {
    this.currentSection = sectionId;
    if (sectionId === 'home') {
      this.location.replaceState('');
      // this.router.navigate([]);
    } else {
      this.location.replaceState('#' + sectionId);
      // this.router.navigate([], {fragment: sectionId});
    }
    this.isNavigating = false;
  }

  onMenuClick() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  scrollToElement(element) {
    this.isNavigating = true;
    this.fragment = element.id;
    this.isNavMenuOpen = false;
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
