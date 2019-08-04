describe('mock函数替换返回值的测试', function() {
    test('mock函数应该能够将返回值进行替换', function() {
        const myMock = jest.fn();
        var ret = myMock();
        //console.log(myMock());
        // > undefined
        expect(ret).toBeUndefined();

        myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true);
        //console.log(myMock(), myMock(), myMock(), myMock());
        // > 10, 'x', true, true

        myMock(), myMock(), myMock(), myMock();     //连续调用多次

        // 此 mock 函数被调用了五次
        expect(myMock.mock.calls.length).toBe(5);

        // 第一次函数调用的返回值是 undefined
        expect(myMock.mock.results[0].value).toBeUndefined();

        // 第二次函数调用的返回值是 10
        expect(myMock.mock.results[1].value).toBe(10);

        // 第三次函数调用的返回值是 ‘x'
        expect(myMock.mock.results[2].value).toBe('x');

        // 第四次函数调用的返回值是 true
        expect(myMock.mock.results[3].value).toBe(true);

        // 第四次之后的函数调用的返回值是 true
        expect(myMock.mock.results[4].value).toBe(true);
    });
});