import { TemplateProjectB3Page } from './app.po';

describe('template-project-b3 App', () => {
  let page: TemplateProjectB3Page;

  beforeEach(() => {
    page = new TemplateProjectB3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
