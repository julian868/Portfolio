import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptorDemoComponent } from './encryptor-demo.component';

describe('EncryptorDemoComponent', () => {
  let component: EncryptorDemoComponent;
  let fixture: ComponentFixture<EncryptorDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EncryptorDemoComponent]
    });
    fixture = TestBed.createComponent(EncryptorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
