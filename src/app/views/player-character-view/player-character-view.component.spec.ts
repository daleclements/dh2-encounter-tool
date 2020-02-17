import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterViewComponent } from './player-character-view.component';

describe('PlayerCharacterViewComponent', () => {
  let component: PlayerCharacterViewComponent;
  let fixture: ComponentFixture<PlayerCharacterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCharacterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
