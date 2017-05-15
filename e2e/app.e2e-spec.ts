import { Ng4MaterialAppPage } from './app.po';

describe('ng4-material-app App', () => {
  let page: Ng4MaterialAppPage;

  beforeEach(() => {
    page = new Ng4MaterialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
