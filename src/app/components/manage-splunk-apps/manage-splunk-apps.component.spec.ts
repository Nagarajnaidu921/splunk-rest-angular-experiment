import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSplunkAppsComponent } from './manage-splunk-apps.component';

describe('ManageSplunkAppsComponent', () => {
  let component: ManageSplunkAppsComponent;
  let fixture: ComponentFixture<ManageSplunkAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSplunkAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSplunkAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
