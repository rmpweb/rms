import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'rm-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
