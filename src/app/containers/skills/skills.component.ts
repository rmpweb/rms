import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: any;
  constructor() { }

  ngOnInit() {
  }

}
