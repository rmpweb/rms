import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "rm-home",
    templateUrl: "./home.component.html",
    standalone: true,
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    @Input() data! : any;

  constructor() { }

  ngOnInit() {
  }

}
