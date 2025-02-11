import { Component, Input, OnInit } from '@angular/core';
import {ExperienceItem} from './models';

import { InfoComponent } from '../../components/info/info.component';
import { InfoItemComponent } from '../../components/info-item/info-item.component';

@Component({
    selector: 'rm-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [InfoComponent, InfoItemComponent]
})
export class ExperienceComponent implements OnInit {
 @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
