import { Demo0211Page } from './app.po';

describe('demo0211 App', function() {
  let page: Demo0211Page;

  beforeEach(() => {
    page = new Demo0211Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
