import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredlyBadgesComponent } from './credly-badges.component';

describe('CredlyBadgesComponent', () => {
  let component: CredlyBadgesComponent;
  let fixture: ComponentFixture<CredlyBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredlyBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredlyBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
