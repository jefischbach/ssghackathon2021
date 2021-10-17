import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeAssosPage } from './home-assos.page';

describe('HomeAssosPage', () => {
  let component: HomeAssosPage;
  let fixture: ComponentFixture<HomeAssosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAssosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAssosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
