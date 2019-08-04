var add = require('../src/add.js');

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).toEqual(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).toEqual(1);
  });
});
