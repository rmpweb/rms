import { Component, OnInit } from '@angular/core';
import { InfoComponent } from '../../components/info/info.component';
import { InfoItemComponent } from '../../components/info-item/info-item.component';

@Component({
    selector: "rm-education",
    templateUrl: "./education.component.html",
    styleUrls: ["./education.component.scss"],
    standalone: true,
    imports: [InfoComponent, InfoItemComponent]
})
export class EducationComponent implements OnInit {
    dissertationUrl = `${window.location.origin}/RichardMuscat-320ProjectReport-2012.pdf`;

  constructor() { }

  ngOnInit() {
  }

}
