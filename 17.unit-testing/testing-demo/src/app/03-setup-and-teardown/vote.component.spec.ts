import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // const component: VoteComponent;

  beforeEach(() => {
    const component = new VoteComponent();
  });

  it('it should increment after upvoted', () => {
    this.component.upVote();

    expect(this.component.totalVotes).toBe(1);
  });

  it('it should decrement after downvoted', () => {
    this.component.downVote();

    expect(this.component.totalVotes).toBe(-1);
  });
});