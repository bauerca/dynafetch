var fetch = require('../')(require);
var expect = require('expect.js');

describe('dynafetch', function() {
  it('should asyncly load', function(done) {
    fetch(['./a', './b'], function(a, b) {
      expect(a).to.be('module a');
      expect(b).to.be('module b');
      done();
    });
  });
});
