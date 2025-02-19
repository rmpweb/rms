import {Component} from "@angular/core";
import {AsyncPipe, Location, NgClass} from "@angular/common";
import {Observable} from "rxjs";
import {DataService} from "./services/data.service";
import {Router} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {AboutComponent} from "./containers/about/about.component";
import {ExperienceComponent} from "./containers/experience/experience.component";
import {EducationComponent} from "./containers/education/education.component";
import {SkillsComponent} from "./containers/skills/skills.component";
import {ContactComponent} from "./containers/contact/contact.component";
import {NavToggleComponent} from "./components/nav-toggle/nav-toggle.component";
import {ScrollSpyDirective} from "./scroll-spy.directive";

@Component({
    selector: "rm-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    imports: [
        HomeComponent,
        AboutComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        ContactComponent,
        AsyncPipe,
        NavToggleComponent,
        ScrollSpyDirective,
        NgClass],
    standalone: true
})
export class AppComponent {

    isNavMenuOpen = false;
    public isNavigating = false;
    public fragment!: string;
    public currentSection = "section1";
    public data$: Observable<any>;

    constructor(private dataService: DataService, private location: Location) {
        this.data$ = dataService.getContent();
    }

    onSectionChange(sectionId: string) {
        if (this.isNavigating) {
            if (sectionId === this.fragment) {
                this.updateLocation(sectionId);
            }
        } else {
            this.updateLocation(sectionId);
        }

        console.log(sectionId);
    }

    updateLocation(sectionId: string) {
        this.currentSection = sectionId;
        if (sectionId === "home") {
            this.location.replaceState("");
            // this.router.navigate([]);
        } else {
            this.location.replaceState("#" + sectionId);
            // this.router.navigate([], {fragment: sectionId});
        }
        this.isNavigating = false;
    }

    onMenuClick() {
        this.isNavMenuOpen = !this.isNavMenuOpen;
    }

    scrollToElement(element: HTMLElement) {
        this.isNavigating = true;
        this.fragment = element.id;
        this.isNavMenuOpen = false;
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }
}
