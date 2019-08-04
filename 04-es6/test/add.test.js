// var add = require('../src/add.js');
// var target = 2;

//es6
import add from '../src/add.js';
let target = 2;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).toEqual(target);
  });
});
