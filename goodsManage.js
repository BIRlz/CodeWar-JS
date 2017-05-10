function stack(){
    this.newStack = [];
    this.top = 0;
}

stack.prototype.push = function(x){
    this.newStack[this.top++] = x;
}
stack.prototype.pop = function(){
    return this.newStack[--this.top];
}
stack.prototype.Peep = function(){
    return this.newStack[this.top-1];
}
stack.prototype.display = function(){
    var length = this.top;
    for(var i = 0;i < length ; i++){
        console.log(this.Peep());
        this.top--;
    }
}

var goodsStack = new stack();
goodsStack.push('哇哈哈');
goodsStack.push('健力宝');
goodsStack.push('奥利奥');
goodsStack.display();
var newGoodsStack = new stack();
newGoodsStack.push(goodsStack.pop());
newGoodsStack.push(goodsStack.pop());
newGoodsStack.push(goodsStack.pop());
newGoodsStack.display();
