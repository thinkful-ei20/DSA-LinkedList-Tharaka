class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
            this.head = null;
    }

    insertFirst(item){
        this.head = new _Node(item, this.head);
        console.log('HEAD',this.head)
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head){
            return null;
        }
        //Check for the item 
        while(currNode.value !== item) {
            //return null if end of the list 
            // and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //otherwise keep looking 
                currNode = currNode.next;
            }
        }
        //found it
        // console.log('FIND',currNode)
        return currNode;
    }

    findPrev(item) { 
        //start at the head
        let previous = this.head;
        let currNode = this.head;
        //if the list is empty
        if (!this.head){
            return null;
        }
        //Check for the item 
        while(currNode.value !== item) {
            //return null if end of the list 
            // and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //otherwise keep looking 
                previous = currNode;
                currNode = currNode.next;
            }
        }
        //found it
        return previous;
    }
    

    remove(item){ 
        //if the list is empty
        if (!this.head){
            return null;
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }


    inserBefore(key, item) {

        if (!this.head) {
            this.insertFirst(item);
        } else {
            let targetNode = this.find(key);//doont use find here
            let newNode = new _Node(item, targetNode);
            let previous = this.findPrev(key);
            previous.next = newNode;
        }

    }

    insertAfter(key, item) {

        if (!this.head) {
            this.insertFirst(item);
        } else {
            let targetNode = this.find(key);
            let newNode = new _Node(item, targetNode.next);
            targetNode.next = newNode;
        }

    }

    insertAt(pos, item) {
        if (!this.head) {
            this.insertFirst(item);
        } else {
            let previous = this.head;
            let currNode = this.head;
            let counter = 0;
            while(currNode) {
                //return null if end of the list 
                // and the item is not on the list
                if (currNode.next === null) {
                    return null;
                }
                else {
                    if(counter === pos) {
                        let newNode = new _Node(item, currNode);
                        previous.next = newNode;
                    } else {
                    //otherwise keep looking 
                    previous = currNode;
                    currNode = currNode.next;
                    }
                }
                counter++;
            }
        }
    }
}

const main = function() {

    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertFirst('Tauhida');

    SLL.remove('squirrel');

    SLL.inserBefore('Boomer', 'Athena');
    SLL.insertAfter('Helo', 'Hotdog');
    SLL.insertAt(2, 'Kat');

    console.log(JSON.stringify(SLL, null, 2));
}

main();