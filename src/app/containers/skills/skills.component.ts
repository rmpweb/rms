import {Component, Input, OnInit} from '@angular/core';

import { InfoComponent } from '../../components/info/info.component';

@Component({
    selector: 'rm-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    imports: [InfoComponent]
})
export class SkillsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
