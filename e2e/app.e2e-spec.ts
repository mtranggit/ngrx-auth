import { NgrxAuthPage } from './app.po';

describe('ngrx-auth App', () => {
  let page: NgrxAuthPage;

  beforeEach(() => {
    page = new NgrxAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
