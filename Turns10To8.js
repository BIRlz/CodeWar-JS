function Charge (ele){
    var a = [];
    var s = "";
    while(ele>0){
        a.push(ele%8)
        ele = parseInt(ele/8);
    }
    while(a.length > 0){
        s += a.pop();
    }
    return s;
}
console.log(Charge(1348))

function sort_(ele) {
  for (var i = 0; i < ele.length - 1; i++) {
    for (var j = i + 1; j < ele.length; j++) {
      if (ele[i] > ele[j]) {
        tmp = ele[i]
        ele[i] = ele[j]
        ele[j] = tmp
      }
    }
  }
  return ele
}