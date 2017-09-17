import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';

describe('String conversion client', () => {
  let fixture, app;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    spyOn(app, 'sort');
  });

  it('config should initialize input record', async(() => {
    let i = '(id,created,employee(id,firstname,employeeType(id), lastname),location)';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.inputRecord).toEqual(i);
    });
  }));
  it('should generate an array of strings', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.set).toBeArrayOfStrings();
    });
  }));
  it('array should have 9 elements', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.set).toBeArrayOfSize(9);
    });
  }));
  
  it('clicking button should sort the array', async(() => {
    fixture.nativeElement.querySelector('.sorter').click();
    expect(app.sort.calls.any()).toEqual(true);
  }));
  /*
  it('first element of array', async(() => {
    let s = 'created';
    fixture.nativeElement.querySelector('.sorter').click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.set[0]).toEqual(s);
    });
  }));
  */
});
