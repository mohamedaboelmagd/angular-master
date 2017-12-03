import { ReUsableComponentPage } from './app.po';

describe('re-usable-component App', () => {
  let page: ReUsableComponentPage;

  beforeEach(() => {
    page = new ReUsableComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
