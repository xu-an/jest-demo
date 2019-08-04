import axios from 'axios';

describe('promise.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function() {
    return axios
      .get('https://api.github.com')
      .then(function(res) {
        return res.data;
      }).then(function(json) {
        expect(json).toBeInstanceOf(Object);
      });
  });
});
