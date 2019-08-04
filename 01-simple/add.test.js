var add = require('./add.js');

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).toBe(2);
    expect(add(1, 1)).toEqual(2);
  });
});
