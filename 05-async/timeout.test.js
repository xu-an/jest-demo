describe('timeout.test.js - 超时测试', function() {
  it('测试应该 5000 毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).toBe(false);
      done();
    };
    // default 5000ms timeout specified by jest.setTimeout
    setTimeout(f, 4000);
  });
});
