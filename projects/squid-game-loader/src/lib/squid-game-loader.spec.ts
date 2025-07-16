import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquidGameLoader } from './squid-game-loader';

describe('SquidGameLoader', () => {
  let component: SquidGameLoader;
  let fixture: ComponentFixture<SquidGameLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquidGameLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquidGameLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
