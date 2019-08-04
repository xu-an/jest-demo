describe('mock函数的.mock属性的测试', function() {
    test('mock函数的.mock属性应该被执行两次', function() {
        const myMock = jest.fn();

        const a = new myMock();     //显式调用mock函数
        const b = {};
        const bound = myMock.bind(b);   //改变this的绑定
        bound();    //调用mock函数

        //console.log(myMock.mock.instances);
        // > [ <a>, <b> ]

        // myMock函数应该有两个实例
        expect(myMock.mock.instances.length).toBe(2);

        // myMock函数应该被调用两次
        expect(myMock.mock.calls.length).toBe(2);
    });

    test('mock函数的.mock属性应该保存了调用信息', function() {
        const myMock = jest.fn(s => s);

        const a = new myMock('first arg', 'second arg');     //显式调用mock函数
        a.name = 'test';

        const b = {};
        const bound = myMock.bind(b);   //改变this的绑定
        bound('return value');    //调用mock函数

        // The function was called exactly twice
        expect(myMock.mock.calls.length).toBe(2);

        // The first arg of the first call to the function was 'first arg'
        expect(myMock.mock.calls[0][0]).toBe('first arg');

        // The second arg of the first call to the function was 'second arg'
        expect(myMock.mock.calls[0][1]).toBe('second arg');

        // The return value of the second call to the function was 'return value'
        expect(myMock.mock.results[1].value).toBe('return value');

        // This function was instantiated exactly twice
        expect(myMock.mock.instances.length).toBe(2);

        // The object returned by the first instantiation of this function
        // had a `name` property whose value was set to 'test'
        expect(myMock.mock.instances[0].name).toEqual('test');
    });
});