class Node{
    constructor(el){
        this.element = el
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this._head = null
        this._tail = null
        this._len = 0
    }
    append(el){
        if (el == null) { return false }
        let node = new Node(el)
        if (this._len == 0){
            this._head = node;
        }
        else{
            let current = this._head
            for (let i = 0; i < this._len && current.next != null; i++){
                current = current.next
            }
            current.next = node
            node.prev = current;
        }
        this._tail = node
        node.next = this._head;
        this._head.prev = node;
        this._len += 1
        return true
    }
    showData(){
        if (this._len == 0){ return false }
        let current = this._head
        for (let i = 0; i < this._len; i++){
            console.log(current.element)
            current = current.next
        }
        return true
    }
    removeAt(index){
    if (index < 0 || index >= this._len || index == null){ return false }
    let current = this._head
    if (index === 0){
        current.prev = this._tail;
        this._head = current.next
    }
    else{
        let previous;
        for (let i = 0; i < index; i++){
            previous = current
            current = current.next
        }
        current.next.prev = previous
        previous.next = current.next;
    }
    this._len -= 1
    return true
    }
    size(){
        return this._len
    }
    showTail(){
        return this._tail
    }
    preppend(el){
        if (el == null) { return false }
        let node = new Node(el);
        node.next = this._head;
        this._head.prev = node;
        this._head = node;
        node.prev = this._tail;
        this._len += 1
        return true
    }
    insertAt(el, index){
        if (index > this._len || index < 0 || index == null) {return false}
        let node = new Node(el)
        let current = this._head
        if (index == 0){
            node.next = current;
            current.prev = node;
            this._head = node
        }
        else{
            let previous;
            for (let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            }
            if (index == this._len){
                previous.next = node;
                node.prev = previous;
                this._tail = node;
            }
            else{
                node.prev = previous;
                previous.next = node;
                current.prev = node;
                node.next = current;
            }            
        }
        this._len += 1
        return true
    }
    compare(a, b){
        return a === b ? true : false
    }
    indexOf(el){
        if (el == null){ return false }
        let current = this._head;
        for (let i = 0; i < this._len; i++){
            if (this.compare(current.element, el)){
                return i;
            }
            current = current.next
        }
        return -1;
    }
}

let ll = new LinkedList()
ll.append(11)
ll.showData()