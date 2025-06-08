import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostsComponent } from './reposts.component';

describe('RepostsComponent', () => {
  let component: RepostsComponent;
  let fixture: ComponentFixture<RepostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
