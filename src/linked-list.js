const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (this.length===0) {
            this._head = new Node(data);
            this._tail = this._head;

        } else {
            let node = new Node(data, this.tail);
            this._tail.next = node;
            this._tail = node;
        }

        this.length++;
        return this;
    }

    head() {
        if (this.length===0) {return null}
        else return this._head.data;
    }

    tail() {
        if (this.length===0) {return null}
        else return this._tail.data;
    }
/////////////////////////проверить at возможно убрать if
    at(index) {
        if (this.length===0) {return null;}
        return this.at[index].data;


    }
///////////////////////////////////// доделать вторую часть
    insertAt(index, data) {
        let currentIndex=0;
        let currentNode=this._head;
        if (this.length===0) {
            this._head= new Node(data);
            this.length++;
            return;
        }




    }

    isEmpty() { return this.length===0}
////////////////////////// проверить клир (можно еще вот так попробовать arr.splice(0,arr.length);)
    clear() {
        let p=this.length;
        this.splice(0,p);
        return this;
    }

    deleteAt(index) {
        this.splice(index, 1);
        return this;

    }

    reverse() {
        let currentNode = this._head,
            length = this.length;

        for (let i = 0; i < length; i++) {
            let backup = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = backup;
            currentNode = currentNode.prev;
        }

        let backup = this._head;
        this._head = this._tail;
        this._tail = backup;

        return this;
    }
    indexOf(data) {
        let node = this._head;
        for (let i = 0; i < this.length; i++) {
            if (node.data === data) {
                return i;
            }
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
