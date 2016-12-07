import { MeanYarnAppPage } from './app.po';

describe('mean-yarn-app App', function() {
  let page: MeanYarnAppPage;

  beforeEach(() => {
    page = new MeanYarnAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
