describe("Hook示例", function(){
  var foo = false;

  beforeEach(function(done){
    setTimeout(function(){
      foo = true;
      done();
    }, 50);
  });

  it("全局变量异步修改应该成功", function(){
    expect(foo).toBe(true);
  });
});
