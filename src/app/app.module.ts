import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './containers/about/about.component';
import { SkillsComponent } from './containers/skills/skills.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { HomeComponent } from './containers/home/home.component';
import { ExperienceComponent } from './containers/experience/experience.component';
import { EducationComponent } from './containers/education/education.component';
import { ContactComponent } from './containers/contact/contact.component';
import { NavToggleComponent } from './components/nav-toggle/nav-toggle.component';
import { InfoComponent } from './components/info/info.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module.ts.module';

@NgModule({ declarations: [
        AppComponent,
        NavToggleComponent,
        AboutComponent,
        SkillsComponent,
        ScrollSpyDirective,
        HomeComponent,
        ExperienceComponent,
        EducationComponent,
        ContactComponent,
        InfoComponent,
        InfoItemComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
