import {AfterViewInit, Component, ElementRef, Input} from "@angular/core";

@Component({
  selector: 'rm-credly-badges',
  imports: [],
  standalone: true,
  templateUrl: './credly-badges.component.html',
  styleUrl: './credly-badges.component.scss'
})
export class CredlyBadgesComponent implements AfterViewInit {
  @Input() badgeIds: string[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.loadCredlyScript();
  }

  private loadCredlyScript(): void {
    const scriptId = 'credly-embed-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      script.onload = () => {
        this.refreshCredlyBadges();
      };
      document.body.appendChild(script);
    } else {
      this.refreshCredlyBadges(); // Ensure new badges are processed
    }
  }

  private refreshCredlyBadges(): void {
    // @ts-ignore
    if (window['Credly']) {
      // @ts-ignore
      setTimeout(() => window['Credly'].processBadges(), 500);
    }
  }
}