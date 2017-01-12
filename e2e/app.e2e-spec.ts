import { RentACarFrontendPage } from './app.po';

describe('rent-acar-frontend App', function() {
  let page: RentACarFrontendPage;

  beforeEach(() => {
    page = new RentACarFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
