import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SitiosModalComponent } from './sitios-modal.component';

describe('SitiosModalComponent', () => {
  let component: SitiosModalComponent;
  let fixture: ComponentFixture<SitiosModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SitiosModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SitiosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
