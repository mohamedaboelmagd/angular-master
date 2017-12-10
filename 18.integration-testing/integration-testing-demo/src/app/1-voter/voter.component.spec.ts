import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    // fixture.nativeElement
    // fixture.debugElement
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const el: HTMLInputElement = fixture.debugElement.query(By.css('.vote-count')).nativeElement;

    expect(el.innerText).toContain(21);
  });

  it('should render highlighted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const dl = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(dl.classes['highlighted']).toBeTruthy();
  });

  it('should increased after clicking upvote icon', () => {
    const dl = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    dl.triggerEventHandler('click', null);
    // component.upVote(); // Unit test

    expect(component.totalVotes).toBe(1);
  });
});
