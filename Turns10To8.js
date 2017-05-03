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
console.log(Charge(1348));
