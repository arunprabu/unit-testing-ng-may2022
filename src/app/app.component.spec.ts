// import 
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // Taking up AppComp for testing 

// describe -- talke about what comp we are testing
// group of related test cases 
// describe in part of jasmine 
describe('AppComponent', () => {
  beforeEach(async () => {
    // configureTestingModule -- is similar to your app module 
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent // 
      ]
    }).compileComponents();
  });

  // test case -- test spec 
  // it fn - also part of jasmine
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;// take up only the comp.ts 
    expect(app).toBeTruthy();  // expect is also from jasmine -
    // expect, toBeTruthy are matchers in jasmine 
  });

  // test case -- test spec
  it(`should have as title 'unit-testing-ng-may2022'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;// take up only the comp.ts -- getting an obj of app comp 
    expect(app.title).toEqual('unit-testing-ng-may2022');
  });

  // test case -- test spec
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //Trigger a change detection cycle for the component.
    const compiled = fixture.nativeElement as HTMLElement; // take up only the comp.html
    expect(compiled.querySelector('.content span')?.textContent).toContain('unit-testing-ng-may2022 app is running!');
  });

  it('should have an appname as Unit Testing App', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.appName).toEqual('Unit Testing App');
  });

  it('should have h1 with Unit Testing App', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //Trigger a change detection cycle for the component.
    const compiled = fixture.nativeElement as HTMLElement; // take up only the comp.html
    expect(compiled.querySelector('h1')?.textContent).toMatch('Unit Testing App');
  });

  it('should add two numbers properly', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // multiple expections are often recommended
    expect(app.add(10, 20)).toEqual(30);
    expect(app.add(2, 3)).toEqual(5);
  });

  
});
