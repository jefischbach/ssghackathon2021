import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasketQRComponent } from './basket-qr.component';

describe('BasketQRComponent', () => {
  let component: BasketQRComponent;
  let fixture: ComponentFixture<BasketQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketQRComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
