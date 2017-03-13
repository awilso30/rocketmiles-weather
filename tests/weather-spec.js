// start tests
describe('rocketmiles.com', function() {
// wait for browser to load, close popup and set url for each test
  beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('C:/Users/XZIST/Desktop/Rocketmiles/FE/weather/index.html');
  });

  xit('should have a title', function() {
    expect(browser.getTitle()).toEqual('Rocketmiles - Book Hotels Earn Thousands of Frequent Flyer Miles');
  });

});
