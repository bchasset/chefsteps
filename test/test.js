var assert = chai.assert;

//dummy data
var hundredThousandAddressses = autoGenerate(100000);

//test
describe('removeDuplicates', function() {

  it('should remove duplicate email addresses', function() {
    var ems = ['a@b.com', 'a@b.com', 'a@b.com'];
    var res = removeDuplicates(ems);
    assert.deepEqual(res, ['a@b.com']);
  });

  it('should preserve the original order', function() {
    var ems = ['a@b.com', 'b@c.com', 'c@d.com', 'a@b.com', 'b@c.com'];
    var res = removeDuplicates(ems);
    assert.deepEqual(res, ['a@b.com', 'b@c.com', 'c@d.com']);
  });

  it('should return an empty array when passed an empty array', function() {
    var ems = [];
    var res = removeDuplicates(ems);
    assert.deepEqual(res, []);
  });

  it('should be case insensitive', function() {
    var ems = ['a@b.com', 'b@c.com', 'c@d.com', 'A@B.cOm', 'B@c.Com'];
    var res = removeDuplicates(ems);
    assert.deepEqual(res, ['a@b.com', 'b@c.com', 'c@d.com']);
  });

  it('should execute in less than 1 second when passed a 100,000 item input with 50% duplicates', function() {
    this.timeout(1000);
    removeDuplicates(hundredThousandAddressses);
  });

});