import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsColumn } from './news-column';

describe('NewsColumn', () => {
  let component: NewsColumn;
  let fixture: ComponentFixture<NewsColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
