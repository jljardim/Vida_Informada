import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistreSePage } from './registre-se.page';

describe('RegistreSePage', () => {
  let component: RegistreSePage;
  let fixture: ComponentFixture<RegistreSePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreSePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistreSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
