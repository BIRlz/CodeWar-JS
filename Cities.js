function Node(ele,x,y){
        this.element = ele;
        this.locationX = x;
        this.locationY = y;
        this.next = null;
        this.previous = null;
}
function LinkedList(){
    this.head = new Node('head',0,0); // 头节点
}

// 遍历链表，查找给定数据
LinkedList.prototype.find = function(item) {
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

// 返回链表最后一个节点
LinkedList.prototype.findLast = function(){
    var currNode = this.head;
    while( currNode.next != null ){
        currNode = currNode.next;
    }
    return currNode;
}


// 在链表中插入节点，需要修改前一个链表的指向，和当前列表的指向
LinkedList.prototype.insert = function(newElement, item,x,y){
    var newNode = new Node(newElement,x,y);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
}

// 显示链表中的节点
LinkedList.prototype.display = function(){
    var currNode = this.head;
    while( currNode.next != null ){
        console.log(currNode.element + "(" + currNode.locationX + "," + currNode.locationY + ")");
        currNode = currNode.next;
    }
}

// 反序显示链表中的节点
LinkedList.prototype.dispReverse = function(){
    var currNode = this.findLast();
    while( currNode.previous != null ){
        console.log(currNode.element + "(" + currNode.locationX + "," + currNode.locationY + ")");
        currNode = currNode.previous;
    }
}

// 从链表中删除一个节点
LinkedList.prototype.remove = function(item){
    var currNode = this.find(item);
    if( currNode.next != null ){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
LinkedList.prototype.findCitisByLovation = function(x,y){
    var currNode = this.head;
    while(currNode.next != null){
        if(currNode.locationX == x && currNode.locationY == y){
            return currNode.element;
        }
        currNode = currNode.next;
    }
}
LinkedList.prototype.findCities = function(x,y,length){
    var currNode = this.head;
    while(currNode.next != null){
        var distance = Math.sqrt((currNode.locationX - x)*(currNode.locationX - x) + (currNode.locationY - y)*(currNode.locationY - y));
        if(distance <= length  && distance != 0){
            console.log(this.findCitisByLovation(x,y));
            currNode = currNode.next;
            continue;
        }
        currNode = currNode.next;
    }
}


var cities = new LinkedList();
cities.insert('Wuhan', 'head',1,2);

cities.insert('Shanghai', 'Wuhan',3,4);
cities.insert('Changchun', 'Shanghai',5,6);

cities.display(); 
console.log(   )
cities.findCities(1,2,2);
