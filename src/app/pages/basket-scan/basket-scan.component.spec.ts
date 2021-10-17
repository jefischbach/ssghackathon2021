import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasketScanComponent } from './basket-scan.component';

describe('BasketQRComponent', () => {
  let component: BasketScanComponent;
  let fixture: ComponentFixture<BasketScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketScanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
