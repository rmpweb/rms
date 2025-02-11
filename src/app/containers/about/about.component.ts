import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'rm-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: []
})
export class AboutComponent implements OnInit {

  @Input() data! : any;
  constructor() { }

  ngOnInit() {
  }

}
