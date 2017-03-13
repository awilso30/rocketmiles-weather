// start tests
describe('rocketmiles.com', function() {
// wait for browser to load, close popup and set url for each test
  beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('https://awilso30.github.io/rocketmiles-weather/');
  });

  xit('should have a title', function() {
    expect(browser.getTitle()).toContain('Rocketmiles');
  });

});
