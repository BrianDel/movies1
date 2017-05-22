'use strict';

describe('Service: ComponentValue', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var ComponentValue;
  beforeEach(inject(function (_ComponentValue_) {
    ComponentValue = _ComponentValue_;
  }));

  it('should do something', function () {
    expect(!!ComponentValue).toBe(true);
  });

});
