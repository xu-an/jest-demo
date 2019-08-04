import axios from 'axios';

describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    axios
      .get('https://api.github.com')
      .then(function(res){
        expect(res.data).toBeInstanceOf(Object);
        //console.log(res);
        done();
      });
  });
});
