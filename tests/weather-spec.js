// start tests
describe('Rocketmiles Weather', function() {
// set url for each test, wait for browser to load
  beforeEach(function() {
      browser.ignoreSynchronization = false;
      browser.get('https://awilso30.github.io/rocketmiles-weather/');
      browser.driver.sleep(2000);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toContain('Rocketmiles');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toContain('Rocketmiles');
  });

});
