import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasketCreationPage } from './basket-creation.page';

describe('BasketCreationPage', () => {
  let component: BasketCreationPage;
  let fixture: ComponentFixture<BasketCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
