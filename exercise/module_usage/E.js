// import axios from 'axios';

class E {
  static setup() {
  	// 假设此处需要复杂的准备工作才能将E准备好
  }

  static get() {
  	var value = '';
  	// 此处模拟一个异步且复杂的请求，前提是E被准备好
  	setTimeout(function() {
  		value = 'E';
  	}, 10000);
    return value;
  }
}

export default E;