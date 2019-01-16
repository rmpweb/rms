import { Component } from '@angular/core';
import data from '../assets/data.json';

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavMenuOpen = false;
  public currentSection = 'section1';
  public data = data;

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
