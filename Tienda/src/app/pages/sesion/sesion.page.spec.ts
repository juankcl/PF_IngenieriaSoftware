import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesionPage } from './sesion.page';

describe('SesionPage', () => {
  let component: SesionPage;
  let fixture: ComponentFixture<SesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
