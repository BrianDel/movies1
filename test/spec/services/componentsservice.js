'use strict';

describe('Service: ComponentsService', function () {

  // load the service's module
  beforeEach(module('moviesApp'));

  // instantiate service
  var ComponentsService;
  beforeEach(inject(function (_ComponentsService_) {
    ComponentsService = _ComponentsService_;
  }));

  it('should do something', function () {
    expect(!!ComponentsService).toBe(true);
  });

});
