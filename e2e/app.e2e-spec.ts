import { NgExercisesPage } from './app.po';

describe('ng-exercises App', () => {
  let page: NgExercisesPage;

  beforeEach(() => {
    page = new NgExercisesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
