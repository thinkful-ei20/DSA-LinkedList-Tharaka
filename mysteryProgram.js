/*This program checks if the next value of the node is equal to the current node value. If they are equal it will skip the next node and go to the next node (next next). 
To sum it up, it will remove all duplicate value nodes from the list.
O(n^2)*/
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}