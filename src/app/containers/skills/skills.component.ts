import {AfterViewInit, Component, ElementRef, Input, OnInit} from "@angular/core";

import { InfoComponent } from '../../components/info/info.component';
import {CredlyBadgesComponent} from "./credly-badges/credly-badges.component";

@Component({
    selector: "rm-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"],
    standalone: true,
    imports: [InfoComponent, CredlyBadgesComponent]
})
export class SkillsComponent {
  @Input() data: any;
    badgeIds = ['2da38b66-7e7f-4766-9772-fd2b8afeb5a5','7ece7f6e-5f32-4c1c-b4ac-05c57e950976', 'ade6c8d8-cf93-4849-bd41-08fd89aa2ebf'];
  constructor() { }



}
