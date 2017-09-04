import { CentralstampWebNg4Page } from './app.po';

describe('centralstamp-web-ng4 App', () => {
  let page: CentralstampWebNg4Page;

  beforeEach(() => {
    page = new CentralstampWebNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
