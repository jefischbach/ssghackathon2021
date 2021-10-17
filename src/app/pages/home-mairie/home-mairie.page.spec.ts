import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMairiePage } from './home-mairie.page';

describe('HomeMairiePage', () => {
  let component: HomeMairiePage;
  let fixture: ComponentFixture<HomeMairiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMairiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMairiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
