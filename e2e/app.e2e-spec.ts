import { HousingLoanPage } from './app.po';

describe('housing-loan App', () => {
  let page: HousingLoanPage;

  beforeEach(() => {
    page = new HousingLoanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
