import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'rm-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit {

  @Input() title!: string;
  @Input() darkerAccent = false;
  constructor() { }

  ngOnInit() {
  }

}
