import {Component, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'rm-info-item',
    templateUrl: './info-item.component.html',
    styleUrls: ['./info-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class InfoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
