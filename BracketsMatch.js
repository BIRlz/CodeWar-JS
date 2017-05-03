function verify () {
    // 左括号正则
    const leftReg = /\{|\(|\[/
    // 右括号正则
    const rightReg = /\}|\)|\]/
    // 如果str是null、undefined、非字符串类型、空串、trim之后是空串、串中不含有左括号、串中不含有右括号
    // 这些情况就直接返回false
    if(
      !str
      || Object.prototype.toString.call(str).slice(8,-1)!== 'String'
      || !str.trim()
      || !leftReg.test(str)
      || !rightReg.test(str)
    ){
      return false
    }
    const stack = []
    let i = 0, n = str.length, char, top
    while( i < n ){
      char = str.charAt(i++)
      // 遇到左括号就进栈
      if(leftReg.test(char)) {
        stack.push(char)
      } else if(rightReg.test(char)) {
        // 如果遇到右括号，栈为空，说明括号的对数不匹配，直接返回
        if(stack.length === 0){
          return false
        }
        // 拿出栈顶元素
        top = stack.pop()
        if(top === '{'){
          // 当前char若不是 } 则再次入栈，否则不处理，下面同理
          if(char !== '}'){
            stack.push(top)
          }
        } else if (top === '(') {
          if(char !== ')'){
            stack.push(top)
          }
        } else if (top === '[') {
          if(char !== ']'){
            stack.push(top)
          }
        }
      }
    }
    return stack.length === 0
  }
