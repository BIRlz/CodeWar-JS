var huffman = function(s) {
    function List() {
        var list = [];
        list.insert = function(node) {
            if (this.length == 0) return this.push(node);
            var l = 0,
                r = this.length - 1,
                v = node.v,
                x;
            while (r - l > 1) //二分查找
                if (this[x = l + (r - l) / 2 | 0].v < v) r = x
                else l = x;
            x = v - this[l].v < this[r].v - v ? r + 1 : l;
            this.splice(x, 0, node);
        };
        return list;
    };

    function Node(a, b) {
        if (a.v && b.v) this.a = a, this.b = b, this.v = a.v + b.v;
        else this.v = a, this.c = b;
    };
    return function(s) {
        var map = {},
            list = new List,
            result = {},
            i, c;
        //建立有序频率序列
        for (i = 0; c = s.charAt(i); i++) c in map ? map[c]++ : map[c] = 1;
        for (i in map) list.push(new Node(map[i], i));
        list.sort(function(a, b) { return b.v - a.v; });
        //建树
        while (list.length > 1)
            list.insert(new Node(list.pop(), list.pop()));
        //遍历叶节点，获取结果集
        (function callee(o, v, d) {
            if (o.c) return result[o.c] = [v, d];
            callee(o.a, v * 2, d + 1), callee(o.b, v * 2 + 1, d + 1);
        })(list[0], 0, 0);
        return result;
    };
}();

var r = huffman("啊，哈哈！！！！！");

//输出结果
var i, bin;
for (i in r) {
    bin = r[i][0].toString(2);
    console.log(i, Array(r[i][1] - bin.length + 1).join(0) + bin);
};
