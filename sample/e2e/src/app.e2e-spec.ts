import { AppPage } from './app.po';
import { environment } from '../../src/environments/environment';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(`Welcome to ${environment.facilityName}`);
  });
});