import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rm-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: false
})
export class EducationComponent implements OnInit {
    dissertationUrl = `${window.location.origin}/RichardMuscat-320ProjectReport-2012.pdf`;

  constructor() { }

  ngOnInit() {
  }

}
