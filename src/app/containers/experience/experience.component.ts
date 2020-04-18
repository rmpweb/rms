import { Component, Input, OnInit } from '@angular/core';
import {ExperienceItem} from './models';

@Component({
  selector: 'rm-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
 @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
